
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  
 //create a trex sprite

 trex=createSprite(50,160,20,50)

 //adding animation to terex
trex.addAnimation("running",trex_running);

//scale
trex.scale=0.5;

 ground=createSprite(200,180,400,20);
 //adding animation to ground

}

function draw(){
  background("light gray")
  
  //to make the terx jump
   if(keyDown("space")){
    trex.velocityY=-10;
   }
   // to add gravity
   trex.velocityY=trex.velocityY+0.5;

   //to stop the trex from falling down
trex.collide(ground);
drawSprites();
}
