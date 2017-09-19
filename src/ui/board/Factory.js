import React from 'react';
import ResourceBox from './ResourceBox.js';
import './Factory.css';

class Factory extends React.Component {
  renderResourceBoxes(colorCosts) {
    let resourceBoxes = [];
    Object.keys(colorCosts).forEach((color) => {
        resourceBoxes.push(
          <ResourceBox key={color} resource={color} count={colorCosts[color]}/>
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <div
            className="Factory-container"
            style={{
              borderColor: (this.props.selected ? "black" : "#bbb"),
              backgroundColor: this.props.bgColor,
            }}
            onClick={() => this.props.onFactoryClick()}>
          <div className="Factory-costContainer">
            {this.renderResourceBoxes(this.props.costColors)}
          </div>
        </div>
    )
  }
}

export default Factory;
