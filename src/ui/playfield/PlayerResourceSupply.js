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
  playerIndex: number,
  orientation: 'VERTICAL' | 'HORIZONTAL',
|}

type PlayerResourceSupplyCombinedProps = PlayerResourceSupplyProps & PlayerResourceSupplyOwnProps;

export default function PlayerResourceSupply(props:PlayerResourceSupplyCombinedProps) {
  let orientationClassName =
      props.orientation === "VERTICAL" ? "PlayerResourceSupply-vertical" : "PlayerResourceSupply-horizontal";

  return (
      <div className={`PlayerResourceSupply-container ${orientationClassName}`}
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
