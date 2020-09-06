var players, player1, player2, player3, player4;
var dragon ;
var bulletGroup;

var space;
var EnemyDragon, EnemyDragonImage;
var monsters;
var gameState = "play";
var database;
var form, player, game;
var groundImage;
var playerCount;
var allPlayers;
var distance = 0;
var Edges;
var timer = 0;

function preload(){
groundImage = loadImage('sprites/Forest.jpg')
player1_img = loadImage('sprites/player1.png')
dragon_image = loadImage('sprites/dragon.png');
player2_img = loadImage('sprites/Player2.png');
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

 space = createSprite(0, 0 ,displayWidth, displayHeight);
  space.addImage(groundImage)
space.scale = 2.5;
space.x = space.width/2;

  player1 = createSprite(300,400);
  player1.addImage(player1_img);
  player2 = createSprite(100,200);
  player2.addImage(player2_img);

  
  edges = createEdgeSprites();
  dragon = createSprite(100,100);
  dragon.addImage(dragon_image);
  dragon.scale=0.2;
  player1.scale=0.5;
  player2.scale=0.5;

  player1.debug=true;
 player2.debug=true;

 player1.velocityX = 4;
 player1.velocityY = 4;

 player2.velocityX = 4;
 player2.velocityY = 4;

  player1.setCollider("circle",0,0,80);
  player2.setCollider("circle",0,0,80);
  bulletGroup = new Group();
  //dragon = new Dragon();
  /*
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  */
}

function draw()
{
 // if(playerCount === 4){
   // game.update(1);
 // }
 space.velocityX = -4;
 if (space.x > 500) {
  space.x = space.width/2;
}
 if (keyDown("space")) {
  createBullet(dragon.x);
}
 
 background("white");
 drawSprites();

 timer = timer + 1;
  if(gameState === "play"){
    if(keyDown(UP_ARROW)){
      player1.y=player1.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player1.y=player1.y+10;
    }
    if(keyDown(LEFT_ARROW)){
      player1.x=player1.x-10;
    }
    if(keyDown(RIGHT_ARROW)){
      player1.x=player1.x+10;
    }
    //if (player1.isTouching(edges[2]) || player1.isTouching(edges[3])|| player1.isTouching(edges[0])|| player1.isTouching(edges[1])) {
      player1.bounceOff(edges[2]);
      player1.bounceOff(edges[3]);
      player1.bounceOff(edges[1]);
      player1.bounceOff(edges[0]);
     // wall_hitSound.play();
    //}
    if(keyDown("W")){
      player2.y=player2.y-10;
    }
    if(keyDown("S")){
      player2.y=player2.y+10;
    }
    if(keyDown("A")){
      player2.x=player2.x-10;
    }
    if(keyDown("D")){
      player2.x=player2.x+10;
    }
    //if (player2.isTouching(edges[2]) || player2.isTouching(edges[3])|| player2.isTouching(edges[0])|| player2.isTouching(edges[1])) {
      player2.bounceOff(edges[2]);
      player2.bounceOff(edges[3]);
      player2.bounceOff(edges[1]);
      player2.bounceOff(edges[0]);
     // wall_hitSound.play();
    //}
 
  player1.bounce(player2);
  
    //spawnDragon();
    
  
  if(timer > 120)
    {
  dragon.x = random(displayWidth -50,displayHeight -50);
  //console.log(dragon.x);
  dragon.y = random(displayWidth - 300,displayHeight - 450);
  //console.log(dragon.y);
  timer = 0;
  
    }
   
  }
  /*if(gameState === 2){
    game.end();
  }*/
}
  
function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = dragon.y - 50;
  bullet.x = dragon.x - 65;                                           
  bullet.shapeColor = "red";
  bullet.velocityX= -5;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}

        