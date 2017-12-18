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

import sinon from 'sinon';
import Fetch from './Fetch';
import SetUiMessageAction from '../SetUiMessageAction';

describe('Fetch', () => {
  let fetchStub;
  let dispatchSpy;
  beforeEach(() => {
    fetchStub = sinon.stub(window, 'fetch');
    fetchStub.resolves({
      ok: true,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => (Promise.resolve({}))
    });

    dispatchSpy = sinon.spy();
  });
  afterEach(() => { fetchStub.restore(); });

  describe('with POST', () => {
    it('passes unmodified target as request path', () => {
      const fetchCfg = { target: '/foo/bar/baz', method: 'POST', rejectEmptyResponse: true };

      expect(fetchStub.called).toBe(false);
      Fetch(fetchCfg, {})(dispatchSpy);
      expect(fetchStub.called).toBe(true);
      expect(fetchStub.getCall(0).args[0]).toBe(fetchCfg.target);
    });

    it('passes parameters in request body', () => {
      const fetchCfg = { target: '/foo/bar/baz', method: 'POST', rejectEmptyResponse: true };
      const fetchParams = { foo: 'F00', bar: 'B4R' };

      expect(fetchStub.called).toBe(false);
      Fetch(fetchCfg, fetchParams)(dispatchSpy);
      expect(fetchStub.called).toBe(true);
      const actualInit = fetchStub.getCall(0).args[1];
      expect(actualInit.body).toBeInstanceOf(FormData);
      expect(actualInit.body.get('foo')).toBe(fetchParams.foo);
      expect(actualInit.body.get('bar')).toBe(fetchParams.bar);
    });
  });

  describe('with GET', () => {
    it('passes parameters in request path', () => {
      const fetchCfg = { target: '/foo/bar/baz', method: 'GET', rejectEmptyResponse: true };
      const fetchParams = { foo: 'F00', bar: 'B4R&3v17=yes' };

      expect(fetchStub.called).toBe(false);
      Fetch(fetchCfg, fetchParams)(dispatchSpy);
      expect(fetchStub.called).toBe(true);
      expect(fetchStub.getCall(0).args[0]).toBe(`${fetchCfg.target}?foo=F00&bar=B4R%263v17%3Dyes`);
      expect(fetchStub.getCall(0).args[1].body).not.toBeDefined();
    });
  });

  describe('on success', () => {
    it('returns resolved response', async () => {
      const returnedJson = { foo: 'bar', baz: 123 };
      fetchStub.resetBehavior();
      fetchStub.resolves({
        ok: true,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => (Promise.resolve(returnedJson))
      });

      const fetchCfg = { target: '/foo/bar/baz', method: 'GET', rejectEmptyResponse: true };
      await expect(Fetch(fetchCfg, {})(dispatchSpy)).resolves.toEqual(returnedJson);
    });

    it('dispatches message if present', async () => {
      const returnedMessage = 'T3st me55age';
      fetchStub.resetBehavior();
      fetchStub.resolves({
        ok: true,
        headers: new Headers({
          'content-type': 'application/json',
          'x-ui-message': returnedMessage
        }),
        json: () => (Promise.resolve({}))
      });

      const fetchCfg = { target: '/foo/bar/baz', method: 'GET', rejectEmptyResponse: true };
      await Fetch(fetchCfg, {})(dispatchSpy);
      expect(dispatchSpy.calledOnce).toBe(true);
      expect(dispatchSpy.getCall(0).args[0]).toEqual(SetUiMessageAction(returnedMessage));
    });

    it('dispatches error message if fetch threw', async () => {
      const returnedMessage = 'Oh no! It is broken!';
      fetchStub.resetBehavior();
      fetchStub.resolves({
        ok: false,
        headers: new Headers({ 'x-ui-message': returnedMessage })
      });

      const fetchCfg = { target: '/foo/bar/baz', method: 'GET', rejectEmptyResponse: true };
      try {
        await Fetch(fetchCfg, {})(dispatchSpy);
      } catch (expected) {
        // All right
      }

      expect(dispatchSpy.calledOnce).toBe(true);
      expect(dispatchSpy.getCall(0).args[0]).toEqual(SetUiMessageAction(returnedMessage, 'ERROR'));
    });
  });
});
