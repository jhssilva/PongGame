import React, { useState } from "react";
import Canvas from "./Canvas";
import { setKeyEventListener } from "../Utils/Commands";
import { Communication } from "../Utils/Communication";

const Game = (props) => {
  const [dimensions, setDimensions] = useState({ width: 650, height: 480 });
  const [gameData, setGameData] = useState();

  const colors = {
    text: "#222831",
    players: "#00ADB5",
    body: "#EEEEEE",
    pageBackground: "#393E46",
  };

  var firstRequest = true;

  const setPositions = (requestDataObject) => {
    const data = JSON.parse(requestDataObject);
    setGameData(data);
    if (firstRequest) {
      const { board } = data;
      setDimensions({ width: board.size.width, height: board.size.height });
      firstRequest = false;
    }
    interaction();
  };

  const interaction = () => {};

  const draw = (ctx, frameCount, fps) => {
    if (gameData == null) {
      return;
    }

    const { gameStatus, board, ball, player1, player2 } = gameData;

    //Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Canvas Body
    ctx.fillStyle = colors.body;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Division Middle
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.stroke();

    // Player 1 Set
    ctx.fillStyle = colors.players;
    ctx.fillRect(
      player1.bar.pos.x,
      player1.bar.pos.y,
      player1.bar.size.width,
      player1.bar.size.height
    );

    // Player 2 Set
    ctx.fillRect(
      player2.bar.pos.x,
      player2.bar.pos.y,
      player2.bar.size.width,
      player2.bar.size.height
    );

    // Ball
    ctx.fillStyle = colors.players;
    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, ball.size.radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Paint
    ctx.fill();
  };

  setKeyEventListener();
  Communication(setPositions);

  return (
    <div className="game-container">
      <Canvas draw={draw} dimensions={dimensions} />
    </div>
  );
};

export default Game;
