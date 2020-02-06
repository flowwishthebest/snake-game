// // @flow

// import { EDirection } from './directions';
// import { EKeyCode } from './key-codes';

// // Board

// class Game {
//   // config
//   // elements
//   // Board.add() Layer
//   __board;

//   constructor() {
//     this.__board = new Board();
//   }

//   // Cells[][]
// }

// class Render {
//   constructor() {
    
//   }

//   render() {
//     // for cell .draw();
//   }
// }

// class Board {
  
// }

// const ECellType = {
//   SNAKE_SE: '',
// };

// class Cell {
//   constructor(type) {

//   }
// }

// class Snake {

// }

// class Wall {

// }

// class Maze {
//   constructor() {
//     const maze = [new Wall()];
//   }
// }

// class Render {
//   constructor() {
//     const cell = new Cell();

//     if (cell.type === 'SnakePart') {
      
//     }
//   }
// }

// class Game {
//   constructor() {}
// }

// function create(type) {
//   switch (type) {
//     case 'Snake': {    
//       const snake = {
//         tail: [{ x: 100, y: 100 }],
//         direction: EDirection.NONE,
//         __type: 'Snake',
//         getHead: () => {
//           console.log(snake);
//           return snake.tail[0];
//         },
//       };

//       return snake;
//     }
//     case 'Food': {
//       const food = {
//         x: randomX(),
//         y: randomY(),
//         __size: 10,
//         __type: 'Food',
//         getSize: () => {
//           return food.__size;
//         }
//       };

//       return food;
//     }
//   }
// }

// function drawRect(context, x, y, width, height, color, fill) {
//   context.beginPath();

//   context.rect(x, y, width, height);

//   if (color) {
//     if (!color.startsWith('#')) {
//       throw new Error('Color must be hex');
//     }
//     context.fillStyle = color;
//   }

//   if (fill) {
//     context.fill();
//   } else {
//     context.stroke();
//   }
// }

// function clear(canvas, context) {
//   const { width, height } = canvas;

//   context.clearRect(0, 0, width, height);
// }

// function drawSnake(context, snake) {
//   const { tail } = snake;

//   tail.forEach((p) => {
//     drawRect(context, p.x, p.y, 10, 10, '#85B486', false);
//   });
// }

// function drawFood(context, food) {
//   drawRect(context, food.x, food.y, 10, 10, '#000', true);
// }


// const canvas = document.getElementById('game');
// const context = canvas.getContext('2d');

// const WIDTH = 600;
// const HEIGHT = 600;

// canvas.width = WIDTH;
// canvas.height = HEIGHT;

// const snake = create('Snake');
// let food = create('Food');

// let dx = 0;
// let dy = 0;

// function updateView() {
//   clear(canvas, context);
//   drawSnake(context, snake);
//   drawFood(context, food);
// }

// function checkFoodCollision() {
//   const head = snake.getHead();
  
//   return Math.abs(head.x - food.x) < food.getSize()
//     && Math.abs(head.y - food.y) < food.getSize();
// }

// function checkWallCollision(nextPoint) {
//   let x = nextPoint.x;
//   let y = nextPoint.y;

//   if (nextPoint.x === 0) {
//     // hit left wall, so move right
//     x = WIDTH;
//   } else if (nextPoint === WIDTH) {
//     // hit right wall, so move left
//     x = 0;
//   } else if (nextPoint.y === 0) {
//     // hit top wall, so move down
//     y = HEIGHT;
//   } else if (nextPoint.y === HEIGHT) {
//     y = 0;
//   }

//   return { x, y };
// }

// function checkSelfCollision() {
//   const { tail } = snake;

//   const [head] = tail;

//   for (let i = 1; i < tail.length; i++) {
//     const segment = tail[i];

//     if (head.x === segment.x && head.y === segment.y) {}
//   }

//   return false;
// }

// function getNextPoint() {
//   const head = snake.getHead();

//   return {
//     x: head.x + dx,
//     y: head.y + dy,
//   };
// }



// function moveSnake(snake) {
//   let nextPosition = getNextPoint();

//   if (checkSelfCollision()) {
//       snake.direction = EDirection.NONE;
//       dx = 0;
//       dy = 0;
//       return;
//   }

//   const p = checkWallCollision(nextPosition);
//   if (p) {
//     nextPosition = p;
//   }

//   if (checkFoodCollision()) {
//     snake.tail.unshift(nextPosition);
//     food = create('Food');
//   } else {
//     snake.tail.unshift(nextPosition);
//     snake.tail.pop();
//   }
// }

// function randomX() {
//   return Math.floor(Math.random() * WIDTH);
// }

// function randomY() {
//   return Math.floor(Math.random() * HEIGHT);
// }

// document.addEventListener('keydown', (e) => {
//   const { keyCode } = e;
//   console.log('Pressed', e.code);
//   if (keyCode === EKeyCode.ARROW_UP && snake.direction !== EDirection.DOWN) {
//     snake.direction = EDirection.UP;
//     dx = 0;
//     dy = -10;
//   } else if (keyCode === EKeyCode.ARROW_DOWN && snake.direction !== EDirection.UP) {
//     snake.direction = EDirection.DOWN;
//     dx = 0;
//     dy = 10;
//   } else if (keyCode === EKeyCode.ARROW_LEFT && snake.direction !== EDirection.RIGHT) {
//     snake.direction = EDirection.LEFT;
//     dx = -10;
//     dy = 0;
//   } else if (keyCode === EKeyCode.ARROW_RIGHT && snake.direction !== EDirection.LEFT) {
//     snake.direction = EDirection.RIGHT;
//     dx = 10;
//     dy = 0;
//   }
// });

// function main() {
//   setInterval(function() {
//     updateView();
//     moveSnake(snake);
//   }, 1000 / 15);
// }

// main();