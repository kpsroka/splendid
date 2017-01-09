import React from 'react';
import MineBox from './ui/react/MineBox';
import ResourceBox from './ui/react/ResourceBox';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';

const App = () => (
    <div>
        <MineBox bg_color="green" fg_color="white" >
            <ResourceBox count="1" bg_color="red" fg_color="white" size="16px" />
            <ResourceBox count="2" bg_color="blue" fg_color="white" size="16px" />
            <ResourceBox count="3" bg_color="darkgreen" fg_color="white" size="16px" />
            <ResourceBox count="4" bg_color="black" fg_color="white" size="16px" />
            <ResourceBox count="0" bg_color="white" fg_color="black" size="16px" />
        </MineBox>
        <MineBoardComponent />
        <ResourcePanelComponent />
    </div>
);

export default App;
