/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import * as React from 'react';
import NewGameComponent from './NewGameComponent';
import JoinGameComponent from './JoinGameComponent';
import './WelcomeScreen.css';
import type { UiMode } from '../../model/State';

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
        <div
            className="WelcomeScreen-container"
            onKeyUp={({ key }) => {
              if (key === 'Escape' && this.props.mode !== 'WELCOME') {
                this.props.setUiMode('WELCOME');
              }
            }}
            tabIndex={-1}
            role="presentation">
            <div className="WelcomeScreen-message">
                Welcome to Splendid!
            </div>
            {this.renderControls()}
        </div>
    );
  }

  renderControls() {
    if (this.props.mode === 'CREATE') {
      return <NewGameComponent />;
    } else if (this.props.mode === 'JOIN') {
      return <JoinGameComponent />;
    } else {
      return (
          <div className="WelcomeScreen-buttonContainer">
              <button
                  testId="create"
                  className="WelcomeScreen-button"
                  onClick={() => this.props.setUiMode('CREATE')}>
                  Start new game
              </button>
              <button
                  testId="join"
                  className="WelcomeScreen-button"
                  onClick={() => this.props.setUiMode('JOIN')}>
                  Join game
              </button>
          </div>
      );
    }
  }
}

export default WelcomeScreen;
