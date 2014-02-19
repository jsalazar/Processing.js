/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   This code is based on a program I wrote on Khan Academy for my middle school classes.
   You can see the original at https://www.khanacademy.org/profile/jake.salazar/
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

void setup() { 
  size(400, 400); 
} 

// start position of the ball
var ballY = 28;
var ballX = 28;

// initialize the ball speed
noStroke();

var ySpeed = 2;
var xSpeed = 2;

void draw() {

    background(235, 216, 7);
    fill(0);
    ellipse(ballX, ballY, 50, 50);
    
    // controls bottom limit
    if (ballY > 375) { 
        ySpeed = -5;
    }
    // controls top limit
    if (ballY < 28) { // 28 is top margin
        ySpeed = 5;
    }
    // controls right limit
    if (ballX > 375) {
        xSpeed = -random(2,18);
    }
    // controls left limit
    if (ballX < 28) {
        xSpeed = random(2,18);
    }
    // move the ball
    ballY = ballY + ySpeed;
    ballX = ballX + xSpeed;

};