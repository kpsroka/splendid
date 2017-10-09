import { shallow } from 'enzyme';
import React from 'react';
import UiMessage from './UiMessage.js';

test('renders ui message', () => {
  let message = {
    text: "I am a banana.",
    severity: "INFO"
  };
  const uiMessage = shallow(
      <UiMessage
          message={message}
          onDismissMessage={()=>{throw new Error("should not have been used")}}
      />
  );

  expect(uiMessage.text()).toContain(message.text);
});
