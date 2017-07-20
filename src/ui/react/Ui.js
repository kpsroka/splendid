import React from 'react';
import PlayField from './playfield/PlayField.js';
import WelcomeScreen from './welcome/WelcomeScreen.js';

export default function Ui({ showField }) {
  if (showField) {
    return <PlayField />
  } else {
    return <WelcomeScreen />
  }
}
