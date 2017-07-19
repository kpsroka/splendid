import CreateGame from './async/CreateGame.js';

const PrivateActions = {
  SetUiMessage: (text, severity='INFO') => ({
    type: '_SET_UI_MESSAGE',
    text: text,
    severity: severity
  })
};

const Actions = {
  ChooseResourceFromStack: (resourceType) => ({
    type: 'CHOOSE_STACK_RESOURCE',
    resourceType: resourceType
  }),
  ChooseMineFromBoard: (row, index) => ({
    type: 'CHOOSE_MINE',
    row: row,
    index: index
  }),
  GrabSelectedResources: () => ({
    type: 'GRAB_RESOURCES',
  }),
  NewGame: (playerName, playerCount) => (
      (dispatch) => {
        dispatch(PrivateActions.SetUiMessage('Starting new game'));

        CreateGame(playerName, playerCount)
        .then(
            response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error(`Failed to create new game`);
              }
            },
            () => { throw new Error(`Network failure`); })
        .then(
            (json) => {
              console.log(json);
              dispatch(PrivateActions.SetUiMessage('Created new game'));
            })
        .catch(
            error => {
              dispatch(PrivateActions.SetUiMessage(error.message, 'ERROR'));
            }
        );
      }
  )
};

export default Actions;
