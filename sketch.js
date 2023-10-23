const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_con;

function preload(){
  bg_img=loadImage('fondo.jpg');
  food_img=loadImage('hot dog.png');
  homero_img=loadImage('homero parpadeando.gif');
}


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:245,y:30})
  fruit=Bodies.rectangle(250,250,20,20);
  Matter.Composite.add(rope.body,fruit);
  fruit_con= new Link(rope,fruit);
  rectMode(CENTER);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);
  ground.show();
  rope.show();
  image(food_img,fruit.position.x,fruit.position.y,70,70);

  Engine.update(engine);
  

 
   
}
