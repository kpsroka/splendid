import React, {PropTypes} from 'react';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import './ResourceStack.css';

class ResourceStackCircle extends React.Component {
  render() {
    return (
        <div
            className={"ResourceStack-circle" + (this.props.extraStyles ? " " + this.props.extraStyles : "")}
            style={{
              top: this.props.topShift ? this.props.topShift : 0,
              borderColor: this.props.borderColor,
              backgroundColor: RESOURCE_COLORS[this.props.bgColor],
            }}
            onClick={() => this.props.onItemClick()}>
          <div
              className="ResourceStack-circleText"
              style={{fontWeight: this.props.fontWeight}}>
            {this.props.text ? this.props.text : ""}
          </div>
        </div>
    );
  }
}

ResourceStackCircle.PropTypes = {
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.number.isRequired,
  fontWeight: PropTypes.string.isRequired,
  leftShift: PropTypes.string,
  onItemClick: PropTypes.func.isRequired
};

class ResourceStack extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClickCallback();
  }

  renderBaseCircle() {
    return (
        <ResourceStackCircle
            key={0}
            bgColor={this.props.bgColor}
            extraStyles={[
                "ResourceStack-circle-base",
                (this.props.stackSize === 0 ? "ResourceStack-circle-head" : "ResourceStack-circle-rest")]
                .join(" ")}
            onItemClick={this.handleClick}/>
    );
  }

  renderStackCircles() {
    let circles = [];
    for (let count = 0; count < this.props.stackSize; count++) {
      let highlighted = (count + this.props.highlight) >= this.props.stackSize;
      let topShift = (count * 8) + "px";

      circles.push(
          <ResourceStackCircle
              key={count + 1}
              topShift={topShift}
              bgColor={this.props.bgColor}
              text={count + 1}
              extraStyles={[
                highlighted ? "ResourceStack-circle-highlighted" : "",
                (count === this.props.stackSize - 1 ? "ResourceStack-circle-head" : "ResourceStack-circle-rest")]
                .join(" ")}
              onItemClick={this.handleClick}/>);
    }
    return circles;
  }

  render() {
    return (
        <div className="ResourceStack-container">
          {this.renderBaseCircle()}
          {this.renderStackCircles()}
        </div>
    );
  }
}

ResourceStack.PropTypes = {
  bgColor: PropTypes.string.isRequired,
  stackSize: PropTypes.number.isRequired,
  highlight: PropTypes.number.isRequired,
  onClickCallback: PropTypes.func.isRequired
};

export default ResourceStack;
