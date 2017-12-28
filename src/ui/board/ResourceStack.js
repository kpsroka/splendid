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
import RESOURCE_COLORS from '../ResourceColorMap';
import RESOURCE_ICONS from '../ResourceIconMap';
import './ResourceStack.css';
import type { Resource } from '../../model/State';
import Clickable from '../ClickableDecorator';

type ResourceStackCircleProps = {|
  topShift?: string,
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
  onClickCallback: () => any
|};

function ResourceStackCircle(props:ResourceStackCircleProps) {
  const extraStyles = props.extraStyles ? ` ${props.extraStyles}` : '';
  return (
      <Clickable callback={props.onItemClick}>
          <div
              className={`ResourceStack-circle${extraStyles}`}
              style={{
                top: props.topShift ? props.topShift : 0,
                backgroundColor: RESOURCE_COLORS[props.resource],
                backgroundImage: props.backgroundImage ? `url('${props.backgroundImage}')` : 'none'
              }}>
              <div className="ResourceStack-circle-overlay" />
              <div className="ResourceStack-circle-text">
                  {props.text ? props.text : ''}
              </div>
          </div>
      </Clickable>
  );
}

function renderBaseCircle(props:ResourceStackProps) {
  return (
      <ResourceStackCircle
          key={0}
          resource={props.resource}
          extraStyles={[
              'ResourceStack-circle-base',
              (props.stackSize === 0 ? 'ResourceStack-circle-head' : 'ResourceStack-circle-rest')]
              .join(' ')}
          backgroundImage={RESOURCE_ICONS[props.resource]}
          onItemClick={() => props.onClickCallback()} />
  );
}

function renderStackCircles(props:ResourceStackProps) {
  const circles = [];
  for (let count = 0; count < props.stackSize; count++) {
    const highlighted = (count + props.highlight) >= props.stackSize;
    const topShift = `${(count * 1.2) + (highlighted ? 0.7 : 0)}vh`;

    circles.push(
        <ResourceStackCircle
            key={count + 1}
            resource={props.resource}
            topShift={topShift}
            text={`${count + 1}`}
            extraStyles={[
              highlighted ? 'ResourceStack-circle-highlighted' : '',
              (count === props.stackSize - 1 ? 'ResourceStack-circle-head' : 'ResourceStack-circle-rest')]
            .join(' ')}
            onItemClick={() => props.onClickCallback()} />
    );
  }
  return circles;
}

export default function ResourceStack(props:ResourceStackProps) {
  return (
      <div className="ResourceStack-container">
          {renderBaseCircle(props)}
          {renderStackCircles(props)}
      </div>
  );
}
