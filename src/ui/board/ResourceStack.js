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
import ResourceStackCircle from './ResourceStackCircle';
import RESOURCE_ICONS from '../ResourceIconMap';
import type { Resource } from '../../model/State';
import './ResourceStack.css';

type ResourceStackProps = {|
  stackSize: number,
  resource: Resource,
  highlight: number,
  onClickCallback: () => any
|};

export default function ResourceStack(props:ResourceStackProps) {
  function renderBaseCircle() {
    const isHead = (props.stackSize === 0);

    return (
        <ResourceStackCircle
            key={0}
            resource={props.resource}
            extraClasses={[
              'ResourceStackCircle-base',
              isHead ? 'ResourceStackCircle-head' : 'ResourceStackCircle-rest'
            ]}
            backgroundImage={RESOURCE_ICONS[props.resource]}
            onItemClick={isHead ? props.onClickCallback : undefined}
        />
    );
  }

  function renderStackCircles() {
    const circles = [];
    for (let count = 0; count < props.stackSize; count++) {
      const highlighted = (count + props.highlight) >= props.stackSize;
      const topShift = `${(count * 1.2) + (highlighted ? 0.7 : 0)}vh`;
      const isHead = (count === props.stackSize - 1);

      circles.push(
          <ResourceStackCircle
              key={count + 1}
              resource={props.resource}
              topShift={topShift}
              text={`${count + 1}`}
              extraClasses={[
                  highlighted ? 'ResourceStackCircle-highlighted' : '',
                  isHead ? 'ResourceStackCircle-head' : 'ResourceStackCircle-rest'
              ]}
              onItemClick={isHead ? props.onClickCallback : undefined}
          />
      );
    }
    return circles;
  }

  return (
      <div className="ResourceStack">
          {renderBaseCircle()}
          {renderStackCircles()}
      </div>
  );
}
