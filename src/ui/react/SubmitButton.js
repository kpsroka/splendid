import React, {PropTypes} from 'react';

const SubmitButton = ({active, onClick}) => (
    <button disabled={!active} onClick={() => onClick()}>Get</button>
);

SubmitButton.PropTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SubmitButton;
