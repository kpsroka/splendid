import React from 'react';
import ResourceBox from './ResourceBox';
import './Factory.css';

class Factory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false, selectable: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selectable) {
      this.setState({selected: !this.state.selected});
    }
  }

  renderResourceBoxes(colorCosts) {
    let resourceBoxes = [];
    Object.keys(colorCosts).forEach((color) => {
        resourceBoxes.push(
          <ResourceBox key={color} bg_color={color} count={colorCosts[color]}/>
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <div
            className="Factory-container"
            style={{
              borderStyle: (this.state.selected ? "solid" : "dotted"),
              backgroundColor: this.props.bgColor,
              opacity: (this.state.selectable ? "1" : "0.7")
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
