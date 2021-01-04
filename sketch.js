var firet, firetImage, water, waterImage, waterGroup, house, houseImage, flame, flameImage, flameGroup, flame2, flame2Image, flameGroup2, flame3, flame3Image, flameGroup3;
var gameState = "play";
var score, miss, high;

function preload() {
  firetImage = loadImage("firetruck.png");
  houseImage = loadImage("houses.png");
  flameImage = loadImage("fire.png");
  waterImage = loadImage("water.png");
  flame2Image = loadImage("fire2.png");
  flame3Image = loadImage("fire3.png");
}


function setup() {
  createCanvas(600, 600);



  house = createSprite(300, 300, 600, 600);
  house.addImage(houseImage);
  house.scale = 1;


  firet = createSprite(300, 500, 20, 20);
  firet.addImage(firetImage);
  firet.scale = 0.3;

  bar = createSprite(300, 600, 600, 1);
  bar.visible = false;

  flameGroup = new Group();
  waterGroup = new Group();
  flameGroup2 = new Group();
  flameGroup3 = new Group();
  score = 0;
  miss = 0;
  high = 0;
}

function draw() {

  background("white");

  house.visible = true;


  if (gameState === "play") {

   

    if (keyDown("LEFT")) {
      firet.x = firet.x - 9;
    }
    if (keyDown("RIGHT")) {
      firet.x = firet.x + 9;
    }
    flame();
    flame2();
    flame3();
    if (flameGroup.isTouching(waterGroup)) {
      flameGroup.destroyEach();
      waterGroup.destroyEach();
      score = score + 1;
    }

    if (flameGroup2.isTouching(waterGroup)) {
      flameGroup2.destroyEach();
      waterGroup.destroyEach();
      score = score + 3;
    }
    if (flameGroup3.isTouching(waterGroup)) {
      flameGroup3.destroyEach();
      waterGroup.destroyEach();
      score = score + 5;
    }

    if (flameGroup.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup.destroyEach();
      miss = miss + 1;
    }
    if (flameGroup2.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup2.destroyEach();
      miss = miss + 1;

    }
    if (flameGroup3.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup3.destroyEach();
      miss = miss + 1;

    }

  }
  water();
  drawSprites();
  fill("green");
  textSize(20);
  text("Score:" + score, 500, 60);
  fill("red");
  text("Missed:" + miss, 490, 90);
  fill("yellow");
  text("High Score:" + high, 453, 30)

}



function flame() {
  if (frameCount % 50 === 0) {
    var flame = createSprite(200, -140)
    flame.x = Math.round(random(100, 400))
    flame.addImage(flameImage)
    flame.scale = 0.08;
    flame.velocityY = 10;
    flame.lifetime = 900;
    flame.setCollider("circle", 0, 150, 240);
    flame.debug = false;
     if(score>50){
      flame.velocityY=15;
    }
    flameGroup.add(flame);
  }
}

function flame2() {
  if(score>10){
  if (frameCount % 300 === 0) {
    var flame2 = createSprite(200, -140)
    flame2.x = Math.round(random(100, 400))
    flame2.addImage(flame2Image)
    flame2.scale = 0.08;
    flame2.velocityY = 15;
    flame2.lifetime = 900;
    flame2.setCollider("circle", 0, 150, 240);
    flame2.debug = false;
    if(score>50){
      flame2.velocityY=20;
    }
    flameGroup2.add(flame2);
  }}
}

function flame3() {
  if(score>25){
  if (frameCount % 500 === 0) {
    var flame3 = createSprite(200, -140)
    flame3.x = Math.round(random(100, 400))
    flame3.addImage(flame3Image)
    flame3.scale = 0.08;
    flame3.velocityY = 20;
    flame3.lifetime = 900;
    flame3.setCollider("circle", 0, 150, 240);
    flame3.debug = false;
    if(score>50){
      flame3.velocityY=25;
    }
    flameGroup3.add(flame3);
  }}
}

function water() {
  if (keyDown("space")) {
    var water = createSprite(firet.x, firet.y - 10, 10, 10)
    water.addImage(waterImage);
    water.velocityY = -10;
    water.lifetime = 35;
    water.scale = 0.05;
    water.setCollider("circle", 0, 0, 100)
    waterGroup.add(water);
    if (keyDown("a") && "space") {
      water.velocityY = -8;
      water.velocityX = -6;
      water.lifetime = 25;
      water.scale = 0.05;
    }
    if (keyDown("d") && "space") {
      water.velocityY = -8;
      water.velocityX = 6;
      water.lifetime = 25;
      water.scale = 0.05;
    }
  }
}