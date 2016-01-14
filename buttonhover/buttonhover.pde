/*

HKU - Kevin van Breemaat 2015

 */

//tobii imports
import gazetrack.*;
GazeTrack gt;
float x_;
float y_;


//tiles
int btnArea = 0;
ArrayList<tile> tilelist;
int rN = 2;                   // number of rows
int tN = 2;                   // numober of tiles per row 
int padding = 0;
int icount = 0  ;

//code system
int[] code = new int[rN*tN];
int codeCount = 0;
int[] password = new int[rN*tN];


PImage button;
boolean buttonHover = false;
int shapeTimer = 0;
  PImage[] toolimg = new PImage[5];
int tool = 0;

//enable or disable plugins
boolean debug = true;          //Show additional information
boolean tobii = true;         //enable EyeX and EyeY locations (Tobii Eye X Requirments.


void setup() {
  size(displayWidth, displayHeight,P3D); //P3D is just for hovers
  frameRate(60);

  button = loadImage("button.png");

 //setup Tobii
  if(tobii){
    gt = new GazeTrack(this);
  }
    //tilles array
  tilelist = new ArrayList<tile>(); 
  // Init tiles and positions
   for (int r = 0; r < rN; r++){
      for (int t = 0; t < tN; t++){
       
       int tw = 120;
       int th = 120;
   
       int tx =  displayWidth/2 - tw/2;
       int ty =  700 - (th*icount);
         

       icount++;
       tilelist.add(new tile(icount, tx,ty, tw,th));   
        
    }
  }
  
    for ( int i = 0; i< toolimg.length; i++ ) {
     toolimg[i] = loadImage( i + ".png" );  
    }
 
}

void draw() {
  background(194,194,253);

  image(button, displayWidth/2-700/2, 800);
  //draw tool is set by setTool()
  image(toolimg[tool], 90, 90);  
  
  //check hover once
  if(x_> displayWidth/2-350 && x_ <  displayWidth/2-700/2+700 && y_ > 800 && y_ < 1000  && buttonHover == false){
      buttonHover = true;
              println("open"); 
  }
  //Check hover out if needed
  if( buttonHover == true){ 
    if(x_ < displayWidth/2-350 || x_ >displayWidth/2-350 + 700 || y_ < 100 || y_ > 1000  ){
        resetTiles(); 
    }   
  }
  
  //show hover results
  if(buttonHover){
       for (tile p : tilelist ) {
         p.display();
         if(p.hoverTimer > 50){
            setTool();
         }
      }   
  }else{
      for (tile p : tilelist ) {
         p.reset();
      }
  }
  
  //draw eye pointer
  if(tobii){
    x_ = gt.getGazeX();
    y_ = gt.getGazeY();
  }else{
    x_ = mouseX;
    y_ = mouseY;
  }
  fill(0);
  ellipse(x_, y_, 20, 20); 



  //show the code
  if(debug){
   fill(0);
   textSize(16);
   text(code[0],30,30);
  }
}/* End Void Draw() */


void setTool() {
    tool = code[0];
   resetTiles();
}


//Press r to reset code debuggin..
void keyPressed() {
    if(key == 'r' || key == 'R'){  
      resetTiles();
    }
}

//Reset the tiles
void resetTiles() {
   for (int i = 0; i < rN*tN; i++){  
    code[i] = 0;
    codeCount = 0;
    buttonHover = false;
   }
  for (tile p : tilelist ) {
    if(p.hit) p.hit = false;
  } 
}



