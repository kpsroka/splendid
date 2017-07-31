import React from 'react';
import ResourceStack from './ResourceStack';
import RESOURCE_COLORS from '../../ResourceColorMap.js';
import './ResourcePanel.css';

const ResourcePanel = ({resources, selection, onStackClick}) => (
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
    </div>
);

export default ResourcePanel;
