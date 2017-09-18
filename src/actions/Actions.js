// @flow

import type { Resource } from '../model/State.js';

export const ActionTypes = {
  ChooseFactoryFromBoard: 'CHOOSE_FACTORY',
  ChooseResourceFromStack: 'CHOOSE_STACK_RESOURCE',
  GrabSelectedResources: 'GRAB_SELECTED_RESOURCES',
  DismissMessage: 'DISMISS_MESSAGE',
  SetGameConfig: '_SET_GAME_CONFIG',
  SetGameState: '_SET_GAME_STATE',
  SetUiMessage: '_SET_UI_MESSAGE',
  SetUiMode: '_SET_UI_MODE',
  TakeResourcesFromStack: 'TAKE_RESOURCES',
};

export type ChooseFactoryFromBoard = {
  type:'CHOOSE_FACTORY',
  row:number,
  item:number
}

export type ChooseResourceFromStack = {
  type:'CHOOSE_STACK_RESOURCE',
  resourceType:Resource
}

export type Action = ChooseFactoryFromBoard | ChooseResourceFromStack;
