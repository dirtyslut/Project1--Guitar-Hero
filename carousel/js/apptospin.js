// $( document ).ready(function() {
//   $('body').on('click',function(){
//     console.log("hi there");
//   });


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


 function setup() {
    createCanvas(640, 480);
  }

  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
