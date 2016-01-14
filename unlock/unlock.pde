/*
HKU - Kevin van Breemaat 2015
 */

//tobii imports
import gazetrack.*;
GazeTrack gt;
//tobii settings
float x_;
float y_;

//enable or disable plugins
boolean debug = false;          //Show additional information
boolean tobii = true;         //enable EyeX and EyeY locations (Tobii Eye X Requirments.

//tiles
ArrayList<tile> tilelist;
int rN = 3;
int tN = 3;
int tileCount = 0;
int tileNum = rN*tN*2;
int tw, th, tx, ty;

//code system
int charMax = 250;
int[] code = new int[charMax];
int codeCount = 0;
 
 PImage bg;
 boolean inlog=false;
 PImage bglogin;
void setup() {
  size(displayWidth, displayHeight);
  frameRate(60);

  //setup Tobii
  if(tobii){
    gt = new GazeTrack(this);
  }
  
  //tilles array
  tilelist = new ArrayList<tile>(); 
 
  //images 
  bg = loadImage("bg.png");
  bglogin = loadImage("bginlog.jpg");
  
  // Init tiles and positions
  for (int r = 0; r < rN; r++){
     for (int t = 0; t < tN; t++){
     
          tw = 250;
          th = 250;
          tx = tw * t + (350*(t+1)) - 100;
          ty = 200+ (r * th+20 );
        
        tilelist.add(new tile(tileCount,tx, ty, tw,th));  
        tileCount++;   
    } //end tile loop
  }//end for row loop
    
}
 


void draw() {
  //the quick brown fox jumps over the lazy dog
  background(bg);
 
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
// ellipse(x_, y_, 20, 20); 
  
  
  
  if(code[0] != 0)resetTiles();
  if(code[1] == 1 || code[1] == 2 || code[1] == 4|| code[1] == 5  || code[1] == 6 || code[1] == 7 || code[1] == 8)resetTiles();
  if(code[2] == 1 || code[2] == 2 ||  code[2] == 3 || code[2] == 4 || code[2] == 5 || code[2] == 7 || code[2] == 8)resetTiles();
  if(code[3] == 1 || code[3] == 2 ||  code[3] == 3 || code[3] == 4 || code[3] == 5 || code[3] == 6 || code[3] == 8)resetTiles();
  if(code[4] == 1 || code[4] == 2 ||  code[4] == 3 || code[4] == 4 || code[4] == 5 || code[4] == 6 || code[4] == 7)resetTiles();
  // code goed
  if(code[0] == 0 && code[1] == 3 && code[2] == 6 && code[3] == 7 && code[4] == 8){
    inlog = true;
  }

  
  if(inlog)image(bglogin,0,0);
  
  
  if(debug){
   fill(150);
   textSize(16);
     for (int i = 0; i < rN*tN; i++){
          text(code[i],30*i,30);
     }
  }
  
  
}/* End Void Draw() */





//Draw tiles
void drawTiles() { 
  for (tile p : tilelist ) {
     p.display();
  }   
}

//Press r to reset code debuggin..
void keyPressed() {
println(key);
    if(key == 'r' || key == 'R'){  
      resetTiles();
      inlog = false;
    }
}

//Reset the tiles
void resetTiles() {
   for (int i = 0; i < tileNum; i++){  
     code[i] = 0;
     codeCount = 0;
   }
  for (tile p : tilelist ) {
    if(p.hit) p.hit = false;
  } 
}


