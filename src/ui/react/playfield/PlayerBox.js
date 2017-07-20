import React from 'react';
import './PlayerBox.css';

function PlayerBox(props) {
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
          {props.children}
        </div>
      </div>
  );
}

export default PlayerBox;
