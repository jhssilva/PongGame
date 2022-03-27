export const Constants = {
  endpoint: "foo-bar-dot-testpong.oa.r.appspot.com", //"localhost:8080", //"serverponggame.uc.r.appspot.com",
  endpointGameWebSocket: "ws",
  endpointJoinGame: "join",
};

export const requestGameData = (keyPressed) => {
  return { key: keyPressed };
};
