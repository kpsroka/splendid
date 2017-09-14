import React from 'react';
import './WelcomeScreen.css';

class JoinGameForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {playerName: "", gameRefId: ""};
  }

  render() {
    return (
        <div className="WelcomeScreen-formContainer">
          <div>
            <div className="WelcomeScreen-inputRow">
              <div className="WelcomeScreen-inputRowLabel">Player name</div>
              <input type="text"
                     name="playerName"
                     className="WelcomeScreen-textInput"
                     onInput={(inputEvent) => {
                       this.setState({playerName: inputEvent.target.value})
                     }}>
              </input>
            </div>
            <div className="WelcomeScreen-inputRow">
              <div className="WelcomeScreen-inputRowLabel">Game ID</div>
              <input type="text"
                     name="gameRefId"
                     className="WelcomeScreen-textInput"
                     onInput={(inputEvent) => {
                       this.setState({gameRefId: inputEvent.target.value})
                     }}>
              </input>
            </div>
          </div>
          <div className="WelcomeScreen-buttonContainer">
            <button className="WelcomeScreen-button"
                    onClick={() => this.props.joinGame(this.state.playerName, this.state.gameRefId)}>
              Join game
            </button>
            <button className="WelcomeScreen-button"
                    onClick={() => this.props.onAbort()}>
              Go back
            </button>
          </div>
        </div>
    );
  }
}

export default JoinGameForm;
