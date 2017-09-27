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
import FactoryBoardComponent from '../board/FactoryBoardComponent.js';
import PlayerBoxComponent from './PlayerBoxComponent.js';
import ResourcePanelComponent from '../board/ResourcePanelComponent';
import './PlayField.css';

export type PlayFieldProps = {|
  left: Array<number>,
  right: Array<number>
|};

export default function PlayField(props:PlayFieldProps) {
  return (
      <div className="PlayField-container">
        <div className="PlayField-fieldArea">
          <div className="PlayField-otherPlayersArea">
            {props.left.map(playerIndex =>
                <PlayerBoxComponent playerIndex={playerIndex} orientation="VERTICAL" />
            )}
          </div>
          <div className="PlayField-playableArea">
            <FactoryBoardComponent />
            <ResourcePanelComponent />
            <div className="PlayField-thisPlayerArea">
              <PlayerBoxComponent playerIndex={0} orientation="HORIZONTAL" />
            </div>
          </div>
          <div className="PlayField-otherPlayersArea">
            {props.right.map(playerIndex =>
                <PlayerBoxComponent playerIndex={playerIndex} orientation="VERTICAL" />
            )}
          </div>
        </div>
      </div>
  );
}
