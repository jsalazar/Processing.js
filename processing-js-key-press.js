/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   This code is based on a program I wrote on Khan Academy for my middle school classes.
   You can see the original at https://www.khanacademy.org/profile/jake.salazar/
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

void setup() { 
  size(400, 400); 
} 

// attempt to give canvas element focus
canvas = document.getElementById('canvas');
canvas.setAttribute('tabindex','0'); 
canvas.focus();

// @pjs preload must be used to preload the image
/* @pjs preload="images/mSimpson.png"; */
PImage maggie;
maggie = loadImage("images/mSimpson.png");

var maggieX = 125;
var maggieY = 120;

void draw() {
    
    if (keyPressed) {
        if (key == CODED) {
            switch (keyCode) {
                case UP: maggieY -=5; break;
                case DOWN: maggieY +=5; break;
                case LEFT: maggieX -=5; break;
                case RIGHT: maggieX +=5; break;
            }
        }
    }
    
    // redraw BG
    background(163, 163, 158);
    // draw image
    image(maggie, maggieX, maggieY);
    
    var theKey = "Press your UP,DOWN,LEFT,RIGHT arrow keys.";
    text(theKey, 5, 390);
    
};    