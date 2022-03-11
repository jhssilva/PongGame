import React, { useState } from "react";
import "./App.css";
import Game from "./Game";
import { JoinGame } from "./Utils/Communication";

function App() {
  const [isGame, setIsGame] = useState(false);

  const StateApp = (props) => {
    if (isGame) {
      console.log("Game On");
      return <Game />;
    } else {
      console.log();
      JoinGame();
      return (
        <div>
          <h1>Try to join the game</h1>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <StateApp />
    </div>
  );
}

export default App;
