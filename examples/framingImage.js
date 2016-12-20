function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var source = new Image();
    var frame = new Image();

    source.addEventListener('load', function() {
    	// draw slice
        ctx.drawImage(source, 33, 71, 104, 124, 21, 20, 87, 104);
    }, false);
    frame.addEventListener('load', function() {
    	// draw frame
        ctx.drawImage(frame, 0, 0);
    }, false);

    source.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    frame.src = 'https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png';
}

window.addEventListener('load', function () {
    draw();
}, false);