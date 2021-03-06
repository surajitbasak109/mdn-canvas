var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 200;

var img = new Image();
var intervalId;

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

var srcArr = [
    'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Panorama_Schloss_Seggau.jpg/1024px-Panorama_Schloss_Seggau.jpg',
    'http://cityofistanbul.net/wp-content/uploads/2015/11/Blue-mosque-interior-panorama-1024x198.jpg',
    'http://vietnamcoracle.com/wp-content/uploads/2016/06/IMG_3455-copy-header-1024x198.jpg',
    'http://img03.deviantart.net/b2dd/i/2007/290/a/6/seattle_panorama_by_surrealeye.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Piazza_Bra_panorama_20100620_1775P.jpg/1024px-Piazza_Bra_panorama_20100620_1775P.jpg',
    'http://www.the92.net/news-blog/wp-content/uploads/2016/09/image3-1-1024x198.jpg'
];

img.src = srcArr[Math.floor(Math.random() * srcArr.length)];

for (var s = 0; s < srcArr.length; s++) {
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Image ' + (s + 1);
    btn.setAttribute('data-src', srcArr[s]);
    btn.addEventListener('click', function(e) {
        clearInterval(intervalId);
        img.src = e.target.getAttribute('data-src');
    }, false);
    document.body.appendChild(btn);
}

var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // lower is faster
var scale = 1.05;
var y = -4.5; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.addEventListener('load', function() {
    imgW = img.width * scale;
    imgH = img.height * scale;
    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
    } // image larger than canvas
    if (imgW > CanvasXSize) {
        clearX = imgW;
    } // image larger than the canvas
    else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        clearY = imgH;
    } // image larger than the canvas
    else {
        clearY = CanvasYSize;
    }
    // get canvas element
    ctx = canvas.getContext('2d');
    // set refresh rate
    intervalId = setInterval(draw, speed);
    return intervalId;

}, false);

function draw() {
    // clear canvas
    ctx.clearRect(0, 0, clearX, clearY);
    // If image is <= canvas size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = 0;
        }
        // draw additional image
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
        }
    }
    // if image is greater than canvas size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw additional image
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y, imgW, imgH);
    // amount to move
    x += dx;
}