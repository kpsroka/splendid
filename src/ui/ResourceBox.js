import React from 'react';

class ResourceBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: (this.state.count+1) });
    }

    render() {
        return (
            <div
                style={{
                    marginTop: "5px",
                    border: "2px black solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: this.props.size,
                    height: this.props.size,
                    userSelect: "none",
                    backgroundColor: this.props.bg_color,
                    color: this.props.fg_color}}
                onClick={() => this.handleClick()}
            >
                {this.state.count}
            </div>
        );
    }
}

export default ResourceBox;
