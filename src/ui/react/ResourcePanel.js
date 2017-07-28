import React from 'react';
import ResourceStack from './ResourceStack';
import './ResourcePanel.css';

const ResourcePanel = ({resources, onStackClick}) => (
    <div className="ResourcePanel-container">
      {Object.keys(resources).map(color =>
          <ResourceStack
              key={color}
              bgColor={color}
              stackSize={resources[color]}
              highlight={0}
              onClickCallback={() => onStackClick(color)}
          />
      )}
    </div>
);

export default ResourcePanel;
