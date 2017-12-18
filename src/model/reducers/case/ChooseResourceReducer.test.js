/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ChooseResourceReducer from './ChooseResourceReducer';
import ChooseResourceFromStackAction from '../../../actions/ChooseResourceFromStackAction';

describe('ChooseResourceReducer', () => {
  it('allows selection of first resource', () => {
    const newSelection =
        ChooseResourceReducer({ type: 'NO_SELECTION' }, ChooseResourceFromStackAction(0), [0]);

    expect(newSelection).toEqual({
      type: 'RESOURCE_SELECTION',
      selection: [0]
    });
  });

  it('allows second resource of one type to be selected', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [1]
    };

    const newSelection = ChooseResourceReducer(
        oldSelection,
        ChooseResourceFromStackAction(1),
        [1, 1]
    );

    expect(newSelection).toEqual({
      type: 'RESOURCE_SELECTION',
      selection: [1, 1]
    });
  });

  it('allows selection of second and third resources of different types', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [1]
    };

    const newSelection = ChooseResourceReducer(
        oldSelection,
        ChooseResourceFromStackAction(2),
        [1, 2, 3]
    );

    expect(newSelection).toEqual({
      type: 'RESOURCE_SELECTION',
      selection: [1, 2]
    });

    const newerSelection = ChooseResourceReducer(
        newSelection,
        ChooseResourceFromStackAction(3),
        [1, 2, 3]
    );

    expect(newerSelection).toEqual({
      type: 'RESOURCE_SELECTION',
      selection: [1, 2, 3]
    });
  });

  it('removes single-type selection on third selection', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [2, 2]
    };

    const newSelection = ChooseResourceReducer(
        oldSelection,
        ChooseResourceFromStackAction(2),
        [2, 2, 2]
    );

    expect(newSelection).toEqual({ type: 'NO_SELECTION' });
  });

  it('removes second resource selection when three types are already selected', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [1, 2, 3]
    };

    const newSelection = ChooseResourceReducer(
        oldSelection,
        ChooseResourceFromStackAction(2),
        [1, 2, 2, 3]
    );

    expect(newSelection).toEqual({
      type: 'RESOURCE_SELECTION',
      selection: [1, 3]
    });
  });

  it('disallows selection of fourth resource type', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [1, 2, 3]
    };

    const newState = ChooseResourceReducer(
        oldSelection,
        ChooseResourceFromStackAction(4),
        [1, 2, 3, 4]
    );
    expect(newState).toBe(oldSelection);
  });

  it('disallows selection of second resource type when two single-type resources are selected', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION',
      selection: [1, 1]
    };

    const newSelection =
        ChooseResourceReducer(oldSelection, ChooseResourceFromStackAction(3), [1, 1, 3]);
    expect(newSelection).toBe(oldSelection);
  });
});
