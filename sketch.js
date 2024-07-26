//varity of balls
let bX = 100
let bY = 200
let diameter= 20
let radius = diameter /2;

//speed of the ball
let speedBX = 3;
let speedBY = 5;

//varities of the racket
let xR = 5;
let yR = 150;
let widthR = 10;
let heightR = 90;

//opponentracket
let xRO = 585;
let yRO = 150;
let speedYO;

let colidiu = false;

//score of the game
let myscore =0;
let scoreO = 0;

//soundtracks of the game
let racketed;
let score;
let track;

//I won't add sounds because I'm deaf so I do not really need it and thanks for viewing the project, Alura. I'm Brazilian but I prefer to use English in this game's code so I wouldn't be very confused and I'm fluent in English. So this can help me to not confuse at all




function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (0);
  showBall();
  moveball();
  checkcollisonedge();
  showtheracket(xR,yR);
  showtheracket(xRO,yRO)
  movemyracket();
  includescore();
  setpoint();
  checkcollisonracketO(xRO,yRO);
  moveOracket();
  checkcollisonracket(xR,yR);

  
}

function showBall(){
  circle(bX,bY,diameter);

}

function moveball(){
  bX += speedBX
  bY += speedBY
}

function checkcollisonedge(){

  if (bX + radius > width || bX - radius < 0) {
    speedBX *= -1;
  }
    if (bY + radius > height || bY - radius < 0) {
    speedBY *= -1;
    }
}

function showtheracket(x,y) {
   rect (x, y, widthR, heightR);
}
function movemyracket (){
  if (keyIsDown(UP_ARROW)) {
 yR -=10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yR += 10;
  }
}
  function checkcollisonracket() {
    if (bX - radius < xR + widthR && bY - radius < yR + heightR && bY + radius > yR) {
      speedBX *= -1;
    
      
}
  }
    function checkcollisonracketO(x,y) {
      colidiu= collideRectCircle(xRO,yRO,widthR,heightR,bX,bY,radius);
      if (colidiu) {
        speedBX *= -1;
        
        
      }
    }
    function checkcollisonracket(x,y) {
      colidiu= collideRectCircle(xR,yR,widthR,heightR,bX,bY,radius);
      if (colidiu) {
        speedBX *= -1;
      }
    }
 function moveOracket(){
      if (keyIsDown(87)){
  yRO -=10;
      }
   if (keyIsDown(83)){
     yRO += 10;
        
  }
 }
function includescore(){
  stroke(225)
  textAlign(CENTER);
  textSize(25);
  fill(color(255,140,0));
  rect(141,5,60,30);
  fill(225)
  text(myscore, 170, 26)
  fill(color(255,140,0))
  rect(440,5,60,30);
  fill(225)
  text(scoreO, 470, 26)
  
}
function setpoint(){
  if (bX > 590){
    myscore +=1;
    
  }
  if (bX < 10) {
    scoreO += 1;
  

  }
}
