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

import ChooseFactoryReducer from './ChooseFactoryReducer.js';
import ChooseFactoryFromBoard from '../../../actions/ChooseFactoryFromBoardAction.js';

describe('ChooseFactoryReducer', () => {
  it('changes selection if current selection is resource selection', () => {
    const oldSelection = {
      type: 'RESOURCE_SELECTION', selection: [0,1,2]
    };

    const newSelection= ChooseFactoryReducer(oldSelection, ChooseFactoryFromBoard(0, 1));
    expect(newSelection).toEqual({
      type: 'FACTORY_SELECTION', row: 0, item: 1
    });
  });

  it('changes selection if current selection is none', () => {
    const newSelection = ChooseFactoryReducer({ type: 'NO_SELECTION' }, ChooseFactoryFromBoard(2, 3));
    expect(newSelection).toEqual({
      type: 'FACTORY_SELECTION', row: 2, item: 3,
    });
  });

  it('changes selection if action args differ from existing selection', () => {
    const oldSelection = {
      type: 'FACTORY_SELECTION', row: 1, item: 2
    };
    const newSelection = ChooseFactoryReducer(oldSelection, ChooseFactoryFromBoard(2, 3));
    expect(newSelection).toEqual({
      type: 'FACTORY_SELECTION', row: 2, item: 3
    });
  });

  it('removes selection if action args match existing selection', () => {
    const oldSelection = {
      type: 'FACTORY_SELECTION', row: 1, item: 2
    };

    const newSelection = ChooseFactoryReducer(oldSelection, ChooseFactoryFromBoard(1, 2));
    expect(newSelection).toEqual({ type: 'NO_SELECTION' });
  });
});
