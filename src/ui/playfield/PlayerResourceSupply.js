// @flow

import React from 'react';
import './PlayerResourceSupply.css';
import RESOURCE_COLORS from '../ResourceColorMap.js';

import type { Resource } from '../../model/State.js';

export type PlayerResourceSupplyProps = {|
  factoryCount: number,
  resourceCount: number,
|}

export type PlayerResourceSupplyOwnProps = {|
  resource: Resource,
  playerIndex: number
|}

type PlayerResourceSupplyCombinedProps = PlayerResourceSupplyProps & PlayerResourceSupplyOwnProps;

export default function PlayerResourceSupply(props:PlayerResourceSupplyCombinedProps) {
  return (
      <div className="PlayerResourceSupply-container" style={{ backgroundColor: RESOURCE_COLORS[props.resource] }}>
        <div className="PlayerResourceSupply-factoryCount">{props.factoryCount}</div>
        <span>+</span>
        <div className="PlayerResourceSupply-resourceCount">{props.resourceCount}</div>
      </div>
  );
}
