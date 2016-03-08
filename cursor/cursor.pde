/*
HKU - Kevin van Breemaat 2015
 */

//tobii imports
import gazetrack.*;
GazeTrack gt;
//tobii settings
float x_, xm;
float y_, ym;

float fastXstart = 0;
float fastXend = 0;


void setup() {
  size(displayWidth, displayHeight-200, P3D);
  frameRate(60);
  
  //setup Tobii
  gt = new GazeTrack(this);
}
 


void draw() {
  background(201,201,201);
 

    if(abs(x_ - gt.getGazeX()) > 500){
      fastXstart = x_;
      fastXend =gt.getGazeX();
    }
    rect(fastXstart, 0,30,displayHeight);
    rect(fastXend, 0,30,displayHeight);
    
    int s = 1;
    x_ -= (x_ - gt.getGazeX() )/s ;
    y_ -= (y_ - gt.getGazeY() )/s   ;
    xm = mouseX;
    ym = mouseY;

      
  //cursor
  ellipse(x_,y_,30,30);

}/* End Void Draw() */


void mousePressed() {

}
void keyPressed() {

}
void keyReleased() {

}




