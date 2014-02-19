/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   This code is based on a program I wrote on Khan Academy for my middle school classes.
   You can see the original at https://www.khanacademy.org/profile/jake.salazar/

   Ported from:
    http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

void setup() { 
  size(400, 400); 
} 

background(0, 0, 0);

var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";

//converting the string into an array of single characters
chinese = chinese.split("");

var fontSize = 15;
var cHeight = 400;
var cWidth = 400;
var columns = cWidth/fontSize; //number of columns for the rain

//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)

for (var x = 0; x < columns; x++) {
    drops[x] = 1; 
}
    
frameRate(15);

void draw() {

fill(0, 0, 0, 20); //translucent BG to show trail
rect(0, 0, 400, 400); // create rect to fill canvas

//looping over drops
for(var i = 0; i < drops.length; i++) {

    //a random chinese character to print
    var cLetters = chinese[round(random(0,chinese.length))];

    fill(7, 189, 29);
    text(cLetters, i*fontSize, drops[i]*fontSize);
        
    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    var randY = random(0,400);
        
    if (drops[i]*fontSize > cHeight && randY > 250) {
            drops[i] = 0;
        }
        
    //incrementing Y coordinate
    drops[i]++;
   
    }

};