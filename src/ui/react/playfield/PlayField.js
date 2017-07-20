import React from 'react';
import './PlayField.css';

export default class PlayField extends React.PureComponent {
  render() {
    return (
        <div className="PlayField-container">
          <div className="PlayField-fieldArea">
            <div className="PlayField-otherPlayersArea">
            </div>
            <div className="PlayField-fieldArea">
            </div>
            <div className="PlayField-otherPlayersArea">
            </div>
          </div>
          <div className="PlayField-thisPlayerArea">
          </div>
        </div>
    );
  }
}