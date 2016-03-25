// creating global variables to be accessed by any function
var x = 240;
var y = 20;
var ballRadius = 15;
var score = 0;
var countdown = 30;

var aHeld = false;
var aPressed = false;

// whille assign these as functions later
var game;
var timeTracker;

// constructor function to help create the desired circles
var Sphere = function(x, y, radius, fillStyle, strokeStyle){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fillStyle = fillStyle;
  this.strokeStyle = strokeStyle;
};

// creating 3 circles to be used throughout the game
var droppingSphere = new Sphere(x, y, ballRadius, '#FFE990', false);
var outlineSphere = new Sphere(x, 280, ballRadius, false, '#D49C1E');
var pressedSphere = new Sphere(x, 280, ballRadius, '#D49C1E', false);

// Waiting for DOM to be ready
$( document ).ready(function(){
// accessing my canvas
// game is animated via canvas frame by frame
  var $canvas = $('#myCanvas');
  var ctx = $canvas.get(0).getContext('2d');
  var $button = $('button');


  var canvasWidth = $canvas.width();
  var canvasHeight = $canvas.height();
  var x = canvasWidth / 2;

// following two functions keep track if buttons are pressed
// when a is pressed var aPressed is set to true
// timeout set after 50ms so player can not hold the button to score
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
//adding drawFillCircle function to my constructor
// this is to create solid circles
  Sphere.prototype.drawFillCircle = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.closePath();
  };
//adding drawStrokedCircle function to my constructor
// this is to create outlined circles

  Sphere.prototype.drawStrokedCircle = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();
    ctx.closePath();
  };
// creating my draw function... powerhouse function handles all other function
// it is draw that gets called in 10ms intervals
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
// defining collisionDetector if the A button is pressed and the cirlces
// overlap we increment 1 to the score and have the ball drop from the top
  function collisionDetector(){
    if( droppingSphere.y >= 270 && droppingSphere.y <= 290 && aPressed){
      score += 1;
      droppingSphere.y = 0;
    }
  }

// function to display the scoreboard
  function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Score: ' +score, 8, 20);
  }

// function to display countdown

  function drawTimer(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Timer: ' + countdown, 400, 20);
  }

// function endScreen and congratScreen are 2 possible frames to show player in
// the event of a win or not
  function endScreen (){
    ctx.clearRect(0,0, canvasWidth, canvasHeight);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Your score is ' + score, 190, 160);
  }

  function congratScreen(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#D49C1E';
    ctx.fillText('Congrats your a winner with a score of ' + score, 92, 160);
  }
  // calling draw every 10ms and setting its id to game
  game = setInterval(draw, 10);

  // defining timeTracker to decrease countdown value and when countdown == 0
  // you clearInterval for game which was assigned to the interval that calls our draw
  // in the event
  // countdown === 0 and score < 20 player see endScreen
  // countdown === 0 and score > 20 player see congratScreen

  timeTracker = function(){
      countdown--;
      if (countdown < 0 && score < 20){
        clearInterval(game);
        clearInterval(seconds);
        endScreen();
      } else if(countdown < 0 && score >= 20){
        clearInterval(game);
        clearInterval(seconds);
        congratScreen();
      }
    };
// calling timeTracker every second so each 1000ms countdown decreases by one
    var seconds = setInterval(timeTracker, 1000);

// button reloads every content on the document allowing player to try again
    $('button').on('click', function(){
      document.location.reload();
    });


}); // DOM ready


