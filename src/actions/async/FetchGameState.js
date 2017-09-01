export default function FetchGameState(gameRef) {
  return fetch(`/game/getState?id=${gameRef.gameId}&playerToken=${gameRef.playerToken}`);
}
