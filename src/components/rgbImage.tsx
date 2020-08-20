import React, {
  useRef, useEffect,
} from 'react';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    const stepValue = 8;
    const numRows = 255;
    const numCols = 255;

    for (let i = 0; i < numRows; i += 1) {
      for (let j = 0; j < numCols; j += 1) {
        ctx.fillStyle = `rgb(${Math.floor(255 - (stepValue * i))},${Math.floor(255 - (stepValue * j))},0)`;
        ctx.fillRect(j * 8, i * 8, 8, 8);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const render = () => {
      draw(context);
    };
    render();
  });

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
