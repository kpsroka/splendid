/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import React from 'react';
import UiComponent from './UiComponent';
import UiMessageComponent from './UiMessageComponent';
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
      window.setTimeout(() => { props.initialize(); });
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
