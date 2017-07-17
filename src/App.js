import React from 'react';
import MineBoardComponent from './ui/components/MineBoardComponent';
import ResourcePanelComponent from './ui/components/ResourcePanelComponent';
import SubmitButtonComponent from './ui/components/SubmitButtonComponent';
import PlayerBox from './ui/react/PlayerBox.js';
import PlayerField from './ui/react/PlayerField.js';
import './App.css';

const App = () => (
    <div className="appContainer">
        <div className="playArea">
            <div className="centerArea">
                <MineBoardComponent />
                <ResourcePanelComponent />
            </div>
            <SubmitButtonComponent />
            <PlayerBox name="Adam" score="123" >
                <PlayerField />
            </PlayerBox>
        </div>
    </div>
);

export default App;
