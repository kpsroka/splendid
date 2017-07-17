import React from 'react';
import WelcomeScreen from './react/welcome/WelcomeScreen.js';
import './App.css';

const App = () => (
    <div className="App-appContainer">
        <WelcomeScreen />
        <div className="App-playArea">
            <div className="centerArea" />
        </div>
    </div>
);

export default App;
