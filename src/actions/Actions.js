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

import type { GameState, Resource, State, UiMode } from '../model/State.js';

export const ActionTypes = Object.freeze({
  ChooseFactoryFromBoard: 'CHOOSE_FACTORY',
  ChooseResourceFromStack: 'CHOOSE_STACK_RESOURCE',
  GrabSelectedResources: 'GRAB_SELECTED_RESOURCES',
  DismissMessage: 'DISMISS_MESSAGE',
  LoadState: 'LOAD_STATE',
  SetGameConfig: '_SET_GAME_CONFIG',
  SetGameState: '_SET_GAME_STATE',
  SetUiMessage: '_SET_UI_MESSAGE',
  SetUiMode: '_SET_UI_MODE',
  TakeResourcesFromStack: 'TAKE_RESOURCES',
});

export type ChooseFactoryFromBoard = {
  type:'CHOOSE_FACTORY',
  row:number,
  item:number
}

export type ChooseResourceFromStack = {
  type:'CHOOSE_STACK_RESOURCE',
  resourceType:Resource
}

export type DismissMessage = {
  type: 'DISMISS_MESSAGE'
}

export type SetGameState = {
  type: '_SET_GAME_STATE',
  gameState: GameState,
}

export type SetUiMessage = {
  type: '_SET_UI_MESSAGE',
  text: string,
  severity: string
}

export type SetUiMode = {
  type: '_SET_UI_MODE',
  mode: UiMode
}

export type Action =
    ChooseFactoryFromBoard |
    ChooseResourceFromStack |
    DismissMessage |
    SetGameState |
    SetUiMessage |
    SetUiMode;

export type GetState = () => State;
// Circular type dependency :/
// eslint-disable-next-line
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any;
