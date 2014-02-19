/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   This code is based on a program I wrote on Khan Academy for my middle school classes.
   You can see the original at https://www.khanacademy.org/profile/jake.salazar/
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

void setup() { 
  size(400, 400); 
} 

var angle = -310;
var waveHeight = 30;

// @pjs preload must be used to preload the image
/* @pjs preload="images/bSimpson.png"; */
PImage b;
b = loadImage("images/bSimpson.png");

frameRate(22);

void draw() {

    background(0, 0, 0);
    
    var y = waveHeight * cos(angle);
    
    image(b, angle + 150, y + 100);    

    angle -= -6; // create movement

    if (angle > 310) {
         angle = -310; // reset if Bart is offScreen
    }

};