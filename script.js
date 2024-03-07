const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'assets/shadow_dog.png'
//Divide the pixel width of the Sprite sheet. By the number of columns of the Sprite characters 
const spriteWidth = 575;
//do the same for height
const spriteHeight = 523;
//abstract out the sprite frame variables
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;

    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    //replace the sw and sh with the sprite h and w
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight,
                               0, 0, spriteWidth, spriteHeight);
    //stagger frame will slow the animation down 5 times
    if(gameFrame % staggerFrames == 0){
    //logic to animate frames
    if (frameX < 6) frameX++;
    else frameX = 0;
    }
    

    gameFrame++;

    requestAnimationFrame(animate);
};
animate();