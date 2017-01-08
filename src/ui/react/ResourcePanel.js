import React from 'react';
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
)

export default ResourcePanel;
