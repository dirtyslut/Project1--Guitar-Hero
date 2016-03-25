var x = 240;
var y = 20;
var ballRadius = 15;
var dx = 2;
var dy = -10;
var aPressed = false;
var score = 0;
var aHeld = false;
var countdown = 30;
var game;
var timeTracker;
var retry = false;
var winner = false;


var Sphere = function(x, y, radius, fillStyle, strokeStyle){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fillStyle = fillStyle;
  this.strokeStyle = strokeStyle;
};


var droppingSphere = new Sphere(x, y, ballRadius, '#FFE990', false);
var outlineSphere = new Sphere(x, 280, ballRadius, false, '#D49C1E');
var pressedSphere = new Sphere(x, 280, ballRadius, '#D49C1E', false);


$( document ).ready(function(){

  var $canvas = $('#myCanvas');
  var ctx = $canvas.get(0).getContext('2d');

  var canvasWidth = $canvas.width();
  var canvasHeight = $canvas.height();
  var x = canvasWidth / 2;


  $(document).on('keydown', function (event){
    if ( event.keyCode == 65 && !aHeld ) {
      aPressed = true;
      setTimeout(function(){
        aHeld = true;
        aPressed = false;
      }, 50);
    }
  });

  $(document).on('keyup', function (event){
    if(event.keyCode == 65){
      aPressed = false;
      aHeld = false;
    }
  });

  Sphere.prototype.drawFillCircle = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.closePath();
  };

  Sphere.prototype.drawStrokedCircle = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();
    ctx.closePath();
  };

  function draw (){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawScore();
    collisionDetector();
    droppingSphere.drawFillCircle();
    drawTimer();
    droppingSphere.y += 2.0842;
    outlineSphere.drawStrokedCircle();

    if(aPressed){
      pressedSphere.drawFillCircle();
    }

    if(droppingSphere.y > 320){
      droppingSphere.y = 0;
    }
  }

  function collisionDetector(){
    if( droppingSphere.y >= 270 && droppingSphere.y <= 290 && aPressed){
      score += 1;
      droppingSphere.y = 0;
    }
  }

  function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Score: ' +score, 8, 20);
  }

  function drawTimer(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Timer: ' + countdown, 400, 20);
  }

  game = setInterval(draw, 10);

  timeTracker = function(){
      countdown--;
      if (countdown <= 0 && score < 20){
        clearInterval(game);
        clearInterval(seconds);
        retry = window.confirm('Your score is ' +score + '               Do you want to play again');
      } else if(countdown <= 0 && score >= 20){
        clearInterval(game);
        clearInterval(seconds);
        winner = window.confirm('Congrats your score is ' +score + '      Do you want to play again');
      }
    };

    var seconds = setInterval(timeTracker, 1000);

    if(retry === true){
      console.log('why not');
      document.location.reload();
    }



}); // DOM ready




