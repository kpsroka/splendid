
export function ReduceResources(resources) {
  if (Array.isArray(resources)) {
    selection.slice().sort().reduce(reduceResourcesFn, {});
  } else {
    return {};
  }
}

export function ContainsResources(container, content) {
  let sortedContainer = container.slice().sort();
  let sortedContent = content.slice().sort();

  return !sortedContainer.map(
      resource => {
        if (sortedContent.length === 0 || sortedContent[0] < resource) {
          return false;
        } else if (sortedContent[0] === resource) {
          sortedContent.shift();
        }
        return true;
      }).includes(false);
}

function reduceResourcesFn(reduced, resource) {
  reduced[resource] = reduced.hasOwnProperty(resource) ? (reduced[resource] + 1) : 1;
  return reduced;
}
