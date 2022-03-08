import { createFactory } from "react";
import "./App.css";
import Canvas from "./Canvas";

//Axios to communicate with the back-end

function App() {
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

    // Player 1 Set
    ctx.fillStyle = colors.players;
    ctx.fillRect(
      20,
      ctx.canvas.height / 2 - dimensions.bar.y / 2,
      dimensions.bar.x,
      dimensions.bar.y
    );

    // Player 2 Set
    ctx.fillRect(
      ctx.canvas.width - 20 - dimensions.bar.x / 2,
      ctx.canvas.height / 2 - dimensions.bar.y / 2,
      dimensions.bar.x,
      dimensions.bar.y
    );

    // Ball
    ctx.fillStyle = colors.players;
    ctx.beginPath();
    ctx.arc(
      frameCount * 2,
      frameCount * 2,
      dimensions.ball.radius,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    //ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);

    // Paint
    ctx.fill();
  };

  return (
    <div className="App">
      <Canvas draw={draw} dimensions={dimensions} />
    </div>
  );
}

export default App;
