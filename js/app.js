var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var x = canvas.width / 2;
var y = 50;
var ballRadius = 15;
var dx = 2;
var dy = -2;
var aPressed = false;
var score = 0;
var circleOn = true;
var aHeld = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event){
  if(event.keyCode == 65 && !aHeld){
    aPressed = true;
    // aHeld = true;
    setTimeout(function(){
      aHeld = true;
      aPressed = false;}, 50
    );
  // setTimeout(function(){
  //   aPressed = false;}, 50);
  // }
  }

}

function keyUpHandler(event){
  if(event.keyCode == 65){
    aPressed = false;
    aHeld = false;
  }
}



function collisionDetector(){
  if( y >= 290 && y <= 310 && aPressed && circleOn){
    score += 1;
    circleOn = false;
    console.log('we are in');
  }
}

function drawSphere(){
  if(circleOn){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "#FFE990";
    ctx.fill();
    ctx.closePath();
  }
}

function drawA(){
  ctx.beginPath();
  ctx.arc(240, 300, 15, 0, Math.PI*2, false);
  // ctx.flllstyle = "#0095DD";
  // ctx.fill();
  ctx.strokeStyle = "#D49C1E";
  ctx.stroke();
  ctx.closePath();
}

function drawAColor(){
    ctx.beginPath();
    ctx.arc(240, 300, 15, 0, Math.PI*2, false);
    ctx.fillStyle = "#D49C1E";
    ctx.fill();
    ctx.closePath();
}

function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#D49C1E";
  ctx.fillText("Score: " +score, 8, 20);
}

function draw (){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawSphere();
  drawScore();
  collisionDetector();

  if(aPressed){
    drawAColor();
  } else if(!aPressed){
    drawA();
  }

  y -= dy;
}

setInterval(draw, 10);
