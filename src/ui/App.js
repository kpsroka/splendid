import React from 'react';
import UiComponent from './components/UiComponent.js';
import UiMessageComponent from './components/UiMessageComponent.js';
import './App.css';

export default function App() {
  return (
      <div className="App-appContainer">
        <UiMessageComponent />
        <UiComponent />
      </div>
  );
}
