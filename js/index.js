const wall = document.getElementById("wall");
const ctx = wall.getContext("2d");

wall.width = innerWidth;
wall.height = innerHeight;

const marioSprite = new Image();
marioSprite.src = '../img/mario-sprite.png'
marioSprite.onload = loadImages;

const cols = 4;
const rows = 1;
const sprWidth = marioSprite.width / cols;
const sprHeight = marioSprite.height / rows;

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
const totalFrames = 4;
let currentFrame = 0;

let x = 0;
let y = 0;
let framesDrawn = 0;

const animate = () => {
    ctx.clearRect(0,0,wall.width,wall.height); 
    requestAnimationFrame(animate); 

    currentFrame = currentFrame % totalFrames; 
    x = currentFrame * sprWidth; 

    ctx.save();
    resizeImage();
    ctx.drawImage(marioSprite, x, y, sprWidth, sprHeight, 0, 0, sprWidth, sprHeight);
    ctx.restore();

    framesDrawn++;
    if(framesDrawn >= 10){
        currentFrame++;
        framesDrawn = 0;
    }
}

const resizeImage = () => {
    let scaleFactor = 4;
    let midXPos = innerWidth / 2 - (sprWidth * scaleFactor) / 2;
    let midYPos = innerHeight / 2 - (sprHeight * scaleFactor) / 2;
    ctx.translate(midXPos, midYPos);
    ctx.scale(scaleFactor, scaleFactor);
}

let numOfImages = 1;

function loadImages() {
    if(--numOfImages > 0) return;
    animate();
}