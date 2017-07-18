import React from 'react';
import NewGameForm from './NewGameForm.js';
import './WelcomeScreen.css';

class WelcomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {showNewGameForm: false};
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
      return <NewGameForm onAbort={() => this.setState({showNewGameForm: false})}/>
    } else {
      return (
          <button className="WelcomeScreen-button"
                  onClick={() => this.setState({showNewGameForm: true})}>
            Start new game
          </button>
      );
    }
  }
}

export default WelcomeScreen;