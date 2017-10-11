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
import NewGameForm from './NewGameForm.js';

describe('NewGameForm', () => {
  let explodingCallback = () => { throw new Error("Should not have been called.")};

  it('calls abort callback on button click', () => {
    const onAbortSpy = sinon.spy();
    const newGameForm = shallow(
        <NewGameForm createNewGame={explodingCallback} onAbort={onAbortSpy} />
    );

    expect(onAbortSpy.called).toBe(false);
    newGameForm.find('[testId="abort"]').simulate('click');
    expect(onAbortSpy.calledOnce).toBe(true);
  });

  it('enables "create" button only if player name is non-empty', () => {
    const onAbortSpy = sinon.spy();
    const newGameForm = shallow(
        <NewGameForm createNewGame={explodingCallback} onAbort={onAbortSpy} />
    );

    expect(newGameForm.find('[testId="create"]').is('[disabled=true]')).toBe(true);
    newGameForm.find('input[name="playerName"]').simulate('input', {target: {value: 'foo'}});
    expect(newGameForm.find('[testId="create"]').is('[disabled=false]')).toBe(true);
    newGameForm.find('input[name="playerName"]').simulate('input', {target: {value: ''}});
    expect(newGameForm.find('[testId="create"]').is('[disabled=true]')).toBe(true);
  });

  it('passes proper arguments to createNewGame callback', () => {
    const createNewGameSpy = sinon.spy();
    const newGameForm = shallow(
        <NewGameForm createNewGame={createNewGameSpy} onAbort={explodingCallback} />
    );

    const playerName = 'Scooby Doo';
    const playerCount = 3;

    newGameForm.find('input[name="playerName"]').simulate('input', {target: {value: playerName}});
    newGameForm.find('input[testId="playerCount"]').simulate('input', {target: {value: playerCount}});

    expect(createNewGameSpy.called).toBe(false);

    newGameForm.find('[testId="create"]').simulate('click');
    expect(createNewGameSpy.calledOnce).toBe(true);
    expect(createNewGameSpy.calledWith(playerName, playerCount)).toBe(true);
  });
});
