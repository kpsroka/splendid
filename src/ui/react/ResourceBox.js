import React, { PropTypes } from 'react';
import './ResourceBox.css';

class ResourceBox extends React.Component {
    render() {
        return (
            <div
                className="resourceBox"
                style={{
                    backgroundColor: this.props.bg_color,
                }}>
                {this.props.count}
            </div>
        );
    }
}

ResourceBox.PropTypes = {
    bg_color: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default ResourceBox;
