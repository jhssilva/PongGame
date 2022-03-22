import { useRef, useEffect, useLayoutEffect } from "react";

const colors = {
  text: "#222831",
  players: "#00ADB5",
  body: "#EEEEEE",
  pageBackground: "#393E46",
};

const useCanvas = (gameData) => {
  const requestRef = useRef();
  const canvasRef = useRef(null);

  const draw = () => {
    if (gameData == null) {
      return;
    }
    const { gameStatus, board, ball, player1, player2 } = gameData;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Canvas Body
    ctx.fillStyle = colors.body;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Division Middle
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.stroke();

    // Score
    ctx.font = "30px Arial";
    ctx.strokeText(player1.score, ctx.canvas.width / 2 - 50, 50);
    ctx.strokeText(player2.score, ctx.canvas.width / 2 + 30, 50);

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
    ctx.fillRect(ball.pos.x, ball.pos.y, ball.size.width, ball.size.height);

    // Paint
    ctx.fill();
  };

  useLayoutEffect(() => {
    requestRef.current = requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(requestRef.current);
    };
  });

  return canvasRef;
};

export default useCanvas;
