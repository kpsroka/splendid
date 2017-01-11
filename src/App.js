import React from 'react';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';
import SubmitButtonComponent from './ui/components/SubmitButtonComponent';
import './App.css';

const App = () => (
    <div className="appContainer">
        <div className="playArea">
            <div className="centerArea">
                <MineBoardComponent />
                <ResourcePanelComponent />
            </div>
            <SubmitButtonComponent />
        </div>
    </div>
);

export default App;
