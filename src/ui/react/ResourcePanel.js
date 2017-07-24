import React, {PropTypes} from 'react';
import ResourceStack from './ResourceStack';
import './ResourcePanel.css';

const ResourcePanel = ({resourceSupply, onStackClick}) => (
    <div className="resourcePanel">
      {resourceSupply.stacks.map(stack =>
          <ResourceStack
              key={stack.resourceType}
              bgColor={stack.resourceType}
              stackSize={stack.size}
              highlight={stack.selectedCount}
              onClickCallback={() => onStackClick(stack.resourceType)}
          />
      )}
    </div>
);

ResourcePanel.PropTypes = {
  resourceSupply: PropTypes.shape({
    locked: PropTypes.bool,
    stacks: PropTypes.arrayOf(
        PropTypes.shape({
          resourceType: PropTypes.number.isRequired,
          size: PropTypes.number.isRequired,
          selectedCount: PropTypes.number.isRequired,
          allowSelection: PropTypes.bool.isRequired
        })
    )
  })
};

export default ResourcePanel;
