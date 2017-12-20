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

import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import WelcomeScreen from './WelcomeScreen';
import NewGameComponent from './NewGameComponent';
import JoinGameComponent from './JoinGameComponent';

describe('WelcomeScreen', () => {
  const explodingCallback = () => { throw new Error('Should not be called.'); };

  it('displays "Splendid!" on welcome screen', () => {
    const welcomeScreen = shallow(
        <WelcomeScreen mode="WELCOME" setUiMode={explodingCallback} />
    );
    expect(welcomeScreen.text()).toContain('Splendid!');
  });

  it('changes mode to JOIN on button click', () => {
    const setUiModeSpy = sinon.spy();
    const welcomeScreen = shallow(
        <WelcomeScreen mode="WELCOME" setUiMode={setUiModeSpy} />
    );

    expect(setUiModeSpy.called).toBe(false);
    welcomeScreen.find('[testId="join"]').simulate('click');
    expect(setUiModeSpy.calledOnce).toBe(true);
    expect(setUiModeSpy.calledWith('JOIN')).toBe(true);
  });

  it('changes mode to CREATE on button click', () => {
    const setUiModeSpy = sinon.spy();
    const welcomeScreen = shallow(
        <WelcomeScreen mode="WELCOME" setUiMode={setUiModeSpy} />
    );

    expect(setUiModeSpy.called).toBe(false);
    welcomeScreen.find('[testId="create"]').simulate('click');
    expect(setUiModeSpy.calledOnce).toBe(true);
    expect(setUiModeSpy.calledWith('CREATE')).toBe(true);
  });

  it('displays NewGameComponent on CREATE uiMode', () => {
    const welcomeScreen = shallow(
        <WelcomeScreen mode="CREATE" setUiMode={explodingCallback} />
    );

    expect(welcomeScreen.find(NewGameComponent).length).toBe(1);
  });

  it('displays JoinGameComponent on JOIN uiMode', () => {
    const welcomeScreen = shallow(
        <WelcomeScreen mode="JOIN" setUiMode={explodingCallback} />
    );

    expect(welcomeScreen.find(JoinGameComponent).length).toBe(1);
  });

  it('doesn\'t display Join-/NewGameComponent on welcome screen', () => {
    const welcomeScreen = shallow(
        <WelcomeScreen mode="WELCOME" setUiMode={explodingCallback} />
    );

    expect(welcomeScreen.find(JoinGameComponent).length).toBe(0);
    expect(welcomeScreen.find(NewGameComponent).length).toBe(0);
  });
});

