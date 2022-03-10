import { useCallback, useEffect, useState } from "react";
import { Constants } from "./Constants";

const socket = new WebSocket(
  "ws://" + Constants.endpoint + "/" + Constants.endpointGameWebSocket
);

export const sendMessage = (messageObject) => {
  socket.send(JSON.stringify(messageObject));
};

export const Communication = () => {
  useEffect(() => {
    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (e) => {
      console.log("Get message from server: " + e.data);
      console.log(JSON.parse(e.data));
    };

    return () => {
      socket.close();
    };
  }, []);
};
