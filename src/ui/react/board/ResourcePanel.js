import React from 'react';
import ResourceStack from './ResourceStack.js';
import SubmitButton from '../SubmitButton.js';
import RESOURCE_COLORS from '../../ResourceColorMap.js';
import './ResourcePanel.css';

const ResourcePanel = ({resources, selection, canTakeResources, onStackClick}) => (
    <div className="ResourcePanel-container">
      {RESOURCE_COLORS.map((cssColor, colorIndex) =>
          <ResourceStack
              key={colorIndex}
              bgColor={colorIndex}
              stackSize={resources[colorIndex] || 0}
              highlight={selection[colorIndex] || 0}
              onClickCallback={() => onStackClick(colorIndex)}
          />
      )}
      <div className="ResourcePanel-buttonContainer">
        <SubmitButton text="Take" active={canTakeResources} onClick={() => {}} styleName="" />
      </div>
    </div>
);

export default ResourcePanel;
