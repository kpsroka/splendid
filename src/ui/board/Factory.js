// @flow

import React from 'react';
import ResourceBoxComponent from './ResourceBoxComponent.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import RESOURCE_ICONS from '../ResourceIconMap.js';
import './Factory.css';

import type { Resource, ResourceMap } from '../../model/State.js';

export type FactoryProps = {|
  resource: Resource,
  costColors: ResourceMap,
  points: number,
  selected: boolean,
|};

export type FactoryOwnProps = {|
  rowIndex: number,
  itemIndex: number,
|};

export type FactoryDispatch = {|
  onFactoryClick: () => any;
|};

type FactoryCombinedProps = FactoryProps & FactoryOwnProps & FactoryDispatch;

export default class Factory extends React.Component<FactoryCombinedProps> {
  renderResourceBoxes(colorCosts:ResourceMap) {
    let resourceBoxes = [];
    Object.keys(colorCosts).forEach((color) => {
      let resourceNumber:Resource = Number.parseInt(color, 10);
      resourceBoxes.push(
          <ResourceBoxComponent key={color} resource={resourceNumber} count={colorCosts[resourceNumber]} />
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <div
            className="Factory-container"
            style={{
              borderColor: (this.props.selected ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.25)'),
              boxShadow: (this.props.selected ? 'rgba(0, 0, 0, 0.5) 1px 1px 1px 1px' : 'none'),
              backgroundColor: RESOURCE_COLORS[this.props.resource],
              backgroundImage: `url('${RESOURCE_ICONS[this.props.resource]}')`
            }}
            onClick={() => this.props.onFactoryClick()}>
          <div className="Factory-overlay Factory-costContainer">
            {this.renderResourceBoxes(this.props.costColors)}
          </div>
          <div className="Factory-overlay Factory-pointsContainer">
            {this.props.points}
          </div>
        </div>
    )
  }
}
