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
import RESOURCE_COLORS from '../ResourceColorMap.js';
import RESOURCE_ICONS from '../ResourceIconMap.js';
import './ResourceStack.css';

import type { Resource } from '../../model/State.js';

type ResourceStackCircleProps = {|
  topShift?: string,
  // TODO: borderColor shouldn't be optional.
  borderColor?: string,
  backgroundImage?: string,
  resource: Resource,
  text?: string,
  extraStyles?: string,
  onItemClick: () => any,
|};

type ResourceStackProps = {|
  stackSize: number,
  resource: Resource,
  highlight: number,
  onClickCallback: () => any,
|};

class ResourceStackCircle extends React.Component<ResourceStackCircleProps> {
  render() {
    return (
        <div
            className={"ResourceStack-circle" + (this.props.extraStyles ? " " + this.props.extraStyles : "")}
            style={{
              top: this.props.topShift ? this.props.topShift : 0,
              borderColor: this.props.borderColor,
              backgroundColor: RESOURCE_COLORS[this.props.resource],
              backgroundImage: this.props.backgroundImage ? `url('${this.props.backgroundImage}')` : 'none',
            }}
            onClick={() => this.props.onItemClick()}>
          <div className="ResourceStack-circleText">
            {this.props.text ? this.props.text : ""}
          </div>
        </div>
    );
  }
}

class ResourceStack extends React.Component<ResourceStackProps> {
  renderBaseCircle() {
    return (
        <ResourceStackCircle
            key={0}
            resource={this.props.resource}
            extraStyles={[
                "ResourceStack-circle-base",
                (this.props.stackSize === 0 ? "ResourceStack-circle-head" : "ResourceStack-circle-rest")]
                .join(" ")}
            backgroundImage={RESOURCE_ICONS[this.props.resource]}
            onItemClick={() => this.props.onClickCallback()}/>
    );
  }

  renderStackCircles() {
    let circles = [];
    for (let count = 0; count < this.props.stackSize; count++) {
      let highlighted = (count + this.props.highlight) >= this.props.stackSize;
      let topShift = ((count * 1.2) + (highlighted ? 0.7 : 0)) + "vh";

      circles.push(
          <ResourceStackCircle
              key={count + 1}
              resource={this.props.resource}
              topShift={topShift}
              text={`${count + 1}`}
              extraStyles={[
                highlighted ? "ResourceStack-circle-highlighted" : "",
                (count === this.props.stackSize - 1 ? "ResourceStack-circle-head" : "ResourceStack-circle-rest")]
                .join(" ")}
              onItemClick={() => this.props.onClickCallback()} />);
    }
    return circles;
  }

  render() {
    return (
        <div className="ResourceStack-container">
          {this.renderBaseCircle()}
          {this.renderStackCircles()}
        </div>
    );
  }
}

export default ResourceStack;
