// @flow

import React from 'react';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import './ResourceBox.css';

import type { Resource } from '../../model/State.js';

export type ResourceBoxProps = {|
  available: boolean,
|}

export type ResourceBoxOwnProps = {|
  resource: Resource,
  count: number,
|};

type ResourceBoxCombinedProps = ResourceBoxOwnProps & ResourceBoxProps;

export default class ResourceBox extends React.Component<ResourceBoxCombinedProps> {
  render() {
    let availabilityClass = this.props.available ? "ResourceBox-available" : "ResourceBox-unavailable";
    return (
        <div className={`ResourceBox-container ${availabilityClass}`}
             style={{
               backgroundColor: RESOURCE_COLORS[this.props.resource],
             }}>
          <div className="ResourceBox-outerShadow">
            <div className="ResourceBox-innerShadow">
              {this.props.count}
            </div>
          </div>
        </div>
    );
  }
}
