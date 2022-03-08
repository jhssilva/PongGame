import { createFactory } from "react";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  const dimensions = {
    width: 650,
    height: 480,
  };

  const colors = {
    text: "#000000",
    players: "#000000",
    body: "#393E46",
  };

  const draw = (ctx, frameCount, fps) => {
    //Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Rectangule
    ctx.fillStyle = colors.body;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw Fps
    ctx.fillStyle = colors.text;
    ctx.font = "20px Arial";
    ctx.fillText(fps, ctx.canvas.width / 2, ctx.canvas.height - 10);

    ctx.fillStyle = colors.players;
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="App">
      <Canvas draw={draw} dimensions={dimensions} />
    </div>
  );
}

export default App;
