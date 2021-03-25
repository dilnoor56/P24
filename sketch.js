const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(800,450,50)
    stone = new Stone(700,450)
    iron = new Iron(400,450)
    s1 = new Sand(600,450,15)
    s2 = new Sand(615,450,15)
    s3 = new Sand(630,450,15)
    s4 = new Sand(645,450,15)
    s5 = new Sand(660,450,15)
    s6 = new Sand(675,450,15)
    s7 = new Sand(695,450,15)
    s8 = new Sand(500,450,15)
    s9 = new Sand(515,450,15)
    s10 = new Sand(530,450,15)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    s1.display();
    s2.display();
    s3.display();
    s4.display();
    s5.display();
    s6.display();
    s7.display();
    s8.display();
    s9.display();
    s10.display();
}