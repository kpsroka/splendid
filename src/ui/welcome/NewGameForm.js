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
import './WelcomeScreen.css';

export type NewGameDispatch = {|
  createNewGame: (string, number) => any,
  onAbort: () => any,
|};

type NewGameCombinedProps = NewGameDispatch;

type NewGameState = {|
  playerName: string,
  numberOfPlayers: number,
|};

class NewGameForm extends React.Component<NewGameCombinedProps, NewGameState> {
  firstInput:?HTMLInputElement;

  constructor(props:NewGameCombinedProps) {
    super(props);
    this.state = { playerName: '', numberOfPlayers: 2 };
    this.canCreate = this.canCreate.bind(this);
    this.createGame = this.createGame.bind(this);
  }

  canCreate: () => boolean;
  canCreate() {
    return this.state.playerName !== '';
  }

  createGame: () => void;
  createGame() {
    this.props.createNewGame(this.state.playerName, this.state.numberOfPlayers);
  }

  componentDidMount() {
    if (this.firstInput) {
      this.firstInput.focus();
    }
  }

  render() {
    return (
        <div
            className="WelcomeScreen-formContainer"
            role="form">
            <div>
                <div className="WelcomeScreen-inputRow">
                    <div className="WelcomeScreen-inputRowLabel">Player name</div>
                    <input
                        type="text"
                        name="playerName"
                        ref={(input) => { this.firstInput = input; }}
                        className="WelcomeScreen-textInput"
                        onKeyUp={({ key }) => {
                          if (key === 'Enter' && this.canCreate()) { this.createGame(); }
                        }}
                        onInput={(inputEvent) => {
                          this.setState({ playerName: inputEvent.target.value });
                        }}
                    />
                </div>
                <div className="WelcomeScreen-inputRow">
                    <div className="WelcomeScreen-inputRowLabel">Number of players</div>
                    <input
                        testId="playerCount"
                        type="range"
                        min="2"
                        max="5"
                        defaultValue={this.state.numberOfPlayers}
                        onKeyUp={({ key }) => {
                          if (key === 'Enter' && this.canCreate()) { this.createGame(); }
                        }}
                        onInput={(inputEvent) => {
                          this.setState({ numberOfPlayers: inputEvent.target.value });
                        }}
                    />
                    <div>{this.state.numberOfPlayers}</div>
                </div>
            </div>
            <div className="WelcomeScreen-buttonContainer">
                <button
                    testId="create"
                    disabled={!this.canCreate()}
                    className="WelcomeScreen-button"
                    onClick={() => this.createGame()}>
                    Start
                </button>
                <button
                    testId="abort"
                    className="WelcomeScreen-button"
                    onClick={() => this.props.onAbort()}>
                    Go back
                </button>
            </div>
        </div>
    );
  }
}

export default NewGameForm;
