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
        />
        <div className="PlayerResourceSupply-factoryCount">{props.factoryCount}</div>
        <div className="PlayerResourceSupply-resourceCount">{props.resourceCount}</div>
      </div>
  );
}
