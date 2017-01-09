import React from 'react';
import Config from './model/Config';
import MineBox from './ui/react/MineBox';
import ResourceBox from './ui/react/ResourceBox';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';

const App = () => (
    <div>
        <MineBox bg_color="green" fg_color="white" >
            {Config.resourceTypes.map((resourceType) => (
                <ResourceBox
                    count={Math.floor(Math.random() * 9) + 1}
                    bg_color={resourceType}
                    fg_color="black" />
            ))}
        </MineBox>
        <MineBoardComponent />
        <ResourcePanelComponent />
    </div>
);

export default App;
