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
};

export type Action = ChooseResourceFromStack;

export type ChooseResourceFromStack = {
  type:'CHOOSE_STACK_RESOURCE',
  resourceType:Resource
}
