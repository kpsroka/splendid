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
import RESOURCE_COLORS from '../ResourceColorMap.js';
import PlayerResourceSupplyComponent from './PlayerResourceSupplyComponent.js';

import './PlayerBox.css';

export type PlayerBoxProps = {|
  disabled: boolean,
  name?: string,
  score?: number,
|};

export type PlayerBoxOwnProps = {|
  playerIndex: number,
  orientation: 'VERTICAL' | 'HORIZONTAL'
|};

type PlayerBoxCombinedProps = PlayerBoxProps & PlayerBoxOwnProps;

export default function PlayerBox(props:PlayerBoxCombinedProps) {
  if (props.disabled) {
    return null;
  }

  let orientationClassName =
      props.orientation === "VERTICAL" ? "PlayerBox-vertical" : "PlayerBox-horizontal";

  return (
      <div className={`PlayerBox-externalFrame ${orientationClassName}`}>
        <div className="PlayerBox-playerInfoFrame">
          <div className="PlayerBox-playerInfo">
            <div className="PlayerBox-playerInfoContent">
              <span className="PlayerBox-playerName">{props.name}</span>
              <span className="PlayerBox-playerInfoSeparator">&nbsp;&middot;&nbsp;</span>
              <span className="PlayerBox-playerScore">{props.score}</span>
            </div>
          </div>
        </div>
        <div className="PlayerBox-internalFrame">
          {renderResourceSupplies(
              props.playerIndex,
              props.orientation === "VERTICAL" ? "HORIZONTAL" : "VERTICAL")}
        </div>
      </div>
  );
}

function renderResourceSupplies(playerIndex, orientation) {
  let resourceSupplies = [];

  for (let i = 0; i < RESOURCE_COLORS.length; i++) {
    resourceSupplies.push(
        <PlayerResourceSupplyComponent
            key={i}
            playerIndex={playerIndex}
            resource={i}
            orientation={orientation} />);
  }

  return resourceSupplies;
}
