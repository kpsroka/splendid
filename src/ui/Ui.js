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
import PlayFieldComponent from './playfield/PlayFieldComponent.js';
import WelcomeScreenComponent from './welcome/WelcomeScreenComponent.js';

export type UiProps = {|
  mode: string,
|};

export default function Ui(props:UiProps) {
  if (props.mode === 'PLAY') {
    return <PlayFieldComponent />
  } else {
    return <WelcomeScreenComponent />
  }
}
