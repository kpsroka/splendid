export function TakeResources(gameRef, resources) {
  const params = new FormData();
  params.set('id', gameRef.gameId);
  params.set('playerToken', gameRef.playerToken);
  params.set('action', 'TakeResources');
  params.set('payload', resources);

  return fetch('/game/act', { method: 'POST', body: params });
}

export function TakeFactory(gameRef, factoryRow, factoryIndex) {
  const params = new FormData();
  params.set('id', gameRef.gameId);
  params.set('playerToken', gameRef.playerToken);
  params.set('action', 'TakeFactory');
  params.set('payload', `${factoryRow},${factoryIndex}`);

  return fetch('/game/act', { method: 'POST', body: params });
}
