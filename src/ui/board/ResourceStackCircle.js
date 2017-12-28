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

import * as React from 'react';
import RESOURCE_COLORS from '../ResourceColorMap';
import Clickable from '../ClickableDecorator';
import type { Resource } from '../../model/State';
import './ResourceStackCircle.css';

type ResourceStackCircleProps = {|
  topShift?: string,
  backgroundImage?: string,
  resource: Resource,
  text?: string,
  extraClasses: Array<string>,
  onItemClick?: () => any,
|};

export default function ResourceStackCircle(props:ResourceStackCircleProps) {
  const classNames = props.extraClasses.concat(['ResourceStackCircle']);
  const circleDiv = (
      <div
          className={classNames.join(' ')}
          style={{
            top: props.topShift ? props.topShift : 0,
            backgroundColor: RESOURCE_COLORS[props.resource],
            backgroundImage: props.backgroundImage ? `url('${props.backgroundImage}')` : 'none'
          }}>
          <div className="ResourceStackCircle-overlay" />
          <div className="ResourceStackCircle-text">
              {props.text ? props.text : ''}
          </div>
      </div>
  );

  if (props.onItemClick === undefined) {
    return circleDiv;
  } else {
    return <Clickable callback={props.onItemClick}>{circleDiv}</Clickable>;
  }
}

ResourceStackCircle.defaultProps = {
  topShift: undefined,
  backgroundImage: undefined,
  text: undefined,
  onItemClick: undefined
};
