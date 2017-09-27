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

export type Resource = number;

export type ResourceMap = {[Resource]:number};

export type ResourceFactory = {
  color: Resource,
  cost: Array<Resource>,
  points: number
};

export type PlayerHand = {
  factories: Array<ResourceFactory>,
  resources: Array<Resource>
};

export type Player = {
  name: string,
  hand: PlayerHand,
};

export type NoSelection = {|
  type: 'NO_SELECTION',
|};

export type FactorySelection = {|
  type: 'FACTORY_SELECTION',
  row: number,
  item: number,
|};

export type ResourceSelection = {|
  type: 'RESOURCE_SELECTION',
  selection: Array<Resource>
|};

export type Selection = NoSelection | FactorySelection | ResourceSelection;

export type Board = {
  factoriesByRow: Array<Array<ResourceFactory>>,
  resources: Array<Resource>,
  selection: Selection
};

export type PlayerState = {
  hand: PlayerHand,
};

export type GameState = {
  board: Board,
  playerState: Array<PlayerState>,
  currentPlayerIndex: number,
  round: number
};

export type UiMessage = {
  text: string,
  severity: 'INFO' | 'ERROR'
};

export type UiMode = 'INIT' | 'WELCOME' | 'CREATE' | 'JOIN' | 'PLAY';

export type UiState = {
  asyncInProgress: boolean,
  message: ?UiMessage,
  mode: UiMode,
};

export type GameRef = {
  gameId: string,
  playerToken: string
};

export type State = {
  gameRef: ?GameRef,
  players: Array<Player>,
  gameState: ?GameState,
  ui: UiState
};
