
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;



function preload()
{
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);

  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() 
{
  background("white");
  
  ground.x = ground.width/2;
  
  monkey.collide(ground);
  
  if (keyDown("space"))
  {
    monkey.velocityY = -10;
  }  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  spawnFoods();
  spawnObstacles();
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  
  drawSprites();
  
  
}

function spawnFoods()
{
  if (frameCount % 80 === 0)
  {
    var banana = createSprite(400,30,10,10);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200)); 
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = -1;
    bananaGroup.add(banana);
  }  
}  


function spawnObstacles()
{
  if (frameCount % 300 === 0)
  {
   var obstacle = createSprite(400,309,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -5;
   obstacle.scale = 0.2;
   obstacle.lifetime = 500;
   obstacleGroup.add(obstacle);
  }
}  
