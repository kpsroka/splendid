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
import './ResourceBox.css';
import RESOURCE_COLORS from '../ResourceColorMap';
import type { Resource } from '../../model/State';

export type ResourceBoxProps = {|
  available: boolean,
|}

export type ResourceBoxOwnProps = {|
  resource: Resource,
  count: number,
|};

type ResourceBoxCombinedProps = ResourceBoxOwnProps & ResourceBoxProps;

export default function ResourceBox(props:ResourceBoxCombinedProps) {
  const availabilityClass = props.available ? 'ResourceBox-available' : 'ResourceBox-unavailable';
  return (
      <div
          className={`ResourceBox-container ${availabilityClass}`}
          style={{ backgroundColor: RESOURCE_COLORS[props.resource] }}>
          <div className="ResourceBox-outerShadow">
              <div className="ResourceBox-innerShadow">
                  {props.count}
              </div>
          </div>
      </div>
  );
}
