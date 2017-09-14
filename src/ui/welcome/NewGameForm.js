import React from 'react';
import './WelcomeScreen.css';

class NewGameForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {playerName: "", numberOfPlayers: 2};
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
              <div className="WelcomeScreen-inputRowLabel">Number of players</div>
              <input type="range"
                     min="2" max="5"
                     defaultValue={this.state.numberOfPlayers}
                     onInput={(inputEvent) => {
                       this.setState({numberOfPlayers: inputEvent.target.value})
                     }}>
              </input>
              <div>{this.state.numberOfPlayers}</div>
            </div>
          </div>
          <div className="WelcomeScreen-buttonContainer">
            <button className="WelcomeScreen-button"
                    onClick={() => this.props.createNewGame(this.state.playerName, this.state.numberOfPlayers)}>
              Start
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

export default NewGameForm;
