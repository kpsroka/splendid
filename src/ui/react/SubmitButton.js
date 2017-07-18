import React, {PropTypes} from 'react';
import Config from '../../model/Config';

const SubmitButton = ({active, onClick}) => (
    <button disabled={!active} onClick={() => onClick()}>{Config.submitButtonText}</button>
);

SubmitButton.PropTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SubmitButton;
