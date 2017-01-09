import React, { PropTypes } from 'react';
import ResourceStack from './ResourceStack';

const ResourcePanel = ({ resourceSupply, onStackClick }) => (
    <div>
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
                resourceType: PropTypes.string.isRequired,
                size: PropTypes.number.isRequired,
                selectedCount: PropTypes.number.isRequired,
                allowSelection: PropTypes.bool.isRequired
            })
        )
    })
};

export default ResourcePanel;
