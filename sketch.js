const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button_1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ball_options={restitution:0.95};
 
  ball=Bodies.circle(200,200,20,ball_options);
   World.add(world,ball);

   button_1=createImg("up.png");
   button_1.position(20,30);
   button_1.size(40,40);
   button_1.mouseClicked(applyForce);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
  ellipse(ball.position.x,ball.position.y,20,20);

  Engine.update(engine);
}

function applyForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

