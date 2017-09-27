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

import type { Resource, ResourceMap } from './State.js';

export function ReduceResources(resources:Array<Resource>):ResourceMap {
  if (Array.isArray(resources)) {
    return resources.slice().sort().reduce(reduceResourcesFn, {});
  } else {
    return {};
  }
}

/**
 * @return {boolean}
 */
export function ContainsResources(
    container:Array<Resource>,
    content:Array<Resource>)
    :boolean {
  let sortedContainer = container.slice().sort();
  let sortedContent = content.slice().sort();

  return !sortedContainer.map(
      resource => {
        if (sortedContent.length === 0) {
          return true;
        } else if (sortedContent[0] < resource) {
          return false;
        } else {
          if (sortedContent[0] === resource) {
            sortedContent.shift();
          }
          return true;
        }
      }).includes(false) && sortedContent.length === 0;
}

function reduceResourcesFn(reduced:ResourceMap, resource:Resource):ResourceMap {
  reduced[resource] = reduced.hasOwnProperty(resource) ? (reduced[resource] + 1) : 1;
  return reduced;
}
