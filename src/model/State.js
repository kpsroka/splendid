// @flow

export type Resource = number;

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
|}

export type FactorySelection = {|
  type: 'FACTORY_SELECTION',
  row: number,
  item: number,
|};

export type ResourceSelection = {|
  type: 'RESOURCE_SELECTION',
  selection: Array<Resource>
|}

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
  round: number,
  board: Board,
  playerState: Array<PlayerState>,
  currentPlayerIndex: ?number
};

export type UiMessage = {
  text: string,
  severity: 'INFO' | 'ERROR'
}

export type UiState = {
  asyncInProgress: boolean,
  message: ?UiMessage,
};

export type GameRef = {
  gameId: string,
  playerToken: string
}

export type State = {
  gameRef: ?GameRef,
  players: Array<Player>,
  gameState: ?GameState,
  ui: UiState
};
