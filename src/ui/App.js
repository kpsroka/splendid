import React from 'react';
import UiComponent from './UiComponent.js';
import UiMessageComponent from './UiMessageComponent.js';
import './App.css';

export default function App() {
  return (
      <div className="App-appContainer">
        <UiMessageComponent />
        <UiComponent />
      </div>
  );
}
