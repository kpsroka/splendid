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
import RESOURCE_COLORS from '../ResourceColorMap';
import PlayerResourceSupplyComponent from './PlayerResourceSupplyComponent';

import './PlayerBox.css';

export type PlayerBoxProps = {|
  name: string,
  score: number,
  currentPlayer: boolean
|};

export type PlayerBoxOwnProps = {|
  playerIndex: number,
  orientation: 'VERTICAL' | 'HORIZONTAL'
|};

type PlayerBoxCombinedProps = PlayerBoxProps & PlayerBoxOwnProps;

function renderResourceSupplies(playerIndex, orientation) {
  const resourceSupplies = [];

  for (let i = 0; i < RESOURCE_COLORS.length; i++) {
    resourceSupplies.push(
        <PlayerResourceSupplyComponent
            key={i}
            playerIndex={playerIndex}
            resource={i}
            orientation={orientation} />
    );
  }

  return resourceSupplies;
}

function renderCurrentPlayerElement(content:string) {
  return <div testId="currentPlayerMarker" className="PlayerBox-currentPlayerMark">{content}</div>;
}

export default function PlayerBox(props:PlayerBoxCombinedProps) {
  const orientationClassName =
      props.orientation === 'VERTICAL' ? 'PlayerBox-vertical' : 'PlayerBox-horizontal';

  return (
      <div className={`PlayerBox-externalFrame ${orientationClassName}`}>
          {props.currentPlayer ? renderCurrentPlayerElement('▶') : '' }
          <div className="PlayerBox-playerInfoFrame">
              <div className="PlayerBox-playerInfo">
                  <div className="PlayerBox-playerInfoContent">
                      <span testId="playerName" className="PlayerBox-playerName">{props.name}</span>
                      <span className="PlayerBox-playerInfoSeparator">&nbsp;&middot;&nbsp;</span>
                      <span testId="playerScore" className="PlayerBox-playerScore">{props.score}</span>
                  </div>
              </div>
          </div>
          <div testId="resources" className="PlayerBox-internalFrame">
              {renderResourceSupplies(props.playerIndex, props.orientation === 'VERTICAL' ? 'HORIZONTAL' : 'VERTICAL')}
          </div>
          {props.currentPlayer ? renderCurrentPlayerElement('◀') : '' }
      </div>
  );
}
