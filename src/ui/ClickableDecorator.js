/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import * as React from 'react';

export type ClickableProps = {|
  children: React.Node,
  callback: () => any,
  tabIndex?: number,
  keys?: Array<string>,
  filter?: () => boolean,
  ariaRole?: string,
|};

export const DEFAULT_ROLE = 'button';
export const DEFAULT_TABINDEX = 0;

function getFilterFn(filter?: () => boolean):() => boolean {
  if (filter) {
    return filter;
  } else {
    return (() => true);
  }
}

function getKeyFilterFn(keys:Array<string>):(string) => boolean {
  return key => (keys.indexOf(key) !== -1);
}

function getChildProps(props:ClickableProps) {
  const childProps = {};

  childProps.tabIndex = (typeof props.tabIndex === 'number') ? props.tabIndex : 0;
  childProps.role = (typeof props.ariaRole === 'string') ? props.ariaRole : 'button';

  const filterFn = getFilterFn(props.filter);
  childProps.onClick = (() => { if (filterFn()) { props.callback(); } });

  const allowedKeys = Array.isArray(props.keys) ? props.keys : ['Enter', ' '];
  const keyFilterFn = getKeyFilterFn(allowedKeys);
  childProps.onKeyUp = (({ key }) => { if (keyFilterFn(key) && filterFn()) { props.callback(); } });

  return childProps;
}

export default function Clickable(props:ClickableProps) {
  const child = React.Children.only(props.children);
  return React.cloneElement(child, getChildProps(props));
}
