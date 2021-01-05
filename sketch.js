const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var myengine,myworld,ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var plank1,plank2,plank3,plank4;
var im;
var bird;
var dummy;
var connect;
function preload()
{
im=loadImage("bg.png")
}

function setup() {
  createCanvas(1200,600);
  myengine = Engine.create();
  myworld=myengine.world;
 
  ground=new Ground(600,590,1200,30)
  box1=new Box(980,580,50,50)
  box2=new Box(815,580,50,50)
  pig1=new Pig(900,580,50)
  plank1=new Plank(900,570,20,230,PI/2)
  box3=new Box(980,560,50,50)
  box4=new Box(815,560,50,50)
  pig2=new Pig(900,560,50)
  plank2=new Plank(900,550,20,230,PI/2)
  box5=new Box(900,450,50,50)
  plank3=new Plank(865,450,20,130,PI/3)
  plank4=new Plank(935,450,20,130,   -PI/3  )  
  bird=new Bird (50,50,50,50) 
  dummy= new Plank(100,150,100,100,PI/2)
  connect=new Conection (bird.body,dummy.body)
}

function draw() {
  // imageMode (CENTER)
  background(im);  

  Engine.update(myengine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  plank1.display()
  plank2.display()
  plank3.display()
  plank4.display()
  bird .display()
  dummy.display()
  //connect.display()

} 