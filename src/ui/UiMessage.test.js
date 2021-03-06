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
import { mount } from 'enzyme';
import React from 'react';
import UiMessage from './UiMessage';

describe('UiMessage', () => {
  const messageProp = {
    text: 'I am a banana.',
    severity: 'INFO'
  };

  test('renders ui message', () => {
    const uiMessage = mount(
        <UiMessage
            message={messageProp}
            onDismissMessage={() => {
              throw new Error('should not have been used');
            }}
        />
    );

    expect(uiMessage.text()).toContain(messageProp.text);
  });

  test('runs callback on dismiss click', () => {
    const dismissCallback = sinon.spy();
    const uiMessage = mount(
        <UiMessage
            message={messageProp}
            onDismissMessage={dismissCallback}
        />
    );

    expect(dismissCallback.called).toBe(false);
    uiMessage.find('[testId="dismiss"]').simulate('click');
    expect(dismissCallback.callCount).toBe(1);
    uiMessage.find('[testId="dismiss"]').simulate('click');
    expect(dismissCallback.callCount).toBe(2);
  });
});
