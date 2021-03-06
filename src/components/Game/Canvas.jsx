import React from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { gameData, dimensions, ...rest } = props;
  const canvasRef = useCanvas(gameData);

  // Prevent scrolling
  document.body.style.overflow = "hidden";

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        {...rest}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default Canvas;
