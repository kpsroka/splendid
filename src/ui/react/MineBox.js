import React from 'react';

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
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    width: "120px",
                    height: "120px",
                    padding: "5px",
                    backgroundColor: this.props.bg_color,
                    opacity: (this.state.selectable ? 1.0 : 0.4),
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default MineBox;
