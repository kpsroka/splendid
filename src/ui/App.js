import React from 'react';
import MineBoardComponent from './components/MineBoardComponent';
import ResourcePanelComponent from './components/ResourcePanelComponent';
import SubmitButtonComponent from './components/SubmitButtonComponent';
import PlayerBox from './react/PlayerBox.js';
import PlayerField from './react/PlayerField.js';
import './App.css';

const App = () => (
    <div className="App-appContainer">
        <div className="App-playArea">
            <div className="App-centerArea">
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
