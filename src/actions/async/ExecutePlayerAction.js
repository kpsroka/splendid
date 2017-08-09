export function TakeResources(gameRefId, playerIndex, resources) {
  return fetch(`/game/act?id=${gameRefId}&action=TakeResources&player=${playerIndex}&payload=${resources}`);
}
