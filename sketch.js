let heartX = 500;
let heartY = 500;
const heartSpeed = 3;

let rocks = []
let gameOver = false
let lasers = []
let lives = 3
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  if (!gameOver){
  moveRocks()
  drawHeart()
    }
  drawRocks()

  //to change amount of projectiles change this number ( the lower the more spawn)
    const spawnRate = 10
  if (frameCount % spawnRate === 0 && !gameOver){
    newRocks()
  }
  //died()
}
