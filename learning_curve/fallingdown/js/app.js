$( document ).ready(function(){



     var mainCanvas = document.getElementById("canvas");
        var ctx = mainCanvas.getContext('2d');


    // set starting values
    var fps = 60;
    var percent = 0;
    var direction = 1;

        // start the animation
    animate();

    function animate() {

        // set the animation position (0-100)
        percent += direction;
        if (percent < 0) {
            percent = 0;
            direction = 1;
        }

        draw(percent);
        // request another frame
        setTimeout(function () {
            requestAnimationFrame(animate);
        }, 10000 / fps);
    }


    // draw the current frame based on sliderValue
    function draw(sliderValue) {

        // redraw path
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 5; //clears the previous image

        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 500);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // draw the tracking rectangle
        var xy;
        if (sliderValue < 25) {
            var percent = sliderValue / 24;
            xy = getLineXYatPercent({
                x: 100,
                y: -50
            }, {
                x: 100,
                y: 375
            }, percent);
        }
        drawRect(xy, "blue");
    }


    // draw tracking rect at xy
    function drawRect(point, color) {
        ctx.fillStyle = "cyan";
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.rect(point.x - 13, point.y - 8, 25, 15);
        ctx.fill();
        ctx.stroke();
    }

    // line: percent is 0-1
    function getLineXYatPercent(startPt, endPt, percent) {
        var dx = endPt.x - startPt.x;
        var dy = endPt.y - startPt.y;
        var X = startPt.x + dx * percent;
        var Y = startPt.y + dy * percent;
        return ({
            x: X,
            y: Y
        });
    }

    // console.log(getLineXYatPercent({
    //             x: 100,
    //             y: -50
    //         }, {
    //             x: 100,
    //             y: 400
    //         }, 0.01));
    // console.log(percent);



});
