import React from 'react';
import RESOURCE_COLORS from '../../ResourceColorMap.js';
import PlayerResourceSupplyComponent from '../../components/PlayerResourceSupplyComponent.js';

import './PlayerBox.css';

function PlayerBox(props) {
  if (props.disabled) {
    return null;
  }

  return (
      <div className="PlayerBox-externalFrame">
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
          {renderResourceSupplies(props.playerIndex)}
        </div>
      </div>
  );
}

function renderResourceSupplies(playerIndex) {
  let resourceSupplies = [];

  for (let i = 0; i < RESOURCE_COLORS.length; i++) {
    resourceSupplies.push(<PlayerResourceSupplyComponent key={i} playerIndex={playerIndex} resource={i} />);
  }

  return resourceSupplies;
}

export default PlayerBox;
