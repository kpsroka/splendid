import { ActionTypes } from './Actions.js';

export default function ChooseFactoryFromBoard(row, index) {
  return {
    type: ActionTypes.ChooseFactoryFromBoard,
    row: row,
    index: index
  };
}
