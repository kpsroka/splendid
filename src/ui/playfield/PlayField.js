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
