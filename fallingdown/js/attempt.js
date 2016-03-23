$( document ).ready(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var circles = [];




  var fps = 60;
  var percent = 0;
  var direction = 1;

  animate();

  function animate (){

    percent += direction;
    if (percent < 0) {
            percent = 0;
            direction = 1;
        }

    draw(percent);

    setTimeout(function () {
      requestAnimationFrame(animate);
    }, 10000/fps);

  }

  function draw (sliderValue){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(100, 350, 20, 0, 2*Math.PI);
    // ctx.fill();
    ctx.stroke();

    ctx.font = "30px Arial";
    ctx.fillText("A",90,360);

    // var percent = sliderValue;
    var xy;

      var percent = sliderValue / 30;
      xy = getLineXYatPercent({
        x: 100,
        y: 0
      },
      {
        x: 100,
        y: 400
      },
        percent);


    drawCirc(xy, 'blue');
  }

  function drawCirc (point, color){
    ctx.fillstyle = "cyan";
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x,point.y,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  function getLineXYatPercent(startpt, endpt, percent){
    dx = endpt.x - startpt.x;
    dy = endpt.y - startpt.y;
    var X = startpt.x + dx * percent;
    var Y = startpt.y + dy * percent;
    return ({
      x: X,
      y: Y
    });

  }

  // function determineHit(){
  //   if(position of ball )
  // }

  // $('body').keydown(function(event) {
    /* Act on the event */
    // if(event.keyCode === 65)
    // console.log('A button has been pressed');
    // console.log(keyCode);
  // });



});
