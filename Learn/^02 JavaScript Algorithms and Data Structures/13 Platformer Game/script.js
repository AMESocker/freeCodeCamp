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
      // y: proportionalSize(400),
      y: proportionalSize(10),
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

    // ctx.drawImage(imageIcon,this.position.x, this.position.y,this.width, this.height);
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

class Platform {
  constructor(x, y) {
    this.position = { x, y };
    this.width = 200;
    this.height = proportionalSize(40)
  };
  draw() {
    ctx.fillStyle = '#acd157';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();

const platformPositions = [
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) },
  { x: 850, y: proportionalSize(350) },
  { x: 900, y: proportionalSize(350) },
  { x: 1050, y: proportionalSize(150) },
  { x: 2500, y: proportionalSize(450) },
  { x: 2900, y: proportionalSize(400) },
  { x: 3150, y: proportionalSize(350) },
  { x: 3900, y: proportionalSize(450) },
  { x: 4200, y: proportionalSize(400) },
  { x: 4400, y: proportionalSize(200) },
  { x: 4700, y: proportionalSize(150) },
];

const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);

const animate = () => {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  platforms.forEach((platform) => platform.draw())

  player.update();

  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
  }

  platforms.forEach((platform)=>{
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width/2,
      player.position.x <= platform.position.x + platform.width - player.width/3,
    ]
    if(collisionDetectionRules.every((rule) => rule)){
      player.velocity.y = 0
      return
    }
    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width/2,
      player.position.x <= platform.position.x + platform.width - player.width/3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height
    ]

    if(platformDetectionRules.every((rule) => rule)){
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity

    }
  })

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
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 6;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity
      break;
  }
}

const startGame = () => {
  canvas.style.display = 'block';
  startScreen.style.display = 'none';
  animate()
}

startBtn.addEventListener('click', startGame)
startGame()

window.addEventListener('keydown', ({ key }) => {
  movePlayer(key, 8, true)
});

window.addEventListener('keyup', ({ key }) => {
  movePlayer(key, 0, false)
})

//?Coding a game is a great way to grasp fundamental programming principles, while also creating an interactive gaming experience.

//?In this platformer game project, you'll continue to learn about classes, objects, inheritance, and encapsulation. You'll also learn how to design and organize game elements efficiently and gain insights into problem-solving and code reusability.

//?4 Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics.

//?4 The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element.

//?4 You will need to use the getContext method which will provide the context for where the graphics will be rendered.
//canvas.getContext("2d");

//? 41 The 'requestAnimationFrame()' web API, takes in a callback and is used to update the animation on the screen. The 'animate' function will be responsible for updating the player's position and continually drawing it on the canvas.