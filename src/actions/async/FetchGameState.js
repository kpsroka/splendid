export default function FetchGameState(gameRefId) {
  return fetch(`/getState?id=${gameRefId}`);
}
