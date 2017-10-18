export function TakeResources(gameRef, resources) {
  return fetch(`/game/act?id=${gameRef.gameId}&action=TakeResources&playerToken=${gameRef.playerToken}&payload=${resources}`);
}

export function TakeFactory(gameRef, factoryRow, factoryIndex) {
  return fetch(`/game/act?id=${gameRef.gameId}&action=TakeFactory&playerToken=${gameRef.playerToken}&payload=${factoryRow},${factoryIndex}`);
}
