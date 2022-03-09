import React from "react";
import "./App.css";
import Game from "./Game";
import { WebSocketDemo } from "./WebSocketDemo";

//Axios to communicate with the back-end

function App() {
  const connectToServer = () => {
    const endpoint = "wss:localhost:8080";
    const ws = new WebSocket(endpoint);
    const apiCall = {
      event: "play",
      data: { channel: "order_book_btcusd" },
    };

    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      console.log(`[message] Data received from server: ${json}`);
      try {
        if ((json.event = "data")) {
          console.log(json.data);
        }
      } catch (err) {
        // whatever you wish to do with the err
      }
    };
  };

  //connectToServer();

  return (
    <div className="App">
      {/* <Game /> */}
      <WebSocketDemo />
    </div>
  );
}

export default App;
