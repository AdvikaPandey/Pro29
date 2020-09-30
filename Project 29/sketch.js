const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  createSprite(400, 200, 50, 50);

  ground = new Ground(400,400,800,20);
  Stand = new Ground(300,395,500,20);

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,235,30,40);
  block7 = new Box(390,235,30,40);
  block8 = new Box(420,235,30,40);
  block9 = new Box(390,235,30,40);
 

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
}