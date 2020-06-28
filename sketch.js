const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var floor;
var test;

function preload(){
  backg1 = loadImage("Photos/back1.jpg");
}

function setup() {
 createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

test = new NPC1(200,0,20,20);
 floor = new Ground(250,480,500,20);
}

function draw() {  
  background(backg1);
  Engine.update(engine);

  floor.display();
  test.display();
}
