import React from 'react';
import FactoryBoardComponent from '../board/FactoryBoardComponent.js';
import PlayerBoxComponent from './PlayerBoxComponent.js';
import ResourcePanelComponent from '../board/ResourcePanelComponent';
import './PlayField.css';

export default function PlayField() {
  return (
      <div className="PlayField-container">
        <div className="PlayField-fieldArea">
          <div className="PlayField-otherPlayersArea">
            <PlayerBoxComponent playerIndex={2} />
            <PlayerBoxComponent playerIndex={1} />
          </div>
          <div className="PlayField-playableArea">
            <FactoryBoardComponent />
            <ResourcePanelComponent />
          </div>
          <div className="PlayField-otherPlayersArea">
            <PlayerBoxComponent playerIndex={3} />
            <PlayerBoxComponent playerIndex={4} />
          </div>
        </div>
        <div className="PlayField-thisPlayerArea">
          <PlayerBoxComponent playerIndex={0} />
        </div>
      </div>
  );
}
