import React from 'react';
import ResourceStack from './ResourceStack.js';
import SubmitButton from '../SubmitButton.js';
import RESOURCE_COLORS from '../../ResourceColorMap.js';
import './ResourcePanel.css';

const ResourcePanel = (props) => (
    <div className="ResourcePanel-container">
      {RESOURCE_COLORS.map((cssColor, colorIndex) =>
          <ResourceStack
              key={colorIndex}
              bgColor={colorIndex}
              stackSize={props.resources[colorIndex] || 0}
              highlight={props.selection[colorIndex] || 0}
              onClickCallback={() => props.onStackClick(colorIndex)}
          />
      )}
      <div className="ResourcePanel-buttonContainer">
        <SubmitButton
            text="Take"
            active={props.canTakeSelection}
            onClick={() => { props.onTake(); }} styleName="" />
      </div>
    </div>
);

export default ResourcePanel;
