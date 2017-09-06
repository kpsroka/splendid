export default function CreateGame(playerName, gameRefId) {
  return fetch(`/game/join?playerName=${playerName}&id=${gameRefId}`);
}
