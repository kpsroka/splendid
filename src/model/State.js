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

export type Board = {
  factoriesByRow:Array<Array<ResourceFactory>>,
  resources:Array<Resource>,
};

export type State = {
  players:Array<Player>,
  board:Board,
};
