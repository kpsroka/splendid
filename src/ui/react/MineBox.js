import React, { PropTypes } from 'react';
import ResourceBox from './ResourceBox';
import './MineBox.css';

class MineBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false, selectable: false };

        this.handleClick = this.handleClick.bind(this);
    }

    setSelectable(selectable) {
        this.setState({ selectable: selectable });
    }

    handleClick() {
        if (this.state.selectable) {
            this.setState({ selected: !this.state.selected });
        }
    }

    renderResourceBoxes(costMap) {
        let resourceBoxes = [];
        costMap.forEach((value, key) => {
            resourceBoxes.push(
                <ResourceBox key={key} bg_color={key} count={value} />
            );
        });
        return resourceBoxes;
    }

    render() {
        return (
            <div
                className="mineBox"
                style={{ borderStyle: (this.state.selectable ? "solid" : "dotted")}}>
                <div
                    className="mineBoxOverlay"
                    style={{ backgroundColor: this.props.mine.resourceType }}
                    onClick={() => this.props.onMineClick()}/>
                <div className="mineCostContainer">
                    {this.renderResourceBoxes(this.props.mine.cost)}
                </div>
            </div>
        )
    }
}

MineBox.PropTypes = {
    mine: PropTypes.shape({
        resourceType: PropTypes.string.isRequired,
        cost: PropTypes.instanceOf(Map).isRequired,
    }).isRequired
};

export default MineBox;
