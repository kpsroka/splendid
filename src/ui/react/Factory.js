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

  renderResourceBoxes(costMap) {
    let resourceBoxes = [];
    costMap.forEach((value, key) => {
      resourceBoxes.push(
          <ResourceBox key={key} bg_color={key} count={value}/>
      );
    });
    return resourceBoxes;
  }

  render() {
    return (
        <div
            className="Factory-container"
            style={{borderStyle: (this.state.selectable ? "solid" : "dotted")}}>
          <div
              className="Factory-overlay"
              style={{
                backgroundColor: this.props.factory.color,
                opacity: (this.state.selectable ? "1" : "0.5")
              }}
              onClick={() => this.props.onFactoryClick()}/>
          <div className="Factory-costContainer">
            {this.renderResourceBoxes(this.props.factory.cost)}
          </div>
        </div>
    )
  }
}

export default Factory;
