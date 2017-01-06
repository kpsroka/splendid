import React, { Component } from 'react';
import MineBox from './ui/MineBox';
import ResourceBox from './ui/ResourceBox';
import ResourceStack from './ui/ResourceStack';

class App extends Component {
  render() {
    return (
        <div>
            <MineBox bg_color="green" fg_color="white" >
                <ResourceBox count="1" bg_color="red" fg_color="white" size="16px" />
                <ResourceBox count="2" bg_color="blue" fg_color="white" size="16px" />
                <ResourceBox count="3" bg_color="darkgreen" fg_color="white" size="16px" />
                <ResourceBox count="4" bg_color="black" fg_color="white" size="16px" />
                <ResourceBox count="0" bg_color="white" fg_color="black" size="16px" />
            </MineBox>
            <ResourceStack bgColor="red" stackSize={4} />
            <ResourceStack bgColor="blue" stackSize={0} />
            <ResourceStack bgColor="green" stackSize={2} />
        </div>
    );
  }
}

export default App;
