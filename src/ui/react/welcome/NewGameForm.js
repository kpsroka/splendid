import React from 'react';
import './NewGameForm.css';

class NewGameForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {playerName: "", numberOfPlayers: 2};
  }

  render() {
    return (
        <div className="NewGameForm-container">
          <div className="NewGameForm-inputRow">
            <div className="NewGameForm-inputRowLabel">Player name</div>
            <input type="text"
                   name="playerName"
                   className="NewGameForm-textInput"
                   onInput={(inputEvent) => {
                     this.setState({playerName: inputEvent.target.value})
                   }}>
            </input>
          </div>
          <div className="NewGameForm-inputRow">
            <div className="NewGameForm-inputRowLabel">Number of players</div>
            <input type="range"
                   min="2" max="5"
                   defaultValue={this.state.numberOfPlayers}
                   onInput={(inputEvent) => {
                     this.setState({numberOfPlayers: inputEvent.target.value})
                   }}>
            </input>
            <div>{this.state.numberOfPlayers}</div>
          </div>
          <div className="NewGameForm-buttonRow">
            <button className="NewGameForm-button"
                    onClick={() => this.props.createNewGame(this.state.playerName, this.state.numberOfPlayers)}>
              Start
            </button>
          </div>
          <div className="NewGameForm-buttonRow">
            <button className="NewGameForm-button"
                    onClick={() => this.props.onAbort()}>
              Go back
            </button>
          </div>
        </div>
    );
  }
}

export default NewGameForm;
