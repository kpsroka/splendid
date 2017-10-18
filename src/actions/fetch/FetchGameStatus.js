export default function FetchGameStatus(gameRefId) {
  return fetch(`/game/getStatus?id=${gameRefId}`);
}
