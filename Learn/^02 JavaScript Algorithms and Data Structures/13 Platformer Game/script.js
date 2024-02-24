const startBtn = document.getElementById('start-btn');
const canvas = document.getElementById('canvas');
const startScreen = document.querySelector('.start-screen');
const checkpointScreen = document.querySelector('.checkpoint-screen');
const checkpointMessage = document.querySelector('.checkpoint-screen > p');

const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5
let isCheckpointCollisionDetectionActive = true

class Player {
  constructor() {
    this.position = {
      x:10,
      y:400
    };
    this.velocity = {
      x:0,
      y:0
    };
    this.width = 40;
    this.height = 40;
  }

  draw(){
    ctx.fillStyle = '#99c9ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
//?Coding a game is a great way to grasp fundamental programming principles, while also creating an interactive gaming experience.

//?In this platformer game project, you'll continue to learn about classes, objects, inheritance, and encapsulation. You'll also learn how to design and organize game elements efficiently and gain insights into problem-solving and code reusability.

//?4 Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics.

//?4 The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element.

//?4 You will need to use the getContext method which will provide the context for where the graphics will be rendered.

//canvas.getContext("2d");