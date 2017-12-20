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
import ResourceBoxComponent from './ResourceBoxComponent';
import RESOURCE_COLORS from '../ResourceColorMap';
import RESOURCE_ICONS from '../ResourceIconMap';
import './Factory.css';
import type { Resource, ResourceMap } from '../../model/State';
import Clickable from '../ClickableDecorator';

export type FactoryProps = {|
  resource: Resource,
  costColors: ResourceMap,
  points: number,
  selected: boolean,
|};

export type FactoryDispatch = {|
  onFactoryClick: () => any;
|};

type FactoryCombinedProps = FactoryProps & FactoryDispatch;

export default class Factory extends React.Component<FactoryCombinedProps> {
  static renderResourceBoxes(colorCosts:ResourceMap) {
    const resourceBoxes = [];
    Object.keys(colorCosts).forEach((color) => {
      const resourceNumber:Resource = Number.parseInt(color, 10);
      resourceBoxes.push(
          <ResourceBoxComponent key={color} resource={resourceNumber} count={colorCosts[resourceNumber]} />
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <Clickable callback={() => this.props.onFactoryClick()}>
            <div
                className="Factory-container"
                style={{
                  borderColor: (this.props.selected ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.25)'),
                  boxShadow: (this.props.selected ? 'rgba(0, 0, 0, 0.5) 0.3vh 0.3vh 0.3vh 0.3vh' : 'none'),
                  backgroundColor: RESOURCE_COLORS[this.props.resource],
                  backgroundImage: `url('${RESOURCE_ICONS[this.props.resource]}')`
                }}>
                <div className="Factory-overlay Factory-costContainer">
                    {Factory.renderResourceBoxes(this.props.costColors)}
                </div>
                <div className="Factory-overlay Factory-pointsContainer">
                    {this.props.points}
                </div>
            </div>
        </Clickable>
    );
  }
}
