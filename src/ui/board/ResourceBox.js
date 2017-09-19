// @flow

import React from 'react';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import './ResourceBox.css';

import type { Resource } from '../../model/State.js';

type ResourceBoxProps = {|
  bg_color: Resource,
  count: number,
|};

export default class ResourceBox extends React.Component<ResourceBoxProps> {
  render() {
    return (
        <div
            className="ResourceBox-container"
            style={{
              backgroundColor: RESOURCE_COLORS[this.props.bg_color],
            }}>
          {this.props.count}
        </div>
    );
  }
}
