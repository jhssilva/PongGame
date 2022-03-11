export const Constants = {
  endpoint: "localhost:8080",
  endpointGameWebSocket: "ws",
  endpointJoinGame: "join",
};

export const requestGameData = (keyPressed) => {
  return { key: keyPressed };
};
