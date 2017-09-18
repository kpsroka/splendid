import React from 'react';
import PlayField from './playfield/PlayField.js';
import WelcomeScreenComponent from './welcome/WelcomeScreenComponent.js';

export default function Ui({ mode, showField }) {
  if (mode === 'PLAY' || showField) {
    return <PlayField />
  } else {
    return <WelcomeScreenComponent />
  }
}
