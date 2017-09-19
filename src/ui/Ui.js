// @flow

import React from 'react';
import PlayField from './playfield/PlayField.js';
import WelcomeScreenComponent from './welcome/WelcomeScreenComponent.js';

export type UiProps = {|
  mode: string,
  showField: boolean,
|};

export default function Ui(props:UiProps) {
  if (props.mode === 'PLAY' || props.showField) {
    return <PlayField />
  } else {
    return <WelcomeScreenComponent />
  }
}
