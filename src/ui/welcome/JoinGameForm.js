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

import React from 'react';
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

export default class JoinGameForm extends
    React.PureComponent<JoinGameCombinedProps, JoinGameState> {
  constructor(props:JoinGameCombinedProps) {
    super(props);
    this.state = {playerName: "", gameRefId: props.initialGameId};
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
                     defaultValue={this.props.initialGameId}
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
