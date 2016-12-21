var img = new Image();
img.src = 'img/rhino.jpg';
img.onload = function () {
    draw(this);
}

function draw(img) {
    var canvas = document.getElementById('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    
    var invert = function () {
        for (var i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i];  // red
            data[i + 1] = 255 - data[i + 1]; // green
            data[i + 2] = 255 - data[i + 2]; // blue
        }
        
        ctx.putImageData(imgData, 0, 0);
    };
    
    var grayscale = function () {
        for (var j = 0; j < data.length; j += 4) {
            var avg = (data[j] + data[j + 1] + data[j + 2])/3;
            data[j] = avg; // red
            data[j + 1] = avg; // green
            data[j + 2] = avg; // blue
        }
        
        ctx.putImageData(imgData, 0, 0);
    }
    
    var invertBtn = document.createElement('button');
    var grayscaleBtn = document.createElement('button');
    invertBtn.textContent = 'Invert';
    grayscaleBtn.textContent = 'Grayscale';
    canvas.parentNode.insertBefore(invertBtn, canvas.nextSibling);
    canvas.parentNode.insertBefore(grayscaleBtn, canvas.nextSibling);
    invertBtn.addEventListener('click', invert);
    grayscaleBtn.addEventListener('click', grayscale);
}
