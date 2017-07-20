export default function FetchGameConfig(gameRefId) {
  return fetch(`/game/getConfig?id=${gameRefId}`);
}
