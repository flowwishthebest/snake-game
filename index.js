// flowwishthebest

function create(type) {
  switch (type) {
    case 'Snake': {    
      return {
        tail: [{ x: 100, y: 100 }],
        direction: EDirection.NONE,
        __type: 'Snake',
      };
    }
    case 'Food': {    
      return {
        x: randomX(),
        y: randomY(),
        __type: 'Food',
      };
    }
  }
}

function drawRect(context, x, y, width, height, color, fill) {
  context.beginPath();

  context.rect(x, y, width, height);

  if (color) {
    if (!color.startsWith('#')) {
      throw new Error('Color must be hex');
    }
    context.fillStyle = color;
  }

  if (fill) {
    context.fill();
  } else {
    context.stroke();
  }
}

function clear(canvas, context) {
  const { width, height } = canvas;

  context.clearRect(0, 0, width, height);
}

function drawSnake(context, snake) {
  const { tail } = snake;

  tail.forEach((p) => {
    drawRect(context, p.x, p.y, 10, 10, '#85B486', false);
  });
}

function drawFood(context, food) {
  drawRect(context, food.x, food.y, 10, 10, '#000', true);
}

const EDirection = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
  DOWN: 4,
};

const EKeyCode = {
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
}

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const WIDTH = 600;
const HEIGHT = 600;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const snake = create('Snake');
let food = create('Food');

let dx = 0;
let dy = 0;

function updateView() {
  clear(canvas, context);
  drawSnake(context, snake);
  drawFood(context, food);
}

function checkFoodCollision(snake, food) {
  const { tail } = snake;

  const [head] = tail;

  if (head.x === food.x && head.y === food.y) {
    console.log('Detected food collision');
    return true;
  } else {
    return false;
  }
}

function checkSelfCollision(snake) {
  const { tail } = snake;

  const [head] = tail;

  for (let i = 1; i < tail.length; i++) {
    const segment = tail[i];

    if (head.x === segment.x && head.y === segment.y) {

      snake.direction = EDirection.NONE;
      dx = 0;
      dy = 0;

      return true;
    }
  }

  return false;
}



function moveSnake(snake) {
  const { tail, direction } = snake;

  const [head] = tail;

  const nextPosition = {
    x: head.x + dx,
    y: head.y + dy,
  };

  checkSelfCollision(snake);
  checkFoodCollision(snake, food);

  tail.unshift(nextPosition);
  tail.pop();
}

function randomX() {
  return Math.floor(Math.random() * WIDTH);
}

function randomY() {
  return Math.floor(Math.random() * HEIGHT);
}

document.addEventListener('keydown', (e) => {
  const { keyCode } = e;
  console.log('Pressed', e.code);
  if (keyCode === EKeyCode.ARROW_UP && snake.direction !== EDirection.DOWN) {
    snake.direction = EDirection.UP;
    dx = 0;
    dy = -10;
  } else if (keyCode === EKeyCode.ARROW_DOWN && snake.direction !== EDirection.UP) {
    snake.direction = EDirection.DOWN;
    dx = 0;
    dy = 10;
  } else if (keyCode === EKeyCode.ARROW_LEFT && snake.direction !== EDirection.RIGHT) {
    snake.direction = EDirection.LEFT;
    dx = -10;
    dy = 0;
  } else if (keyCode === EKeyCode.ARROW_RIGHT && snake.direction !== EDirection.LEFT) {
    snake.direction = EDirection.RIGHT;
    dx = 10;
    dy = 0;
  }
});

function main() {
  setInterval(function() {
    updateView();
    moveSnake(snake);
  }, 1000 / 15);
}

main();