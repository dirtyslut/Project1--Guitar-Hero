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


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event){
  if(event.keyCode == 65){
    aPressed = true;
  }
}

function keyUpHandler(event){
  if(event.keyCode == 65){
    aPressed = false;
  }
}

function drawSphere(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
  ctx.flllstyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawA(){
  ctx.beginPath();
  ctx.arc(240, 300, 15, 0, Math.PI*2, false);
  // ctx.flllstyle = "#0095DD";
  // ctx.fill();
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();
}

function drawAColor(){
  ctx.beginPath();
  ctx.arc(240, 300, 15, 0, Math.PI*2, false);
  ctx.flllstyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

function draw (){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawSphere();


  if(aPressed){
    drawAColor();
  } else if(!aPressed){
    drawA();
  }

  y -= dy;
}

setInterval(draw, 10);
