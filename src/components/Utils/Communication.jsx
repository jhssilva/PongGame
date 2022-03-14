import { useCallback, useEffect, useState } from "react";
import { Constants } from "./Constants";

const socket = new WebSocket(
  "ws://" + Constants.endpoint + "/" + Constants.endpointGameWebSocket
);

export const sendMessage = (messageObject) => {
  socket.send(JSON.stringify(messageObject));
};

export const Communication = (props) => {
  const { onChange } = props;

  useEffect(() => {
    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (e) => {
      console.log("Get message from server: " + e.data);
      onChange(e.data);
    };

    return () => {
      socket.close();
    };
  }, []);
  return null;
};

export const JoinGame = (handleJoinGame) => {
  useEffect(() => {
    // GET request using fetch with error handling
    fetch("http://" + Constants.endpoint + "/" + Constants.endpointJoinGame, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        const data = await response;

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          handleJoinGame(false);
          return Promise.reject(error);
        }

        if (response.status != 200) {
          handleJoinGame(false);
        } else {
          handleJoinGame(true);
        }

        //this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        handleJoinGame(false);
        console.error("There was an error!", error);
      });
  });
};
