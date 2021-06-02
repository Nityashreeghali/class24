const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    box2 = new Box(900,360,70,70);
    box3 = new Box(750,240,70,70);
    box4 = new Box(850,240,70,70);
    box5 = new Box(800,120,70,70);
    ground = new Ground(600,390,1200,10)
    pig1=new Pig(800,360,60,60)
    pig2=new Pig(800,240,60,60)
    log1=new Log(800,270,20,300,PI/2)
    log2=new Log(800,140,20,300,PI/2)
    log3=new Log(750,70,20,150,PI/7)
    log4=new Log(840,70,20,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
 
}