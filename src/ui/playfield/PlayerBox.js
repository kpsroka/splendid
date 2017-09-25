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
