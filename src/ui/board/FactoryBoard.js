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

import React from 'react';
import FactoryComponent from './FactoryComponent.js';
import './FactoryBoard.css';

import type { ResourceFactory } from '../../model/State.js';

export type FactoryBoardProps = {|
  factoriesByRow: Array<Array<ResourceFactory>>,
|};

export default function FactoryBoard(props:FactoryBoardProps) {
  return (
      <div className="FactoryBoard-container">
        <div className="FactoryBoard-text">Splendid!</div>
        {props.factoriesByRow.map((row, rowIndex) => (
            <div className="FactoryBoard-row" key={rowIndex}>
              {row.map((item, itemIndex) => (
                  <FactoryComponent
                      key={itemIndex}
                      rowIndex={rowIndex}
                      itemIndex={itemIndex} />
              ))}
            </div>
        ))}
      </div>
  );
}
