var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score,survivalTime;

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
  "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png",
  "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,400);
  
  //created ground
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  //ground.velocity=-4;
  console.log(ground.x);
  
  //created monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //groups are created
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  var score=0;
  var survivalTime=0;
}

function draw() {
  background("darkgreen"); 
  
  //to jump the monkey
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY=-12;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.velocityY=0;
  }
  
   if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
  }
  

  //given gravity
  monkey.velocityY=monkey.velocityY+0.8;
  
  food();
  obstacle();
  
  monkey.collide(ground);
  
  //to visible sprites
  drawSprites();
  
}

function food() {
  if (frameCount % 80 === 0){
  banana=createSprite(600,200,20,10);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
    
  //assigned lifetime
  banana.lifetime=500;
    
  //added banana in foodGroup
  foodGroup.add(banana);
  }

}

function obstacle(){
  if (frameCount % 300 === 0){
  obstacale=createSprite(600,310,20,10);
  obstacale.addImage(obstacleImage);
  obstacale.scale=0.2;
  obstacale.velocityX=-3;
    
  //assigned lifetime
  obstacle.lifetime=400;
    
  //added banana in foodGroup
  obstacleGroup.add(obstacale);
  }
}
