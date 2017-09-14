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
