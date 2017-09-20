// @flow

import React from 'react';
import ResourceBox from './ResourceBox.js';
import './Factory.css';

import type { Resource, ResourceMap } from '../../model/State.js';

export type FactoryProps = {|
  bgColor: Resource,
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
          <ResourceBox key={color} resource={resourceNumber} count={colorCosts[resourceNumber]} />
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <div
            className="Factory-container"
            style={{
              borderColor: (this.props.selected ? "black" : "#bbb"),
              backgroundColor: this.props.bgColor,
            }}
            onClick={() => this.props.onFactoryClick()}>
          <div className="Factory-costContainer">
            {this.renderResourceBoxes(this.props.costColors)}
          </div>
        </div>
    )
  }
}
