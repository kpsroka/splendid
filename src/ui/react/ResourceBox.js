import React, {PropTypes} from 'react';
import RESOURCE_COLORS from '../ResourceColorMap.js';
import './ResourceBox.css';

class ResourceBox extends React.Component {
  render() {
    return (
        <div
            className="resourceBox"
            style={{
              backgroundColor: RESOURCE_COLORS[this.props.bg_color],
            }}>
          {this.props.count}
        </div>
    );
  }
}

ResourceBox.PropTypes = {
  bg_color: PropTypes.number.isRequired,
  count: PropTypes.number
};

export default ResourceBox;
