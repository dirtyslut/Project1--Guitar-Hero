$( document ).ready(function() {
  // $('body').on('click',function(){
  //   console.log("hi there");
  // });
  //   //get a reference to the canvas
  // // var ctx = $('#canvas')[0].getContext("2d");

  // var mainCanvas = document.getElementById("myCanvas");
  //   var mainContext = mainCanvas.getContext('2d');

  //   var circles = [];

  //   function Circle(radius, speed, width, xPos, yPos) {
  //     this.radius = radius;
  //     this.speed = speed;
  //     this.width = width;
  //     this.xPos = xPos;
  //     this.yPos = yPos;
  //     this.opacity = 0.05 + Math.random() * 0.5;

  //     this.counter = 0;

  //     var signHelper = Math.floor(Math.random() * 2);

  //     if (signHelper == 1) {
  //       this.sign = -1;
  //     } else {
  //       this.sign = 1;
  //     }
  //   }

  //   Circle.prototype.update = function() {

  //     this.counter += this.sign * this.speed;

  //     mainContext.beginPath();

  //     mainContext.beginPath();
  //     mainContext.moveTo(300, 0);
  //     mainContext.lineTo(300, 500);
  //     mainContext.strokeStyle = 'red';
  //     mainContext.stroke();

  //     // mainContext.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
  //     //   this.yPos + Math.sin(this.counter / 100) * this.radius,
  //     //   this.width,
  //     //   0,
  //     //   Math.PI * 2,
  //     //   false);

  //     mainContext.closePath();

  //     // mainContext.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')';
  //     // mainContext.fill();
  //   };

  //   function drawCircles() {
  //     for (var i = 0; i < 20; i++) {
  //       var randomX = Math.round(0);//changing x originally (-200 + Math.random() * 700)
  //       var randomY = Math.round(200 + Math.random()*300);//changin y originally (-200 + Math.random() * 700)
  //       var speed = 3; // changing speed here originally had (0.2 + Math.random() * 3)
  //       var size = 25; //changed size originally (5 + Math.random() * 100)

  //       var circle = new Circle(100, speed, size, randomX, randomY);
  //       circles.push(circle);
  //     }
  //     draw();
  //   }
  //   drawCircles();

  //   function draw() {
  //     mainContext.clearRect(0, 0, 500, 500);

  //     for (var i = 0; i < circles.length; i++) {
  //       var myCircle = circles[i];
  //       myCircle.update();
  //     }
  //     requestAnimationFrame(draw);
  //   }

//   var makeCircle = function(){
//     ctx.beginPath();
//     // ctx.rect(30, 30, 30, 30);
//     ctx.arc(75, 75, 15, 0, Math.PI*2, true);
//     ctx.closePath();
//     ctx.fill();
//   };
//   makeCircle();

//   var moveCircle = function(){
//     ctx.moveTo(75, 300);
//   };

//   moveCircle();
  //draw a circle

  // var c = document.getElementById("myCanvas");

  // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d');

  // var ball = {
  //   x: 100,
  //   y: 100,
  //   vx: 0,
  //   vy: 5,
  //   radius: 25,
  //   color: 'blue',
  //   draw: function() {
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  //     ctx.closePath();
  //     ctx.fillStyle = this.color;
  //     ctx.fill();
  //   }
  // };

  // function draw(){
  //   ctx.clearRect(0,0, canvas.width, canvas.height);
  //   ball.draw();
  //   ball.x += ball.vx;
  //   ball.y += ball.vy;
  //   raf = window.requestAnimationFrame(draw);
  // }


  // canvas.addEventListener('mouseover', function(e){
  //   raf = window.requestAnimationFrame(draw);
  // });

  // canvas.addEventListener("mouseout",function(e){
  //   window.cancelAnimationFrame(raf);
  // });

  // for (var i = 0; i < 1; i++){
  //   ball.draw();
    // window.requestAnimationFrame(draw);

  // }

  // window.setInterval(ball.draw(), 1000);


// });



// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100,75,50,0,2*Math.PI);
// ctx.stroke();

 // function setup() {
 //    createCanvas(640, 480);
 //  }

 //  function draw() {

 //    ellipse(100, -150, 80, 80);





// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// // set starting values
// var fps = 60;
// var percent = 0
// var direction = 1;

// // start the animation
// animate();

// function animate() {

//     // set the animation position (0-100)
//     percent += direction;
//     if (percent < 0) {
//         percent = 0;
//         direction = 1;
//     };
//     if (percent > 100) {
//         percent = 100;
//         direction = -1;
//     };

//     draw(percent);

//     // request another frame
//     setTimeout(function () {
//         requestAnimationFrame(animate);
//     }, 1000 / fps);
// }

 var mainCanvas = document.getElementById("myCanvas");
    var mainContext = mainCanvas.getContext('2d');

    var circles = [];

    function Circle(radius, speed, width, xPos, yPos) {
      this.radius = radius;
      this.speed = speed;
      this.width = width;
      this.xPos = xPos;
      this.yPos = yPos;
      this.opacity = 0.05 + Math.random() * 0.5;

      this.counter = 0;

      var signHelper = Math.floor(Math.random() * 2);

      if (signHelper == 1) {
        this.sign = -1;
      } else {
        this.sign = 1;
      }
    }

    Circle.prototype.update = function() {

      this.counter += this.sign * this.speed;

      mainContext.beginPath();

      mainContext.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
        this.yPos + Math.sin(this.counter / 100) * this.radius,
        this.width,
        0,
        Math.PI * 2,
        false);

      mainContext.closePath();

      mainContext.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')';
      mainContext.fill();
    };

    function drawCircles() {
      for (var i = 0; i < 100; i++) {
        var randomX = Math.round(-200 + Math.random() * 700);
        var randomY = Math.round(-200 + Math.random() * 700);
        var speed = 0.2 + Math.random() * 3;
        var size = 5 + Math.random() * 100;

        var circle = new Circle(100, speed, size, randomX, randomY);
        circles.push(circle);
      }
      draw();
    }
    drawCircles();

    function draw() {
      mainContext.clearRect(0, 0, 500, 500);

      for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
      }
      requestAnimationFrame(draw);
    }


// // draw the current frame based on sliderValue
// function draw(sliderValue) {

//     // redraw path
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.lineWidth = 5;

//     ctx.beginPath();
//     ctx.moveTo(100, 20);
//     ctx.lineTo(200, 160);
//     ctx.strokeStyle = 'red';
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(200, 160);
//     ctx.quadraticCurveTo(230, 200, 250, 120);
//     ctx.strokeStyle = 'green';
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(250, 120);
//     ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);
//     ctx.strokeStyle = 'blue';
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(400, 150);
//     ctx.lineTo(500, 90);
//     ctx.strokeStyle = 'gold';
//     ctx.stroke();

//     // draw the tracking rectangle
//     var xy;

//     if (sliderValue < 25) {
//         var percent = sliderValue / 24;
//         xy = getLineXYatPercent({
//             x: 100,
//             y: 20
//         }, {
//             x: 200,
//             y: 160
//         }, percent);
//     } else if (sliderValue < 50) {
//         var percent = (sliderValue - 25) / 24
//         xy = getQuadraticBezierXYatPercent({
//             x: 200,
//             y: 160
//         }, {
//             x: 230,
//             y: 200
//         }, {
//             x: 250,
//             y: 120
//         }, percent);
//     } else if (sliderValue < 75) {
//         var percent = (sliderValue - 50) / 24
//         xy = getCubicBezierXYatPercent({
//             x: 250,
//             y: 120
//         }, {
//             x: 290,
//             y: -40
//         }, {
//             x: 300,
//             y: 200
//         }, {
//             x: 400,
//             y: 150
//         }, percent);
//     } else {
//         var percent = (sliderValue - 75) / 25
//         xy = getLineXYatPercent({
//             x: 400,
//             y: 150
//         }, {
//             x: 500,
//             y: 90
//         }, percent);
//     }
//     drawRect(xy, "red");

// }


// // draw tracking rect at xy
// function drawRect(point, color) {
//     ctx.fillStyle = "cyan";
//     ctx.strokeStyle = "gray";
//     ctx.lineWidth = 3;
//     ctx.beginPath();
//     ctx.rect(point.x - 13, point.y - 8, 25, 15);
//     ctx.fill();
//     ctx.stroke();
// }

// // draw tracking dot at xy
// function drawDot(point, color) {
//     ctx.fillStyle = color;
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 3;
//     ctx.beginPath();
//     ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }

// // line: percent is 0-1
// function getLineXYatPercent(startPt, endPt, percent) {
//     var dx = endPt.x - startPt.x;
//     var dy = endPt.y - startPt.y;
//     var X = startPt.x + dx * percent;
//     var Y = startPt.y + dy * percent;
//     return ({
//         x: X,
//         y: Y
//     });
// }



// // cubic helper formula at percent distance
// function CubicN(pct, a, b, c, d) {
//     var t2 = pct * pct;
//     var t3 = t2 * pct;
//     return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
// }

  });












