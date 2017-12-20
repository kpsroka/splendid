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
import Clickable, { DEFAULT_ROLE, DEFAULT_TABINDEX } from './ClickableDecorator';

describe('Clickable', () => {
  const EMPTY_CALLBACK = () => {};

  it('sets default params', () => {
    const clickable = shallow(<Clickable callback={EMPTY_CALLBACK}><div /></Clickable>);
    expect(clickable.prop('role')).toBe(DEFAULT_ROLE);
    expect(clickable.prop('tabIndex')).toBe(DEFAULT_TABINDEX);
  });

  it('sets provided aria role', () => {
    const ariaRole = 'foo-bar';
    const clickable = shallow(<Clickable callback={EMPTY_CALLBACK} ariaRole={ariaRole}><div /></Clickable>);
    expect(clickable.prop('role')).toBe(ariaRole);
  });

  it('sets provided tab index', () => {
    const tabIndex = 321;
    const clickable = shallow(<Clickable callback={EMPTY_CALLBACK} tabIndex={tabIndex}><div /></Clickable>);
    expect(clickable.prop('tabIndex')).toBe(tabIndex);
  });

  it('sets onKeyUp handler with key value filter', () => {
    const acceptedKeys = [' ', 'Escape'];
    const callback = sinon.spy();
    const clickable = shallow(<Clickable callback={callback} keys={acceptedKeys}><div /></Clickable>);

    clickable.simulate('keyUp', { key: 'Enter' });
    expect(callback.callCount).toBe(0);
    clickable.simulate('keyUp', { key: ' ' });
    expect(callback.callCount).toBe(1);
    clickable.simulate('keyUp', { key: 'Escape' });
    expect(callback.callCount).toBe(2);
    clickable.simulate('keyUp', { key: 'X' });
    expect(callback.callCount).toBe(2);
  });

  it('sets onClick handler with given filter', () => {
    const callback = sinon.spy();
    const filter = sinon.stub();
    const clickable = shallow(<Clickable callback={callback} filter={filter}><div /></Clickable>);

    filter.onCall(0).returns(true);
    filter.onCall(1).returns(false);
    filter.onCall(2).returns(true);
    filter.returns(false);

    expect(callback.callCount).toBe(0);
    clickable.simulate('click', {});
    expect(callback.callCount).toBe(1);
    clickable.simulate('click', {});
    expect(callback.callCount).toBe(1);
    clickable.simulate('click', {});
    expect(callback.callCount).toBe(2);
    clickable.simulate('click', {});
    expect(callback.callCount).toBe(2);
  });
});
