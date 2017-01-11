import React from 'react';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';
import './App.css';

const App = () => (
    <div className="playArea">
        <MineBoardComponent />
        <ResourcePanelComponent />
    </div>
);

export default App;
