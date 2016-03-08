/*
HKU - Kevin van Breemaat 2015
 */

//tobii imports
import gazetrack.*;
GazeTrack gt;
//tobii settings
float x_;
float y_;

boolean tobii = true;         //enable EyeX and EyeY locations (Tobii Eye X Requirments.

//tiles
ArrayList<tile> tilelist;
int rN = 3;
int tN = 5;
int tileCount = 0;
int tileNum = rN*tN;
int tw, th, tx, ty;



void setup() {
  size(displayWidth, displayHeight, P3D);
  frameRate(60);

  //setup Tobii
  if(tobii){
    gt = new GazeTrack(this);
  }
  
  //tilles array
  tilelist = new ArrayList<tile>(); 
 

  
  // Init tiles and positions
  for (int r = 0; r < rN; r++){
     for (int t = 0; t < tN; t++){
          tw = displayWidth/tN;
          th = displayHeight/rN;
          tx = tw * t;
          ty = th*r;
        
        tilelist.add(new tile(tileCount,tx, ty, tw,th));  
        tileCount++;   
    } //end tile loop
  }//end for row loop
    
}
 


void draw() {
  //the quick brown fox jumps over the lazy dog
  background(0);
 
  // draw the tiles 
  drawTiles();
  
  //draw eye/mouse pointer
  if(tobii){
    x_ = gt.getGazeX();
    y_ = gt.getGazeY(); 
  }else{
    x_ = mouseX;
    y_ = mouseY;
  }
  strokeWeight(0);
  fill(0,0,0,10);
  ellipse(x_, y_, 20, 20); 

}/* End Void Draw() */





//Draw tiles
void drawTiles() { 
  for (tile p : tilelist ) {
     p.display();
  }   
}



