// Create the canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Include Images
// background image
var bgReady = false;
var bgImage = new Image();
bgImage.addEventListener('load', function() {
    bgReady = true;
}, false);
bgImage.src = 'img/background.png';
// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.addEventListener('load', function() {
    heroReady = true;
}, false);
heroImage.src = 'img/hero.png';
// Monster Image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.addEventListener('load', function() {
    monsterReady = true;
}, false);
monsterImage.src = 'img/monster.png';

// Create Game Objects
var hero = {
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
};
var monster = {
	speed: 156,
    x: 0,
    y: 0
};
var monsterCaught = 0;

// Handle keyboard controls
var keysDown = {}
addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
    console.log(keysDown);
}, false);
addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // throw the monster somewhere on the scree randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};
// Update game objects
var update = function(modifier) {
    if (38 in keysDown)
        hero.y -= hero.speed * modifier; // Player holding up
    if (40 in keysDown)
        hero.y += hero.speed * modifier; // Player holding down
    if (37 in keysDown)
        hero.x -= hero.speed * modifier; // Player holding lef
    if (39 in keysDown)
        hero.x += hero.speed * modifier; // Player holding right

    if (
        hero.x <= (monster.x + 32) &&
        monster.x <= (hero.x + 32) &&
        hero.y <= (monster.y + 32) &&
        monster.y <= (hero.y + 32)
    ) {
        ++monsterCaught;
        reset();
    }
};

// Render objects: Draw Everything
var render = function() {
    if (bgReady)
        ctx.drawImage(bgImage, 0, 0);
    if (heroReady)
        ctx.drawImage(heroImage, hero.x, hero.y);
    if (monsterReady)
        ctx.drawImage(monsterImage, monster.x, monster.y);

    // Score
    ctx.fillStyle = 'rgb(250, 2550, 250)';
    ctx.font = '24px Ubuntu, Helvetica, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseLine = 'top';
    ctx.fillText('Monster caught: ' + monsterCaught, 32, 32);
};

// The main game loop
var main = function() {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};
// A note about looping - Cross-browser support for requestAnimationFrame
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's Play the game!
var then = Date.now();
reset();
main();