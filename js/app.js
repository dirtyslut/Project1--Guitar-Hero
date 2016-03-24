var y = -50;
var ballRadius = 15;
var dx = 2;
var dy = -2;
var aPressed = false;
var score = 0;
var circleOn = true;
var aHeld = false;

$( document ).ready(function (){

  var $canvas = $('#myCanvas');
  var ctx = $canvas.get(0).getContext('2d');

  var canvasWidth = $canvas.width();
  var canvasHeight = $canvas.height();
  var x = canvasWidth / 2;


  $(document).on("keydown", function keyDownHandler(event){
    if ( event.keyCode == 65 && !aHeld ) {
      aPressed = true;
      // aHeld = true;
      setTimeout(function(){
        aHeld = true;
        aPressed = false;
      }, 50);
    }
  });

  $(document).on("keyup", function keyUpHandler(event){
    if(event.keyCode == 65){
      aPressed = false;
      aHeld = false;
    }
  });

  function drawSphere(){
    if(circleOn){
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
      ctx.fillStyle = "#FFE990";
      ctx.fill();
      ctx.closePath();
    }
  }


  function draw (){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawSphere();
    drawScore();
    collisionDetector();

    if (aPressed){
      drawAColor();
    } else if(!aPressed){
      drawA();
    } else {
      //
    }

    y -= dy;

    if (y > 320){
      y = 0;
    }

    // if( y > canvasHeight + 100){
    //   document.location.reload();
    // }
  }

  function collisionDetector(){
    if( y >= 240 && y <= 260 && aPressed && circleOn){
      score += 1;
      // circleOn = false;
      y = 0;
      // circleOn = true;
      console.log('we are in');
    }
  }

  function drawA(){
    ctx.beginPath();
    ctx.arc(240, 250, 15, 0, Math.PI*2, false);
    // ctx.flllstyle = "#0095DD";
    // ctx.fill();
    ctx.strokeStyle = "#D49C1E";
    ctx.stroke();
    ctx.closePath();
  }

  function drawAColor(){
      ctx.beginPath();
      ctx.arc(240, 250, 15, 0, Math.PI*2, false);
      ctx.fillStyle = "#D49C1E";
      ctx.fill();
      ctx.closePath();
  }

  function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#D49C1E";
    ctx.fillText("Score: " +score, 8, 20);
  }

  setInterval(draw, 10);

}); // DOM ready


