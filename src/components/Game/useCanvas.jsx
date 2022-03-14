import { useRef, useEffect } from "react";

const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    // FPS Count
    var times = [];
    var fps;

    const render = () => {
      frameCount++;
      draw(context, frameCount, fps);
      animationFrameId = window.requestAnimationFrame(() => {
        //FPS Count
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
          times.shift();
        }
        times.push(now);
        fps = times.length;
        //fps count
        render();
      });
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
