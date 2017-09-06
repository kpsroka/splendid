import React from 'react';
import './JoinGameForm.css';

class JoinGameForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {playerName: "", gameRefId: ""};
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
            <div className="NewGameForm-inputRowLabel">Game ID</div>
            <input type="text"
                   name="gameRefId"
                   className="NewGameForm-textInput"
                   onInput={(inputEvent) => {
                     this.setState({gameRefId: inputEvent.target.value})
                   }}>
            </input>
          </div>
          <div className="NewGameForm-buttonRow">
            <button className="NewGameForm-button"
                    onClick={() => this.props.joinGame(this.state.playerName, this.state.gameRefId)}>
              Join game
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

export default JoinGameForm;
