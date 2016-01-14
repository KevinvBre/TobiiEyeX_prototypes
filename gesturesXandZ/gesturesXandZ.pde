/*
HKU - Kevin van Breemaat 2015

 */

//open cv imports
import gab.opencv.*;
import processing.video.*;
import java.awt.*;
Capture video;
OpenCV opencv;

//OpenCv settings
ArrayList<Face> faceList;        // List of my Face objects (persistent)
Rectangle[] faces;               // List of detected faces (every frame)
int faceCount = 0;               // Number of faces detected over all time. 

int camW = 1280;                 //aspect ratio must match OpenCv supported resolutions
int camH = 960;  
int scl = 4;                      // Scaling down the video Cause OpenCv is pretty heavy.

//ghostmode import
import de.timpulver.ghost.*;
Ghost ghost;

//tobii imports
import gazetrack.*;
GazeTrack gt;
//tobii settings
ArrayList<PointerDot> pointerlist;
int poinCount = 0;
boolean FaceRectangles = false;
int AmountOfpointers = 10;
float x_;
float y_;

//enable or disable plugins
boolean debug = false;          //Show additional information
boolean faceDetection = true;  //enable Face detection
boolean tobii = true;         //enable EyeX and EyeY locations (Tobii Eye X Requirments.
boolean ghostMode = false;

//tiles
int btnArea = 0;
ArrayList<tile> tilelist;
int rN = 2;                   // number of rows
int tN = 2;                   // numober of tiles per row 
int padding = 0;
int icount = 0;
int shape = 1;
// 0 is grid
// 1 is square       rn and tn should be 2
int shapeTimer = 0;
boolean shapeStatus = false;
boolean shapeStatus2 = false;

boolean setFaceW = true;
int zoomTimer = 0;
float zoomScl = 1; 
float zoomSclN = 1;
float fwStart = 0;
float fwNew = 0;
float tx = 0;
float ty = 0;
float tw = 200;
float th = 200;
float txN, tyN, twN, thN;

//code system
int[] code = new int[rN*tN];
int codeCount = 0;
int[] password = new int[rN*tN];

//design
PImage banner;
PImage banner2;
PImage bg;
PImage done;
float imgY = 1;
int bannerTimer = 0;
float bannerY = 10;

boolean first = true;
boolean wentdown = false;

void setup() {
  size(displayWidth, displayHeight);
  frameRate(60);
   banner = loadImage("banner.png");
   banner2 = loadImage("banner2.png");
   done = loadImage("done.png");
     bg = loadImage("bg.png");
  if(faceDetection){
    video = new Capture(this, camW/scl, camH/scl);
    opencv = new OpenCV(this, camW/scl, camH/scl);
    opencv.loadCascade(OpenCV.CASCADE_FRONTALFACE);  
    faceList = new ArrayList<Face>();
    video.start();
  }
  //Set ghostmode
  if(ghostMode) ghost = new FullscreenGhost(this);
  //setup Tobii
  if(tobii){
    pointerlist = new ArrayList<PointerDot>(); 
    gt = new GazeTrack(this);
    //Init pointers
    for (int i = 1; i < AmountOfpointers; i++) {
       pointerlist.add(new PointerDot(i)); 
    }
  }//End tobii setup   
  
  //tilles array
  tilelist = new ArrayList<tile>(); 
  
  // Init tiles and positions
  if(shape == 0){
     // setup the grid
     for (int r = 0; r < rN; r++){
        for (int t = 0; t < tN; t++){
         int rw = (displayWidth-padding*2 - btnArea)/tN;
         int rh = (displayHeight-padding*2)/rN;
         icount++;
         tilelist.add(new tile(icount, t*rw,r*rh, rw,rh));   
          
      }
    }
  }else if(shape == 1){
     // Setup the square
      for (int r = 0; r < rN; r++){
        for (int t = 0; t < tN; t++){
          float hitAreaW = displayWidth/2.5;
          float hitAreaH = displayHeight/2.5;
          float x = t*(displayWidth - hitAreaW - padding*2);
          float y = r*(displayHeight - hitAreaH - padding*2);
         icount++;
         tilelist.add(new tile(icount, x, y, hitAreaW,hitAreaH));   
      }
    }
    //end square
    
  }
 
}

void draw() {
  //art and show
   if(ghostMode == false){
     background(100,100,250);
   }

   //if Z timer is set
   
  
   if(shapeStatus2){
     zoomTimer--;
     zoomSclN = map(fwNew, fwStart , fwStart - 15, 10, 1);
     zoomScl += (zoomSclN - zoomScl) /5;
   }
   if(zoomTimer <= 10){
     shapeStatus2 = false;
   }
   
   //draw done img
   if(shapeStatus){
      image(done, displayWidth/2-375/2 ,  displayHeight/2-375/2);
   }
     

   
   
   //finish last state
   if(zoomScl <= -2) zoomScl = -2; // limit min
  
   //center and animate x and y
   tw = map(zoomScl,1 , 10, 600, displayWidth);
   th = map(zoomScl,1 , 10, 338, displayHeight);
   tx = map(zoomScl,1 , 10, displayWidth/2.9, 0);
  if(shapeStatus) {
    ty =  displayHeight-100;
  }else{
    ty = map(zoomScl,1 , 10, displayHeight/4, 0);
  }
  
   twN += (tw - twN)/5;
   thN += (th - thN)/5;
   txN += (tx - txN)/5;
   tyN += (ty - tyN)/5;
   
   
   //limit max
   if(twN >= displayWidth){
     twN = displayWidth;
     txN = 0;
     tyN = 0;
   }

  
  //draw the screen
   pushMatrix();  
     translate(txN, tyN);
     strokeWeight(0);
     
     fill(255,250,250);
       rect(0, 0, twN, thN);
     
     fill(238,233,233);
       rect(0, 0, twN, thN/10);
       rect(0, thN-thN/10, twN, thN/10);
   
   popMatrix();

  //draw loader of zoomer
  if(shapeStatus2){
    fill(0,0,255);
    rect(0,0,map(zoomTimer,0, 150, displayWidth, 10 ), 10, 50); 
  }  
     
  //Introduction
  bannerTimer ++;
  if(bannerTimer > 100 && bannerY < 2000 )bannerY *=1.8;
    
     if(wentdown == false){
      image(banner, 0 , displayHeight - 432 + bannerY);
     }
     if(wentdown){
         image(banner2, 0 , displayHeight - 432 + bannerY);
     }

  if(shapeStatus){
    // println("test 1 klaar");
     wentdown = true;
  }else{

     
  }
  if(shapeStatus == false && wentdown){
    
      
      if(first){
        bannerY = 10;
          println("test 1 klaar");
       bannerTimer = 0; 
      }
       first = false;
     
  }else{
       int cpadding = 300;
      strokeWeight(0);
      textSize(26);
      //circkel 1      
     fill(255); 
     text("1", cpadding,cpadding);
     fill(0,0,255,100); 
     ellipse(cpadding,cpadding, cpadding/2, cpadding/2);
     
      //circkel 2      
     fill(255); 
     text("3", displayWidth - cpadding,cpadding);
     fill(0,0,255,100); 
     ellipse(displayWidth - cpadding,cpadding, cpadding/2, cpadding/2);
     
      //circkel 3    
     fill(255); 
     text("4",  cpadding,displayHeight -cpadding);
     fill(0,0,255,100); 
     ellipse( cpadding,displayHeight -cpadding, cpadding/2, cpadding/2);
     
      //circkel 4     
     fill(255); 
     text("2", displayWidth - cpadding,displayHeight -cpadding);
     fill(0,0,255,100); 
     ellipse(displayWidth - cpadding,displayHeight -cpadding, cpadding/2, cpadding/2); 
  }


  //end art and show
  


  // draw the tiles 
  drawTiles();
  
  
  //draw the faces
  if(faceDetection) {
    opencv.loadImage(video);
    detectFaces();
  }
  
  //draw visual faces
  if(faceDetection){
     pushMatrix();
        translate((displayWidth - camW)/2, 0);
        fill(255);
        scale(scl);
        for (Face f : faceList) {
         f.display();
         if(setFaceW){
           setFaceW = false;
           fwStart = f.faceW;
         }
         fwNew = f.faceW;
        }
    popMatrix();
  }

 
  //draw eye pointer
  if(tobii){
    x_ = gt.getGazeX();
    y_ = gt.getGazeY();   
    //draw pointers (followers if needed)
    drawPointers();    
    ellipse(x_, y_, 20, 20); 
  }else{ 
    x_ = mouseX;
    y_ = mouseY;
    fill(0);
    ellipse(x_, y_, 20, 20);
  }
 
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


   int drawTime = 800;
  
   //setup and init timer
   if(code[0] == 0) shapeTimer= 0;
   else shapeTimer ++;

  
 
  //shape square or z check
  if(shape == 1){
     
   //rest everything except   first hit is top left
    if(code[0] != 1 || code[1] == 3 )resetTiles() ;
      
   // println(shapeTimer);
    
    //if time is 25% reset   
    if(shapeTimer >= drawTime*0.25 && code[0] == 1) resetTiles() ; // reset tiles and code   
    
     //if time is 50% reset   
    if(shapeTimer >= drawTime*0.5 && code[0] == 1 && code[1] == 4  || shapeTimer >= drawTime*0.5 && code[0] == 1 && code[1] == 2  ) resetTiles() ; // reset tiles and code   
    
     //if time is 75% reset   
    if(shapeTimer >= drawTime*0.75 && code[0] == 1 && code[1] == 4 && code[2] == 2  || shapeTimer >= drawTime*0.75 && code[0] == 1 && code[1] == 2 && code[2] == 3 ) resetTiles() ; // reset tiles and code   

    //if time is 100% reset   
    if(shapeTimer >= drawTime) resetTiles() ; // reset tiles and code   
    
    //if is square
    if(code[0] == 1 && code[1] == 4 && code[2] == 2  && code[3] == 3 && shapeStatus2 == false){
      shapeStatus = !shapeStatus;
      resetTiles() ;
    }
    //if is Z
    if(code[0] == 1 && code[1] == 2 && code[2] == 3  && code[3] == 4 && shapeStatus == false){
      zoomTimer = 150;
      shapeStatus2 = true;
       setFaceW = true;
      resetTiles() ;
    }
  }
  
  
  
  //Draw tiles
  for (tile p : tilelist ) {
     p.display();
  }   
}
//end draw tiles



//Press r to reset code debuggin..
void keyPressed() {
    if (key == CODED) {
      if (keyCode == CONTROL) {
        println("ctrl");
        shapeStatus2 = true;
      }
    }
    if(key == 'r' || key == 'R'){  
      resetTiles();
    }
}

void keyReleased() {
    if (key == CODED) {
      if (keyCode == CONTROL) {
        
        shapeStatus2 = false;
      }
    }
}

//Reset the tiles
void resetTiles() {
   for (int i = 0; i < rN*tN; i++){  
    code[i] = 0;
    codeCount = 0;
    shapeTimer= 0;
   }
  for (tile p : tilelist ) {
    if(p.hit) p.hit = false;
  } 
}




//Draw pointers
void drawPointers() {
  for (PointerDot p : pointerlist ) {
     p.display();
     p.update(x_, y_);
  } 
}
void detectFaces() {
  //check for multiple people  
  /*
  if(faceDetection){
    if(faceList.size() >=2)fill(255,0,0);
    else fill(0,255,0); 
  }else{
       fill(150,157,157);
  }
  rect(0,0,displayWidth -btnArea, displayHeight);
  
  */
  
  
  // Faces detected in this frame
  faces = opencv.detect();
  
  // Check if the detected faces already exist are new or some has disappeared. 
  
  // SCENARIO 1 
  // faceList is empty
  if (faceList.isEmpty()) {
    // Just make a Face object for every face Rectangle
    for (int i = 0; i < faces.length; i++) {
      println("+++ New face detected with ID: " + faceCount);
      faceList.add(new Face(faceCount, faces[i].x,faces[i].y,faces[i].width,faces[i].height));
      faceCount++;
    }
  
  // SCENARIO 2 
  // We have fewer Face objects than face Rectangles found from OPENCV
  } else if (faceList.size() <= faces.length) {
    boolean[] used = new boolean[faces.length];
    // Match existing Face objects with a Rectangle
    for (Face f : faceList) {
       // Find faces[index] that is closest to face f
       // set used[index] to true so that it can't be used twice
       float record = 50000;
       int index = -1;
       for (int i = 0; i < faces.length; i++) {
         float d = dist(faces[i].x,faces[i].y,f.r.x,f.r.y);
         if (d < record && !used[i]) {
           record = d;
           index = i;
         } 
       }
       // Update Face object location
       used[index] = true;
       f.update(faces[index]);
    }
    // Add any unused faces
    for (int i = 0; i < faces.length; i++) {
      if (!used[i]) {
        println("+++ New face detected with ID: " + faceCount);
        faceList.add(new Face(faceCount, faces[i].x,faces[i].y,faces[i].width,faces[i].height));
        faceCount++;
      }
    }
  
  // SCENARIO 3 
  // We have more Face objects than face Rectangles found
  } else {
    // All Face objects start out as available
    for (Face f : faceList) {
      f.available = true;
    } 
    // Match Rectangle with a Face object
    for (int i = 0; i < faces.length; i++) {
      // Find face object closest to faces[i] Rectangle
      // set available to false
       float record = 50000;
       int index = -1;
       for (int j = 0; j < faceList.size(); j++) {
         Face f = faceList.get(j);
         float d = dist(faces[i].x,faces[i].y,f.r.x,f.r.y);
         if (d < record && f.available) {
           record = d;
           index = j;
         } 
       }
       // Update Face object location
       Face f = faceList.get(index);
       f.available = false;
       f.update(faces[i]);
    } 
    // Start to kill any left over Face objects
    for (Face f : faceList) {
      if (f.available) {
        f.countDown();
        if (f.dead()) {
          f.delete = true;
        } 
      }
    } 
  }
  
  // Delete any that should be deleted
  for (int i = faceList.size()-1; i >= 0; i--) {
    Face f = faceList.get(i);
    if (f.delete) {
      faceList.remove(i);
    } 
  }
}

void captureEvent(Capture c) {
  c.read();
}
