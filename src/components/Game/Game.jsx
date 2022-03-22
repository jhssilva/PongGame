import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { setKeyEventListener } from "../Utils/Commands";
import { Communication } from "../Utils/Communication";

const Game = (props) => {
  const [dimensions, setDimensions] = useState({ width: 650, height: 480 });
  const [gameData, setGameData] = useState();

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

  setKeyEventListener();
  Communication(setPositions);

  return (
    <div className="game-container">
      <Canvas gameData={gameData} dimensions={dimensions} />
    </div>
  );
};

export default Game;
