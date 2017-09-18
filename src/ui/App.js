import React from 'react';
import UiComponent from './UiComponent.js';
import UiMessageComponent from './UiMessageComponent.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (!props.isInitialized) {
      window.setTimeout(() => { props.initialize(); })
    }
  }

  render() {
    return (
        <div className="App-appContainer">
          <UiMessageComponent />
          <UiComponent />
        </div>
    );
  }
}
