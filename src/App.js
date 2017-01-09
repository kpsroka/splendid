import React from 'react';
import Config from './model/Config';
import MineBox from './ui/react/MineBox';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';

const App = () => (
    <div>
        <MineBox mine={{
            resourceType: "green",
            cost: new Map(
                Config.resourceTypes.map((resourceType) => (
                    [resourceType, Math.floor(Math.random() * 9) + 1]
                ))
            )
        }} />
        <MineBoardComponent />
        <ResourcePanelComponent />
    </div>
);

export default App;
