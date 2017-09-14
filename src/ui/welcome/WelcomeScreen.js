import React from 'react';
import NewGameComponent from './NewGameComponent.js';
import JoinGameComponent from './JoinGameComponent.js';
import './WelcomeScreen.css';

class WelcomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {showNewGameForm: false, showJoinGameForm: false};
  }

  render() {
    return (
        <div className="WelcomeScreen-container">
          <div className="WelcomeScreen-message">
            Welcome to Splendid!
          </div>
          {this.renderControls()}
        </div>
    );
  }

  renderControls() {
    if (this.state.showNewGameForm) {
      return <NewGameComponent onAbort={() => this.setState({showNewGameForm: false})}/>
    } else if (this.state.showJoinGameForm) {
      return <JoinGameComponent onAbort={() => this.setState({showJoinGameForm: false})}/>
    } else {
      return (
          <div className="WelcomeScreen-buttonContainer">
            <button className="WelcomeScreen-button"
                    onClick={() => this.setState({showNewGameForm: true})}>
              Start new game
            </button>
            <button className="WelcomeScreen-button"
                    onClick={() => this.setState({showJoinGameForm: true})}>
              Join game
            </button>
          </div>
      );
    }
  }
}

export default WelcomeScreen;