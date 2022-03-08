import React from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { draw, dimensions, ...rest } = props;
  const canvasRef = useCanvas(draw);

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
