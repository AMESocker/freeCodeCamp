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

const proportionalSize = (size) => {
  return innerHeight < 500
    ? Math.ceil((size / 500) * innerHeight)
    : size
}
class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }
  draw() {
    ctx.fillStyle = '#99c9ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    // ctx.drawImage('.//2204_w053_n004_24_medicharacters_p1_24.jpg',this.position.x, this.position.y);
    //<a href="https://www.freepik.com/free-vector/viking-cartoon-character-animation-2d-barbarian_29222691.htm#query=game%20character&position=10&from_view=keyword&track=ais&uuid=24cc6391-2d24-48d3-a416-dcbebd53de61">Image by upklyak</a> on Freepik

  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - 2 * this.width) {
      this.position.x = canvas.width - 2 * this.width
    }
  }
}

const player = new Player();

const animate = () => {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.update();
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
  }
}//? 41

const keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
}

const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity
      break;
    case "ArrowUp", " ", "Spacebar":
      player.velocity.y -= 8
      break;
    default:
      break;
  }
}

const startGame = () => {
  canvas.style.display = 'block';
  startScreen.style.display = 'none'
  player.draw()
}

startBtn.addEventListener('click', startGame)

//?Coding a game is a great way to grasp fundamental programming principles, while also creating an interactive gaming experience.

//?In this platformer game project, you'll continue to learn about classes, objects, inheritance, and encapsulation. You'll also learn how to design and organize game elements efficiently and gain insights into problem-solving and code reusability.

//?4 Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics.

//?4 The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element.

//?4 You will need to use the getContext method which will provide the context for where the graphics will be rendered.
//canvas.getContext("2d");

//? 41 The 'requestAnimationFrame()' web API, takes in a callback and is used to update the animation on the screen. The 'animate' function will be responsible for updating the player's position and continually drawing it on the canvas.