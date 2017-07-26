export default function FetchGameState(gameRefId) {
  return fetch(`/game/getState?id=${gameRefId}`);
}
