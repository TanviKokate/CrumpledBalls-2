const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin, dustbin_Image;
var leftBody, rightBody, bottomBody;

function preload(){
  dustbin_Image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(200, 200, 70);
  ground = new Ground(width/2, 470, width, 20);

  dustbin = createSprite(700, 370);
  dustbin.addImage(dustbin_Image);
  dustbin.scale = 0.55;

  leftBody = new Dustbin(643, 385, 20, 185);
  rightBody = new Dustbin(760, 385, 20, 185);
  bottomBody = new Dustbin(700, 450, 130, 20);

	Engine.run(engine);
}

function draw() {
  background(135, 0, 255);

  Engine.update(engine);
  
  paper.display();
  leftBody.display();
  rightBody.display();
  bottomBody.display();
  ground.display();

  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 750, y : -780});
  }
}