// @flow

import React from 'react';

export type SubmitButtonProps = {|
  styleName: string,
  active: boolean,
  text: string,
|};

export type SubmitButtonDispatch = {|
  onClick: () => any,
|};

type SubmitButtonCombinedProps = SubmitButtonProps & SubmitButtonDispatch;

export default function SubmitButton(props:SubmitButtonCombinedProps) {
  return (
    <button className={props.styleName} disabled={!props.active} onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}
