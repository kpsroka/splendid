export function TakeResources(gameRef, resources) {
  return fetch(`/game/act?id=${gameRef.gameId}&action=TakeResources&playerToken=${gameRef.playerToken}&payload=${resources}`);
}
