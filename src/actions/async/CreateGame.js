export default function CreateGame(playerName, playerCount) {
  return fetch(`/new?playerName=${playerName}&playerCount=${playerCount}`);
}
