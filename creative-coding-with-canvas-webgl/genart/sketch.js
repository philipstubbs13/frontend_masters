const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false)
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 40;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
