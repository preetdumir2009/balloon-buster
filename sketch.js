  var redBalloonImg,red_balloon0
  var greenBalloonImg,green_balloon0
  var blueBalloonImg,blue_balloon0
  var pinkBalloonImg,pink_balloon0
  var bow,bow0
  var backgroundImg,background20
  var arrow,arrowImg
  var score=0;


  var balloonsGroup;
  var redBalloonGroup;
  var blueBalloonGroup;
  var pinkBalloonGroup;
  var greenBalloonGroup;
  var arrowGroup;

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   balloonsGroup=createGroup()
   redBalloonGroup=createGroup()
   blueBalloonGroup=createGroup()
   pinkBalloonGroup=createGroup()
   greenBalloonGroup=createGroup()
   arrowGroup=createGroup()
  
  
  
  
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  
  if(arrowGroup.isTouching(redBalloonGroup)){
    redBalloonGroup.destroyEach()
    arrowGroup.destroy()
    score=score+1
  }
  if(arrowGroup.isTouching(blueBalloonGroup)){
    blueBalloonGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+1
  }
  
    if(arrowGroup.isTouching(greenBalloonGroup)){
    greenBalloonGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+1
  }
  
    if(arrowGroup.isTouching(pinkBalloonGroup)){
    pinkBalloonGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+1
  }
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  textSize(32);
  text("Your score = "+score,200,50)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1
  
  redBalloonGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1
  
  blueBalloonGroup.add(blue)
  
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1
  
  greenBalloonGroup.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1
  
  pinkBalloonGroup.add(pink)
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
  return arrow;
}





