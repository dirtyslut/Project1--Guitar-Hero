var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
x = canvasWidth / 2;
y = 50;
dy = 2;
var circleHolder = [];


function drawCircle(number){
    for(var i = 0; i < number; i++){
      ctx.beginPath();
      ctx.arc(x, 50, 15, 0, Math.PI*2, false);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
      circleHolder.push({y: 50});
    }
}

drawCircle(3);


function bringDown(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for(var i = 0; i < circleHolder.length; i++){
    // circleHolder[i].y - 30
    console.log();
  }
  // drawCircle();
  // y += dy;

}

bringDown();

// setInterval(bringDown, 1000);

// setInterval(drawCircle, 10);

// function threeCircle(){
//   for(var i = 0; i < 3; i++){
//     drawCircle();
//     y += 50;
//   }
// }

// threeCircle();
