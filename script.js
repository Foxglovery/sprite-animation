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


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100, 50, 100, 100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    //replace the sw and sh with the sprite h and w
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    requestAnimationFrame(animate);
};
animate();