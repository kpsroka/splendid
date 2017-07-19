import CreateGame from './async/CreateGame.js';

const Actions = {
  ChooseResourceFromStack: (resourceType) => ({
    type: "CHOOSE_STACK_RESOURCE",
    resourceType: resourceType
  }),
  ChooseMineFromBoard: (row, index) => ({
    type: "CHOOSE_MINE",
    row: row,
    index: index
  }),
  GrabSelectedResources: () => ({
    type: "GRAB_RESOURCES",
  }),
  NewGame: (playerName, playerCount) => (
      () => {
        CreateGame(playerName, playerCount)
        .then(
            response => response.json(),
            error => console.log("Received error: " + error))
        .then(
            (json) => console.log(json));
      }
  )
};

export default Actions;
