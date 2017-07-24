// @flow

export type Resource = number;

export type ResourceFactory = {
  color: Resource,
  cost: Array<Resource>,
  points: number;
}

export type PlayerHand = {
  factories: Array<ResourceFactory>,
  resources: Array<Resource>
};

export type Player = {
  name: string,
  hand: PlayerHand,
};

export type ResourceFactorySelection = {|
  row: number,
  column: number,
|};

export type Board = {
  factoriesByRow: Array<Array<ResourceFactory>>,
  resources: Array<Resource>,
  selection: Array<Resource> | ResourceFactorySelection
};

export type PlayerState = {
  hand: PlayerHand,
};

export type GameState = {
  round: number,
  board: Board,
  playerState: Array<PlayerState>
};

export type UiMessage = {
  text: string,
  severity: 'INFO' | 'ERROR'
}

export type UiState = {
  asyncInProgress: boolean,
  message: ?UiMessage,
};

export type State = {
  gameId: ?string,
  players: Array<Player>,
  gameState: ?GameState,
  ui: UiState
};
