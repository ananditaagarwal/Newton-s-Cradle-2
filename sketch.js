
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (200, 550, 100);
	bob2 = new Bob (300, 550, 100);
	bob3 = new Bob (400, 550, 100);
	bob4 = new Bob (500, 550, 100);
	bob5 = new Bob (600, 550, 100);
	roof = new Roof(400, 200, 600, 40);

	Engine.run(engine);
}


function draw() {

  background("white");
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
}



