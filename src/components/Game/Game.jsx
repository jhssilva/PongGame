import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { setKeyEventListener } from "../Utils/Commands";
import { Communication } from "../Utils/Communication";

const Game = (props) => {
  const [dimensions, setDimensions] = useState({ width: 650, height: 480 });
  const [gameData, setGameData] = useState(null);

  var firstRequest = true;

  const setPositions = (requestDataObject) => {
    const data = JSON.parse(requestDataObject);
    setGameData(data);
    if (firstRequest) {
      const { board } = data;
      setDimensions({ width: board.size.width, height: board.size.height });
      firstRequest = false;
    }
  };

  const GameDisplay = () => {
    if (gameData === null) {
      return (
        <div>
          <h1>Waiting for another player to join the game.</h1>
        </div>
      );
    } else {
      return (
        <div className="game-container">
          <Canvas gameData={gameData} dimensions={dimensions} />
        </div>
      );
    }
  };

  setKeyEventListener();
  Communication(setPositions);

  return <GameDisplay />;
};

export default Game;
