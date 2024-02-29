/*******************************************************/
// P5.play: DinoClone
// Written by Cliff Harfield
/*******************************************************/
console.log("Debug");
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 400;
const PLAYER_SCALE = SCREEN_HEIGHT/8;
const BLOCK_SCALE = SCREEN_HEIGHT/8;
var blockSpeed = -10;
var blocks;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log(" setup: DinoClone");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    blueCube= new Sprite(100, 100, PLAYER_SCALE, PLAYER_SCALE, 'd');
    blueCube.color = 'blue';
    blocks = new Group();
    ground = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    ground.color = 'black';
    world.gravity.y = 80;
    document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+blueCube.y);

            if(blueCube.y > 356 ){// 184 - found from testing - floor level
                console.log("Key pressed!"+blueCube.y);
                blueCube.vel.y = -20;
            }
    });
    blueCube.collides(blocks, deathOfPlayer);
    

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('cyan');
    newBlock();
}
function newBlock(){
    block= new Sprite(600,374, BLOCK_SCALE, BLOCK_SCALE, 'k');
    block.color = 'lightGreen';
    block.vel.x = blockSpeed ;
    blocks.add(block);
}
function deathOfPlayer(_blueCube, _block){
    console.log("playerhit");
}
/*******************************************************/
//  END OF APP
/*******************************************************/
