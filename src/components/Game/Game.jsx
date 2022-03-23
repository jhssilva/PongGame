import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { setKeyEventListener } from "../Utils/Commands";
import { Communication } from "../Utils/Communication";
import Button from "react-bootstrap/Button";

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

  const GameStatus = () => {
    if (gameData === null) {
      return <h1>Waiting for another player to join the game.</h1>;
    } else if (!gameData.gameStatus) {
      return (
        <div>
          {gameData.hasPlayerWon ? (
            <h1>
              Player{" "}
              {gameData.player1.score > gameData.player2.score ? "1 " : "2 "}{" "}
              Won the game!
            </h1>
          ) : (
            ""
          )}{" "}
          <Button>Play Again!</Button>
        </div>
      );
    } else {
      return <Canvas gameData={gameData} dimensions={dimensions} />;
    }
  };

  setKeyEventListener();
  Communication(setPositions);

  return (
    <div className="game-container">
      <GameStatus />
    </div>
  );
};

export default Game;
