var car , wall;
var speed,weight;



function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);

car = createSprite(50,200,20,20);
car.velocityX = speed;

wall = createSprite(1500,200,60,height/2);
wall.shapeColor =80,80,80;


}

function draw() {
  background(255,255,255);  
  createCanvas(1600,400);

  if(wall.x-car.x<(car.width+wall.width)/2){
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor = "red";
    }

  if(deformation<100){
    car.shapeColor = "green";
  }
  if(deformation = 100||180){
    car.shapeColor = "yellow";
  }
  car.velocityX = 0;

  }

 




  drawSprites();
}