$( document ).ready(function() {
  $('.container').on('click',function(){
    console.log("hi there");
  });


  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 0,
    radius: 25,
    color: 'blue',
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    raf = window.requestAnimationFrame(draw);
  }


  canvas.addEventListener('mouseover', function(e){
    raf = window.requestAnimationFrame(draw);
  });

  canvas.addEventListener("mouseout",function(e){
    window.cancelAnimationFrame(raf);
  });



  window.setInterval(ball.draw(), 1000);

});
