/*

Prototype to test scrolling options and functions with eye-gaze tracking
2015

HKU University of the Arts Utrecht 
Projet: Another Point of View
By:     Kevin van Breemaat 

Requirements: 
 - GazeTrack   https://github.com/AugustoEst/gazetrack
 - Processing 2
 - Must read:  Another Point of View by: Heeren van Brabant (heerenvanbrabant.com)

 */

//tobii imports
import gazetrack.*;
GazeTrack gt;

//cursor or gaze position
float x_;
float y_;

PImage btn;
PImage bg;

//enable or disable plugins
boolean tobii = true;         //enable EyeX and EyeY locations (Tobii Eye X Requirments.

float scrollPos = 0;

//ctrl variables
float scrollSpeed = 0;
float  currentY = 0;
boolean ctrlPressed = false;

//eye automaticly show scrollbar
int maybeTimer = 100;
 
 //
 boolean initScroller = false;
 
 
void setup() {
  size(displayWidth, displayHeight);
  frameRate(60);

  //setup Tobii
  if(tobii) gt = new GazeTrack(this);
  
    bg = loadImage("bg.png");
    btn = loadImage("btn.png");
}
 


void draw() {
  background(0);

  
  //draw eye/mouse pointer
  if(tobii){
    x_ = gt.getGazeX();
    y_ = gt.getGazeY(); 
  }else{
    x_ = mouseX;
    y_ = mouseY;
  }

  

  //disable negative scrolling and limit max
  if(scrollPos >= 1)scrollPos = 0;
  if(scrollPos <= -2688+displayHeight)scrollPos = -2688+displayHeight;
  
  //Draw visual
  pushMatrix();
    translate(0,scrollPos);
    image(bg,0,0);
  popMatrix();   
  
  if(ctrlPressed){
    //Prevent Scroll jumping if y is not perfectly centered on start of ctrl press.
    int baseS = 20;
    if(y_ < currentY){
      scrollSpeed = map(y_, 0, currentY, baseS, 0);
    }else{
       scrollSpeed = map(y_, currentY, displayHeight, 0,-baseS);
    } 
    scrollPos += scrollSpeed;  
  }else if ( x_ > displayWidth-hB &&  initScroller == false ){  //if no ctrl pressed and y_ is top or bottom 
    maybeTimer --;
    if(maybeTimer <= 0){      
        xB = displayWidth -hB;
        initScroller = true;
        println("inited");
    }  
  }else if(initScroller == false){
    maybeTimer = 3;
  } 

  if(initScroller){
    showScroller();
  }
     
   fill(0,0,0, hoverX/2); 
   strokeWeight(0);
   rect(xB-hoverX, 0, hB+hoverX, displayHeight);
  
    
  fill(0);
  ellipse(x_, y_, 20, 20);
  
}/* end draw */

float xB = 1820;
float yB = 0;
float hB = 100;
float hoverX = 25;
Boolean hoverBtn = false;
void showScroller(){   
  
   if(x_ > xB-hoverX){
     if(hoverX <=50) hoverX +=4; 
     yB -= (yB-y_)/50;
     scrollPos = map(yB, 0, displayHeight, 0,-4040+displayHeight);
     hoverBtn = true;     
   }else if(hoverBtn == true){
     hoverBtn = false;
     initScroller = false;
     hoverX =25;
   }





   image(btn,xB-hoverX/2,yB);
   
}


/*
  Default scroll behavour settings and ctrl button check
*/
void keyPressed() {   
    if(keyCode == 40)scrollPos -= 10;               //arrows keys up and down.
    else if(keyCode == 38)scrollPos += 10;
    
    if (key == CODED) {                            // check ctrl button
      if (keyCode == CONTROL) {
        if(ctrlPressed == false)currentY = y_;    //Triggers once to prevent jumpscroll
        ctrlPressed = true;
      }
    }
}
void keyReleased() {
     ctrlPressed = false;                         //unset ctrl allways.
}

void mouseWheel(MouseEvent event) {              //Deal with mouse scrolling.
  float e = event.getCount();
  if(e ==1)scrollPos -= 10;
  else if (e == -1) scrollPos += 10;
}
