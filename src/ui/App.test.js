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

import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let setTimeoutSpy;

  beforeAll(() => {
    expect.extend({
      toBeAFunction(received) {
        if (typeof received === "function") {
          return {
            pass: true,
            message: () => (`expected ${received} not to be a function.`)
          };
        } else {
          return {
            pass: false,
            message: () => (`expected ${received} to be a function.`)
          };
        }
      }
    });
  });

  beforeEach(() => {
    setTimeoutSpy = sinon.spy(window, 'setTimeout');
  });

  afterEach(() => {
    window.setTimeout.restore();
  });

  it('launches initialize if isInitialized is false', () => {
    const initializeSpy = sinon.spy();
    shallow(<App isInitialized={false} initialize={initializeSpy} />);
    setTimeoutSpy.getCalls().forEach(
        (call) => {
          let callArg = call.args[0];
          expect(callArg).toBeAFunction();
          callArg.apply(this, call.args.slice(2));
        }
    );
    expect(initializeSpy.calledOnce).toBe(true);
  });

  it('does not launch initialize if isInitialized is true', () => {
    const initializeSpy = sinon.spy();
    shallow(<App isInitialized={true} initialize={initializeSpy} />);
    initializeSpy.getCalls().forEach(
        (call) => {
          let callArg = call.args[0];
          expect(callArg).toBeAFunction();
          callArg.apply(this, call.args.slice(2));
        }
    );
    expect(initializeSpy.called).toBe(false);
  });
});

