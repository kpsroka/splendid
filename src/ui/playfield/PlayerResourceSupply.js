// @flow

import React from 'react';
import './PlayerResourceSupply.css';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import RESOURCE_ICONS from '../ResourceIconMap.js';

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
      <div className="PlayerResourceSupply-container"
           style={{
             backgroundColor: RESOURCE_COLORS[props.resource],
             color: RESOURCE_COLORS[props.resource],
           }}>
        <div className="PlayerResourceSupply-resourceIcon"
             style={{
               backgroundImage: `url('${RESOURCE_ICONS[props.resource]}')`
             }}
        ></div>
        <div className="PlayerResourceSupply-factoryCount">{props.factoryCount}</div>
        <div className="PlayerResourceSupply-resourceCount">{props.resourceCount}</div>
      </div>
  );
}
