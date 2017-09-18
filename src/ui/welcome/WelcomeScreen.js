import React from 'react';
import NewGameComponent from './NewGameComponent.js';
import JoinGameComponent from './JoinGameComponent.js';
import './WelcomeScreen.css';

class WelcomeScreen extends React.PureComponent {
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
    if (this.props.mode === 'CREATE') {
      // TODO: Set onAbort in component.
      return <NewGameComponent onAbort={() => this.props.setUiMode('WELCOME')}/>
    } else if (this.props.mode === 'JOIN') {
      // TODO: Set onAbort in component.
      return <JoinGameComponent onAbort={() => this.props.setUiMode('WELCOME')}/>
    } else {
      return (
          <div className="WelcomeScreen-buttonContainer">
            <button className="WelcomeScreen-button"
                    onClick={() => this.props.setUiMode('CREATE')}>
              Start new game
            </button>
            <button className="WelcomeScreen-button"
                    onClick={() => this.props.setUiMode('JOIN')}>
              Join game
            </button>
          </div>
      );
    }
  }
}

export default WelcomeScreen;
