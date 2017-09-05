var bgColor;
var body,head,pupils,tooth,knee,leg;
  
function setup() {
  createCanvas(800,600);
  bgColor = color(105,232,239);
  body = color(0,0,0);
  head = color(247,255,28);
   pupils = color(255,0,0);
   tooth = color(255,255,255);
   knee = color(255,0,0);
   leg = color(0,0,0);  
  
}

function draw() {
 background(bgColor);
 clouds();
 
  hill(-100,600,400,500);
  hill(100,600,700,600);
  hill(0,600,600,400);
  
  translate(mouseX-185,mouseY-160);
  
 
  torso();
  
  
  face();
  
  if(mouseIsPressed){
  eyes(true);
  mouth(true);
  }
  else{
    eyes(false);
    mouth(false);
  }
  
 
  
  
 knees(knee);
  legs(leg);
}
function torso(){
  //torso
  fill(body);
  rect(175,115,50,100);
}
function face(){
  //face
  fill(head);
  ellipse(200,75,200,90);
}
function eyes(sleep){
   //eyes
   if(sleep ===true)
   {
   fill('black');
  rect(160,50,15,5);
  rect(240,50,-15,5);
 //fill(pupils);
  //ellipse(168,48,10,10);
  //ellipse(233,48,10,10);
   }
   else{
  fill('black');
  rect(160,40,15,20);
  rect(240,40,-15,20);
  fill(pupils);
  ellipse(168,48,10,10);
  ellipse(233,48,10,10);
   }
}
function mouth(sleep){
  if(sleep ===true){
  //mouth
  fill('blue');
  ellipse(210,90,6,17)
  fill('pink');
  ellipse(200,75,30,30);
  fill(tooth);
  rect(196,60,8,10);
  }
  else{
    
     fill('pink');
  ellipse(200,75,30,30);
  fill(tooth);
  rect(196,60,8,10);
  }
}
function knees(){
   //knees
  fill(knee)
  triangle(175,215,175,195,150,205);
  triangle(225,215,225,195,250,205);
}
function legs(){
  //legs
  fill(leg);
  rect(155,203,-40,70);
  rect(245,203,40,70);
}
function hill(x,y,w,h){
  fill(color(0,255,0));
  arc(x+(w/2),y,w,h,PI,0,PIE);
}

function clouds(){
  fill('white');
  noStroke();
 ellipse(400,100,60,35);
 ellipse(440,100,60,35);
 ellipse(420,80,60,35);
 
 ellipse(500,200,60,35);
 ellipse(540,200,60,35);
 ellipse(520,180,60,35);
 stroke('black');
}

function keyPressed(){
  
   body = color(random(256),random(256),random(256));
   head = color(random(256),random(256),random(256));
   pupils = color(random(256),random(256),random(256));
   tooth = color(random(256),random(256),random(256));
   knee = color(random(256),random(256),random(256));
   leg = color(random(256),random(256),random(256));
  
}

