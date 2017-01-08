import React from 'react';
import './ResourceStack.css';

class ResourceStackCircle extends React.Component {
    render() {
        return (
            <div
                className={"stackCircle" + (this.props.extraStyles ? " " + this.props.extraStyles : "")}
                style={{
                    left: this.props.leftShift ? this.props.leftShift : 0,
                    borderColor: this.props.borderColor,
                    backgroundColor: this.props.bgColor,
                }}
                onClick={()=>this.props.onItemClick(this.props.text)}>
                <div
                    className="stackCircleText"
                    style={{ fontWeight: this.props.fontWeight }}>
                    {this.props.text ? this.props.text : ""}
                </div>
            </div>
        );
    }
}

class ResourceStack extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(text) {
        this.props.onClickCallback();
    }

    renderBaseCircle() {
        return (
            <ResourceStackCircle
                key={0}
                bgColor={this.props.bgColor}
                extraStyles="stackCircle-base"
                onItemClick={this.handleClick} />
        );
    }

    renderStackCircles() {
        var circles = [];
        for (var count = 0; count < this.props.stackSize; count++) {
            var highlighted = (count + this.props.highlight) >= this.props.stackSize;
            var leftShift=(count*8) + "px";

            circles.push(
                <ResourceStackCircle
                    key={count+1}
                    leftShift={leftShift}
                    bgColor={this.props.bgColor}
                    text={count+1}
                    extraStyles={highlighted ? "stackCircle-highlighted" : ""}
                    onItemClick={this.handleClick} />);
        }
        return circles;
    }

    render() {
        return (
            <div className="stack">
                {this.renderBaseCircle()}
                {this.renderStackCircles()}
            </div>
        );
    }
}

export default ResourceStack;
