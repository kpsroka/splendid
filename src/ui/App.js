// @flow

import * as React from 'react';
import UiComponent from './UiComponent.js';
import UiMessageComponent from './UiMessageComponent.js';
import './App.css';

export type AppProps = {|
  isInitialized: boolean,
|};

export type AppDispatch = {|
  initialize: () => any,
|}

type AppCombinedProps = AppProps & AppDispatch;

export default class App extends React.Component<AppCombinedProps> {
  constructor(props:AppCombinedProps) {
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
