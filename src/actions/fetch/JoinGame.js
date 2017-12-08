export default function JoinGame(playerName, gameRefId) {
  return fetch(`/game/join?playerName=${playerName}&id=${gameRefId}`);
}
