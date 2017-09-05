
var leftPaddle_x,leftPaddle_y;
var enemyPaddle_x,enemyPaddle_y;
var ball_x,ball_y;
var ballVelX, ballVelY;
var rallyCounter;


function setup() {
  createCanvas(1000,500);
  leftPaddle_x = 0;
  leftPaddle_y= 300;
  enemyPaddle_x =990;
  enemyPaddle_y=300;
  ball_x = 500;
  ball_y = random(255);
  ballVelX =5;
  ballVelY = random(5) +1;
  rallyCounter = 0;
}

function draw() {
  background(0);
  displayRally();
  checkLoss();
  checkBoundary();
  checkCollision();
  moveBall();
  moveAI();
  movePaddles();
}

function checkLoss(){
  if(ball_x<0 || ball_x> 1000){
    ball_x = 500;
    ball_y = random(255);
    rallyCounter = 0;
  }
}

function checkBoundary(){
  if(ball_y<3 || ball_y> 497){
    ballVelY = ballVelY*-1;
  }
}

function checkCollision(){
  if(ball_x >985 && ball_y<(enemyPaddle_y+102) && ball_y>enemyPaddle_y-2){
      ballVelX = ballVelX * -1; 
      rallyCounter++;
  }
  if(ball_x<15 && ball_y<(leftPaddle_y+102) && ball_y>leftPaddle_y-2){
    ballVelX = ballVelX * -1; 
    rallyCounter++;
  }
}

function moveBall(){
  ellipse(ball_x,ball_y,15,15);
  ball_x+=ballVelX;
  ball_y +=ballVelY;
}
function moveAI(){
rect(enemyPaddle_x,enemyPaddle_y,10,100);
  if(enemyPaddle_y+50>ball_y && enemyPaddle_y>0){
    enemyPaddle_y += -4;
  }
   if(enemyPaddle_y+50<ball_y && enemyPaddle_y<400){
    enemyPaddle_y += 4;
  }
}
function movePaddles(){
  rect(leftPaddle_x,leftPaddle_y,10,100);
  
  if(keyIsDown(UP_ARROW) && leftPaddle_y > 0){
    leftPaddle_y -=4;
   // enemyPaddle_y-=4;
  }
  if(keyIsDown(DOWN_ARROW) && leftPaddle_y <400){
    leftPaddle_y +=4;
    //enemyPaddle_y+=4;
  }
}

function displayRally(){
  fill(255);
  textSize(125);
  text(rallyCounter,460,100);

}