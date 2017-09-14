import React from 'react';

export default function SubmitButton(props) {
  return (
    <button className={props.styleName} disabled={!props.active} onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}
