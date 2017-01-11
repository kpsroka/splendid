import React from 'react';
import Config from '../../model/Config';

const SubmitButton = ({ active, onClick }) => (
    <button disabled={!active} onClick={() => onClick()}>{Config.submitButtonText}</button>
);

export default SubmitButton;
