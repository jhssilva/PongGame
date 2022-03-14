import React from "react";
import Canvas from "./Canvas";
import { setKeyEventListener } from "../Utils/Commands";
import { Communication } from "../Utils/Communication";

const Game = (props) => {
  const dimensions = {
    width: 650,
    height: 480,
    bar: {
      x: 10,
      y: 70,
    },
    ball: {
      radius: 9,
    },
  };

  const colors = {
    text: "#222831",
    players: "#00ADB5",
    body: "#EEEEEE",
    pageBackground: "#393E46",
  };

  var positions = null;

  const setPositions = (requestDataObject) => {
    const gameData = JSON.parse(requestDataObject);
    positions = gameData;
  };

  const draw = (ctx, frameCount, fps) => {
    //Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Canvas Body
    ctx.fillStyle = colors.body;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Division Middle
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.stroke();

    // Draw Fps
    ctx.fillStyle = colors.text;
    ctx.font = "20px Arial";
    ctx.strokeText(fps, ctx.canvas.width / 2 + 10, ctx.canvas.height - 10);

    // Protection while positions isn't filled
    if (positions === null) {
      ctx.fill();
      return;
    }

    // Player 1 Set
    ctx.fillStyle = colors.players;
    ctx.fillRect(
      20 + positions.player1.x,
      ctx.canvas.height / 2 - dimensions.bar.y / 2 + positions.player1.y,
      dimensions.bar.x,
      dimensions.bar.y
    );

    // Player 2 Set
    ctx.fillRect(
      ctx.canvas.width - 20 - dimensions.bar.x / 2 + positions.player2.x,
      ctx.canvas.height / 2 - dimensions.bar.y / 2 + positions.player2.y,
      dimensions.bar.x,
      dimensions.bar.y
    );

    // Ball
    ctx.fillStyle = colors.players;
    ctx.beginPath();
    ctx.arc(
      frameCount * 1,
      frameCount * 1,
      dimensions.ball.radius,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    //ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);

    // Paint
    ctx.fill();
  };

  setKeyEventListener();

  return (
    <div className="game-container">
      <Canvas draw={draw} dimensions={dimensions} />
      {/* <Communication onChange={setPositions} /> */}
    </div>
  );
};

export default Game;
