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
  constructor(props:NewGameCombinedProps) {
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
              <input testId="playerCount"
                     type="range"
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
            <button
                testId="create"
                disabled={this.state.playerName === ""}
                className="WelcomeScreen-button"
                onClick={() => this.props.createNewGame(this.state.playerName, this.state.numberOfPlayers)}>
              Start
            </button>
            <button testId="abort"
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
