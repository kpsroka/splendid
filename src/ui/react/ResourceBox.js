import React, { PropTypes } from 'react';
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

ResourceBox.PropTypes = {
    size: PropTypes.string.isRequired,
    bg_color: PropTypes.string.isRequired,
    fg_color: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default ResourceBox;
