/*
HKU - Kevin van Breemaat 2015
 */

//tobii imports
import gazetrack.*;
GazeTrack gt;
//tobii settings
float x_, xm;
float y_, ym;



PImage cursor;
  PImage bg;
 PImage bg2;
PImage zoom;

 boolean zooming = false;
boolean next = false;


void setup() {
  size(displayWidth, displayHeight, P3D);
  frameRate(60);
  noCursor();
  
  //setup Tobii
  gt = new GazeTrack(this);
   
   ellipseMode(CORNER);
   //load cursor
   cursor = loadImage("cursor.png"); 
   bg = loadImage("bg.png");
   bg2 = loadImage("bg2.png");
   zoom = bg.get(int(x_), int(y_), 90, 90);  // init profile picture
}
 


void draw() {
   // draw the stars   
  image(bg,0,0);

 
 
    //draw eye/mouse pointer
    int s = 6;
    x_ -= (x_ - gt.getGazeX() )/s ;
    y_ -= (y_ - gt.getGazeY() )/s   ;
    xm = mouseX;
    ym = mouseY;
    if(zooming){
      //art
      int size = 270;
      zoom = bg.get(  int(x_)-size/2, int(y_)-size/2, size,size      );  // init profile picture
      //idk what this does but it works and i found it on the processing forums :) // a link would have been nice afcourse..
      textureMode(NORMAL); 
      beginShape(); 
        texture(zoom); 
        float cRadius = size*2;
        for (int i = 0; i<20; i++) { 
              float stepFac = 2*PI*(float(i)/20); 
              vertex(x_+cRadius/2*sin(stepFac),y_+cRadius/2*cos(stepFac),(sin(stepFac)+1)/2,(cos(stepFac)+1)/2); 
        } 
      endShape(CLOSE); 
      fill(0,0);
      stroke(255);
      strokeWeight(5);
      ellipse(x_-size,y_-size,size*2,size*2); 
      fill(255);
      strokeWeight(0);  
    }
      
  //cursor
  image(cursor,xm,ym);

}/* End Void Draw() */


 void mousePressed() {
   if(mouseX > 640 && mouseX < 800 && mouseY >417 &&  mouseY < 600)bg = bg2;
  }

 void keyPressed() {
    zooming = true;
  }
  void keyReleased() {
     zooming = false;
  }




