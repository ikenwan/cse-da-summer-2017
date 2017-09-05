var monster_img;
var cookie_img;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var cake_x,cake_y;
var pie_x,pie_y;
var misses;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 800;
  cake_y = random(350);
  pie_x = 900;
  pie_y = random(350);
  misses =0;
  points = 0;
  
  
}
function restart(){
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 800;
  cake_y = random(350);
  pie_x = 900;
  pie_y = random(350);
  misses =0;
  points = 0;
  removeElements(); 
}

function draw() {
  
  
  
  if(misses<3)
  {
    background(200);
    displayPoints();
    
    image(monster_img, monster_x, monster_y);
    image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
    
    moveCookie();
    movePie();
    moveCake();
    moveMonster();
    checkForCakeChomp();
    checkForPieChomp();
    checkForCookieChomp();
  }
  else
  {
    image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
    background(300);
    fill(160);
    textSize(70);
    text("GAME OVER",95,195);
     image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
    moveCookie();
    movePie();
    moveCake();
    button = createButton('restart');
    button.position(150, 65);
    button.mousePressed(restart);
    
  }
}

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
  text(misses,10,170);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    misses++;
  }
  else 
    cookie_x -= 4 + points/2;
}
function moveCake() {
  if(cake_x < 0) {
    cake_x = 800;
    cake_y = random(350);
  }
  else 
    cake_x -= 4;
}
function movePie() {
  if(pie_x < 0) {
    pie_x = 900;
    pie_y = random(350);
  }
  else 
    pie_x -= 4;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
    if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 2;
    if(keyIsDown(RIGHT_ARROW) &&  monster_x<400)
    monster_x += 2;
}

function checkForCookieChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 95) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
}

function checkForCakeChomp() {
  var d = dist(cake_x, cake_y, monster_x, monster_y);
  if (d < 95) {
    misses += 1;
    cake_x = 725;
    cake_y = random(350);
  }
}

function checkForPieChomp() {
  var d = dist(pie_x, pie_y, monster_x, monster_y);
  if (d < 95) {
    misses += 1;
    pie_x = 725;
  pie_y = random(350);
  }
}
