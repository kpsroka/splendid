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

export type JoinGameProps = {|
  initialGameId: string,
|};

export type JoinGameDispatch = {|
  joinGame: (string, string) => any;
  onAbort: () => any,
|};

type JoinGameCombinedProps = JoinGameProps & JoinGameDispatch;

type JoinGameState = {
  playerName: string,
  gameRefId: string,
};

export default class JoinGameForm extends React.PureComponent<JoinGameCombinedProps, JoinGameState> {
  constructor(props:JoinGameCombinedProps) {
    super(props);
    this.state = { playerName: '', gameRefId: props.initialGameId };
    this.canJoin = this.canJoin.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }

  firstInput:?HTMLInputElement;

  canJoin: () => boolean;
  canJoin() {
    return this.state.playerName !== '' && this.state.gameRefId !== '';
  }

  joinGame: () => void;
  joinGame() {
    this.props.joinGame(this.state.playerName, this.state.gameRefId);
  }

  componentDidMount() {
    if (this.firstInput) {
      this.firstInput.focus();
    }
  }

  render() {
    return (
        <div className="WelcomeScreen-formContainer">
            <div onKeyUp={({ key }) => {
              if (key === 'Enter' && this.canJoin()) {
                this.joinGame();
              }
            }}>
                <div className="WelcomeScreen-inputRow">
                    <div className="WelcomeScreen-inputRowLabel">Player name</div>
                    <input
                        type="text"
                        name="playerName"
                        ref={(input) => { this.firstInput = input; }}
                        className="WelcomeScreen-textInput"
                        onInput={(inputEvent) => {
                          this.setState({ playerName: inputEvent.target.value });
                        }}
                    />
                </div>
                <div className="WelcomeScreen-inputRow">
                    <div className="WelcomeScreen-inputRowLabel">Game ID</div>
                    <input
                        type="text"
                        name="gameRefId"
                        className="WelcomeScreen-textInput"
                        defaultValue={this.props.initialGameId}
                        onInput={(inputEvent) => {
                          this.setState({ gameRefId: inputEvent.target.value });
                        }}
                    />
                </div>
            </div>
            <div className="WelcomeScreen-buttonContainer">
                <button
                    testId="join"
                    disabled={!this.canJoin()}
                    className="WelcomeScreen-button"
                    onClick={() => this.joinGame()}>
                    Join game
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
