export default function JoinGame(playerName, gameRefId) {
  const params = new FormData();
  params.set('playerName', playerName);
  params.set('id', gameRefId);
  const init = {
    method: 'POST',
    body: params,
  };
  return fetch('/game/join', init);
}
