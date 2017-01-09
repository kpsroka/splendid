import React, { PropTypes } from 'react';
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

    render() {
        return (
            <div
                className="mineBox"
                style={{
                    backgroundColor: this.props.bg_color,
                    opacity: (this.state.selectable ? 1.0 : 0.4),
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

MineBox.PropTypes = {
    bg_color: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node)
};

export default MineBox;
