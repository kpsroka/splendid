import { ActionTypes } from './Actions.js';

export default function ChooseFactoryFromBoard(row, item) {
  return {
    type: ActionTypes.ChooseFactoryFromBoard,
    row: row,
    item: item
  };
}
