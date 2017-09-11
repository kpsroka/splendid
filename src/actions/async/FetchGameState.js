export default function FetchGameState(gameRef, lastRound=-1) {
  return fetch(`/game/getState?id=${gameRef.gameId}&playerToken=${gameRef.playerToken}&lastRound=${lastRound}`);
}
