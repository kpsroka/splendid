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
import './ResourcePanel.css';
import ResourceStack from './ResourceStack';
import SubmitButtonComponent from './SubmitButtonComponent';
import RESOURCE_COLORS from '../ResourceColorMap';
import type { Resource, ResourceMap } from '../../model/State';

export type ResourcePanelProps = {|
  resources: ResourceMap,
  selection: ResourceMap,
|};

export type ResourcePanelDispatch = {|
  // eslint-disable-next-line react/no-unused-prop-types
  onStackClick: (Resource) => any,
|};

type ResourcePanelCombinedProps = ResourcePanelProps & ResourcePanelDispatch;

export default function ResourcePanel(props:ResourcePanelCombinedProps) {
  return (
      <div className="ResourcePanel-container">
          <div className="ResourcePanel-resourceStacks">
              {RESOURCE_COLORS.map((cssColor, resource) => (
                  <ResourceStack
                      // eslint-disable-next-line react/no-array-index-key
                      key={resource}
                      resource={resource}
                      stackSize={props.resources[resource] || 0}
                      highlight={props.selection[resource] || 0}
                      onClickCallback={() => props.onStackClick(resource)}
                  />
              ))}
          </div>
          <div className="ResourcePanel-buttonContainer">
              <SubmitButtonComponent />
          </div>
      </div>
  );
}
