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
import './UiMessage.css';
import type { UiMessage as StateUiMessage } from '../model/State';

export type UiMessageProps = {|
  message: ?StateUiMessage,
|};

export type UiMessageDispatch = {|
  onDismissMessage: () => any,
|};

type UiMessageCombinedProps = UiMessageProps & UiMessageDispatch;

export default function UiMessage(props:UiMessageCombinedProps) {
  let messageClassName = 'UiMessage-hidden';
  if (props.message) {
    if (props.message.severity === 'ERROR') {
      messageClassName = 'UiMessage-severityError';
    } else {
      messageClassName = 'UiMessage-severityInfo';
    }
  }

  const text = props.message ? props.message.text : '';

  return (
      <div className="UiMessage-container">
          <div className={`UiMessage-message ${messageClassName}`}>
              <div
                  className="UiMessage-text"
                  role="alert">
                  {text}
              </div>
              <div
                  testId="dismiss"
                  className="UiMessage-dismiss"
                  onKeyUp={({ key }) => {
                    if (key === 'Enter' || key === ' ') { props.onDismissMessage(); }
                  }}
                  onClick={() => props.onDismissMessage()}
                  tabIndex={0}
                  role="button"
                  aria-label="Dismiss">
                  ×
              </div>
          </div>
      </div>
  );
}
