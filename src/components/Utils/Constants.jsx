export const Constants = {
  endpoint: "localhost:8080",
  endpointGameWebSocket: "ws",
};

export const requestGameData = (keyPressed) => {
  return { key: keyPressed };
};
