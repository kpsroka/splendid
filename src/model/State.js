// @flow

export type Resource = number;

export type ResourceFactory = {
  color:Resource,
  cost:Array<Resource>,
  points:number;
}

export type PlayerHand = {
  factories:Array<ResourceFactory>,
  resources:Array<Resource>
};

export type Player = {
  name:string,
  hand:PlayerHand,
};

export type ResourceFactorySelection = {|
  row:number,
  column:number,
|};

export type Board = {
  factoriesByRow:Array<Array<ResourceFactory>>,
  resources:Array<Resource>,
  selection:Array<Resource>|ResourceFactorySelection
};

export type State = {
  players:Array<Player>,
  board:Board,
};
