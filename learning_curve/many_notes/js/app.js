// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// var canvasWidth = canvas.width;
// var canvasHeight = canvas.height;
// x = canvasWidth / 2;
// y = 50;
// dy = 2;
// var circleHolder = [];


// function drawCircle(number){
//     for(var i = 0; i < number; i++){
//       ctx.beginPath();
//       ctx.arc(x, 50, 15, 0, Math.PI*2, false);
//       ctx.fillStyle = "green";
//       ctx.fill();
//       ctx.closePath();
//       circleHolder.push({y: 50});
//     }
// }

// drawCircle(3);


// function bringDown(){
//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//   for(var i = 0; i < circleHolder.length; i++){
//     // circleHolder[i].y - 30
//     console.log();
//   }
//   // drawCircle();
//   // y += dy;

// }


// bringDown();

// setInterval(bringDown, 1000);

// setInterval(drawCircle, 10);

// function threeCircle(){
//   for(var i = 0; i < 3; i++){
//     drawCircle();
//     y += 50;
//   }
// }

// threeCircle();


// $( document ).ready(function(){

$(function() {
    var points = [], numPoints = 5, i, canvas, context, width, height,  gravity = 0.1, emitter;

    canvas = $("#canvas")[0];
    width = canvas.width;
    height = canvas.height;
    context = canvas.getContext("2d");

    emitter = {x:width / 2, y:0};


    for(i = 0; i < numPoints; i += 1) {
        points.push({x:Math.random() * width,
                     y:Math.random() * height,
                     vx:Math.random() * 10 - 5,
                     vy:Math.random() * 10 - 5});
    }

    function initPoint(p) {
        p.x = emitter.x;
        p.y = emitter.y;
        p.vx = Math.random() * 4 - 2;
        p.vy = Math.random() * 40 - 3;
        p.radius = Math.random() * 5 + 1;
    }



      function update() {
          var i, point, len = points.length;
          for(i = 0; i < len; i += 1) {
              point = points[i];
              point.vy += gravity;
              point.x += point.vx;
              point.y += point.vy;
              if(point.x > width ||
                 point.x < 0 ||
                 point.y > height ||
                 point.y < 0) {
                  initPoint(point);
              }
          }
      }

    function draw() {
        var i, point, len = points.length;
        context.clearRect(0, 0, width, height);
        for(i = 0; i < len; i += 1) {
            point = points[i];
            context.beginPath();
            context.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
            context.fill();
        }
    }

    function addPoint() {
    var point;
    if(points.length < numPoints) {
        point = {};
        initPoint(point);
        points.push(point);
    }
}


    setInterval(function() {
        addPoint();
        update();
        draw();
    }, 1000/24);
});




// });
