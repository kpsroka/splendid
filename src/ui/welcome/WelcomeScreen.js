// @flow

import React from 'react';
import NewGameComponent from './NewGameComponent.js';
import JoinGameComponent from './JoinGameComponent.js';
import './WelcomeScreen.css';

import type { UiMode } from '../../model/State.js';

export type WelcomeScreenProps = {|
  mode: UiMode
|};

export type WelcomeScreenDispatch = {|
  setUiMode: (UiMode) => any,
|};

type WelcomeScreenCombinedProps = WelcomeScreenProps & WelcomeScreenDispatch;

class WelcomeScreen extends React.PureComponent<WelcomeScreenCombinedProps> {
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
      return <NewGameComponent />
    } else if (this.props.mode === 'JOIN') {
      return <JoinGameComponent />
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
