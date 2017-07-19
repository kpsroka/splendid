import React from 'react';
import WelcomeScreen from './react/welcome/WelcomeScreen.js';
import UiMessageComponent from './components/UiMessageComponent.js';
import './App.css';

export default function App() {
  return (
      <div className="App-appContainer">
        <UiMessageComponent />
        <WelcomeScreen />
      </div>
  );
}
