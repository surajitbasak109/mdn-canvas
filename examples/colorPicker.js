var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
// img.src = 'img/ivacCaptcha.png';
img.src = 'img/rhino.jpg';

img.addEventListener('load', function () {
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0);
	img.style.display = 'none';
});

var color = document.createElement('div');
color.className = 'colorPicker';
canvas.parentNode.insertBefore(color, canvas.nextSibling);

function pick (event) {
	var x = event.layerX;
	var y = event.layerY;
	var pixel = ctx.getImageData(x, y, 1, 1);
	var data = pixel.data;
	var rgba = 'rgba('+ data[0] +', '+ data[1] +', '+ data[2] +', '+ Math.ceil((data[3]/255)) +')';

	color.style.background = rgba;
	color.textContent = rgba;
}

canvas.addEventListener('mousemove', pick);