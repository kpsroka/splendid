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

// @flow

import type { FactorySelection, Selection } from '../../State';
import type { ChooseFactoryFromBoard } from '../../../actions/Actions';

function createFactorySelection(row:number, item:number):FactorySelection {
  return {
    type: 'FACTORY_SELECTION',
    row,
    item
  };
}

export default function ChooseFactoryReducerFn(selection:Selection, action:ChooseFactoryFromBoard) {
  if (selection.type === 'RESOURCE_SELECTION' || selection.type === 'NO_SELECTION') {
    return createFactorySelection(action.row, action.item);
  } else if (selection.row === action.row && selection.item === action.item) {
    return { type: 'NO_SELECTION' };
  } else {
    return createFactorySelection(action.row, action.item);
  }
}
