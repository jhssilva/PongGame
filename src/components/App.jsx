import React, { useState } from "react";
import "./App.css";
import Game from "./Game/Game";
import { JoinGame } from "./Utils/Communication";

function App() {
  const [isGame, setIsGame] = useState(false);
  const [errorConnecting, setErrorConnecting] = useState(false);

  const handleJoinGame = (isSuccessful) => {
    setIsGame(isSuccessful);
    setErrorConnecting(!isSuccessful);
  };

  const StateApp = (props) => {
    if (isGame) {
      return <Game />;
    } else {
      if (errorConnecting) {
        return <h1>Error while connecting to the server.</h1>;
      } else {
        JoinGame(handleJoinGame);
        return <h1>Joining the game....</h1>;
      }
    }
  };

  return (
    <div className="App">
      <StateApp />
    </div>
  );
}

export default App;
