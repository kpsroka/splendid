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
import JoinGameForm from './JoinGameForm.js';

describe('JoinGameForm', () => {
  let explodingCallback = () => { throw new Error("Should not have been called.")};

  it('calls abort callback on button click', () => {
    const onAbortSpy = sinon.spy();
    const joinGameForm = shallow(
        <JoinGameForm initialGameId="" joinGame={explodingCallback} onAbort={onAbortSpy} />
    );

    expect(onAbortSpy.called).toBe(false);
    joinGameForm.find('[testId="abort"]').simulate('click');
    expect(onAbortSpy.calledOnce).toBe(true);
  });

  it('enables join button only if input is populated', () => {
    const joinGameForm = shallow(
        <JoinGameForm initialGameId="" joinGame={explodingCallback} onAbort={explodingCallback} />
    );

    expect(joinGameForm.find('button[testId="join"]').is('[disabled=true]')).toBe(true);

    joinGameForm.find('input[name="playerName"]').simulate('input', {target: {value: 'foo'}});
    joinGameForm.find('input[name="gameRefId"]').simulate('input', {target: {value: ''}});
    expect(joinGameForm.find('button[testId="join"]').is('[disabled=true]')).toBe(true);

    joinGameForm.find('input[name="playerName"]').simulate('input', {target: {value: ''}});
    joinGameForm.find('input[name="gameRefId"]').simulate('input', {target: {value: 'bar'}});
    expect(joinGameForm.find('button[testId="join"]').is('[disabled=true]')).toBe(true);

    joinGameForm.find('input[name="playerName"]').simulate('input', {target: {value: 'foo'}});
    joinGameForm.find('input[name="gameRefId"]').simulate('input', {target: {value: 'bar'}});
    expect(joinGameForm.find('button[testId="join"]').is('[disabled=false]')).toBe(true);
  });

  it('populates input with initialGameId', () => {
    const initialGameId="abracadabra";
    const joinGameForm = shallow(
        <JoinGameForm initialGameId={initialGameId} joinGame={explodingCallback} onAbort={explodingCallback} />
    );

    const input = joinGameForm.find('input[name="gameRefId"]').render();
    expect(input.attr('value')).toBe(initialGameId);
  });

  it('passes proper arguments to createNewGame callback', () => {
    const joinGameSpy = sinon.spy();
    const joinGameForm= shallow(
        <JoinGameForm initialGameId="" joinGame={joinGameSpy} onAbort={explodingCallback} />
    );

    const playerName = 'Scooby Doo';
    const gameRefId = 'and the mysterious mystery';

    joinGameForm.find('input[name="playerName"]').simulate('input', {target: {value: playerName}});
    joinGameForm.find('input[name="gameRefId"]').simulate('input', {target: {value: gameRefId}});

    expect(joinGameSpy.called).toBe(false);

    joinGameForm.find('button[testId="join"]').simulate('click');
    expect(joinGameSpy.calledOnce).toBe(true);
    expect(joinGameSpy.calledWith(playerName, gameRefId)).toBe(true);
  });
});
