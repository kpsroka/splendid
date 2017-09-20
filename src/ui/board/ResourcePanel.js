// @flow

import React from 'react';
import ResourceStack from './ResourceStack.js';
import SubmitButtonComponent from './SubmitButtonComponent.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import './ResourcePanel.css';

import type { Resource, ResourceMap } from '../../model/State.js';

export type ResourcePanelProps = {|
  resources: ResourceMap,
  selection: ResourceMap,
|};

export type ResourcePanelDispatch = {|
  onStackClick: (Resource) => any,
|};

type ResourcePanelCombinedProps = ResourcePanelProps & ResourcePanelDispatch;

export default function ResourcePanel(props:ResourcePanelCombinedProps) {
  return (
      <div className="ResourcePanel-container">
        {RESOURCE_COLORS.map((cssColor, resource) =>
            <ResourceStack
                key={resource}
                resource={resource}
                stackSize={props.resources[resource] || 0}
                highlight={props.selection[resource] || 0}
                onClickCallback={() => props.onStackClick(resource)}
            />
        )}
        <div className="ResourcePanel-buttonContainer">
          <SubmitButtonComponent />
        </div>
      </div>
  );
}
