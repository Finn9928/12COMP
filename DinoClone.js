/*******************************************************/
// P5.play: DinoClone
// Written by Cliff Harfield
/*******************************************************/
console.log("Debug");
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 400;
const PLAYER_SCALE = SCREEN_HEIGHT/8;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log(" setup: DinoClone");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    blueCube= new Sprite(100, 100, PLAYER_SCALE, PLAYER_SCALE, 'd');
    blueCube.color = 'blue';
    ground = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    ground.color = 'black';
    world.gravity.y = 24.79;
    //document.addEventListener("keydown", function(event) {

  //if (event.code === 'ArrowLeft') {

    // Set sprite's velocity to the left

 // }

 // else {

//     etc...    
//
//});
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('cyan');
    
}
/*******************************************************/
//  END OF APP
/*******************************************************/