export default function FetchGameConfig(gameRef) {
  return fetch(`/game/getConfig?id=${gameRef.gameId}&playerToken=${gameRef.playerToken}`);
}
