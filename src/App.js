import React, { Component } from 'react';
import MineBox from './ui/MineBox.js';
import ResourceBox from './ui/ResourceBox.js';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <MineBox bg_color="green" fg_color="white" >
                <ResourceBox bg_color="red" fg_color="white" size="16px" />
                <ResourceBox bg_color="blue" fg_color="white" size="16px" />
                <ResourceBox bg_color="darkgreen" fg_color="white" size="16px" />
                <ResourceBox bg_color="black" fg_color="white" size="16px" />
                <ResourceBox bg_color="white" fg_color="black" size="16px" />
            </MineBox>
            <ResourceBox bg_color="red" fg_color="white" size="120px" />
        </div>
    );
  }
}

export default App;
