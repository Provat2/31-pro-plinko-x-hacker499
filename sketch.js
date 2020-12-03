const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var BackgroundImg;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 150;

function preload(){
  BackgroundImg = loadImage("bg.jpg");
}
function setup() { 
  createCanvas(700,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 50));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 120));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,190));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 260));
  }
  
}

function draw() {
  Engine.update(engine);
  background(BackgroundImg);
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

