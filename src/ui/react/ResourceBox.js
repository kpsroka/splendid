import React from 'react';
import './ResourceBox.css';

class ResourceBox extends React.Component {
    render() {
        return (
            <div
                className="resourceBox"
                style={{
                    width: this.props.size,
                    height: this.props.size,
                    backgroundColor: this.props.bg_color,
                    color: this.props.fg_color
                }}>
                {this.props.count}
            </div>
        );
    }
}

export default ResourceBox;
