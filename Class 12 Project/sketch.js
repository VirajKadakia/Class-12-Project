var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg=loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale=0.1;
    apple.velocityY=5;
    apple.lifetime=80;
  }
}

function createLeaves() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    orange = createSprite(random(50,350),40,10,10);
    orange.addImage(orangeImg);
    orange.scale=0.1;
    orange.velocityY=5;
    orange.lifetime=80;
  }
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=World.mouseX;
 
  createApples();
  createLeaves();

  drawSprites();
}