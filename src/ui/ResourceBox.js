import React from 'react';

class ResourceBox extends React.Component {
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
            >
                {this.props.count}
            </div>
        );
    }
}

export default ResourceBox;
