import React from 'react';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';
import SubmitButton from './ui/react/SubmitButton';
import './App.css';

const App = () => (
    <div className="appContainer">
        <div className="playArea">
            <div className="centerArea">
                <MineBoardComponent />
                <ResourcePanelComponent />
            </div>
            <SubmitButton />
        </div>
    </div>
);

export default App;
