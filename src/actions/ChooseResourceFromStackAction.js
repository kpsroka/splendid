import { ActionTypes } from './Actions.js';

export default function ChooseResourceFromStackAction(resourceType) {
  return {
    type: ActionTypes.ChooseResourceFromStack,
    resourceType: resourceType
  };
}
