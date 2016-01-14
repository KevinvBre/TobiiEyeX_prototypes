/**
 * Which Face Is Which
 * Daniel Shiffman
 * http://shiffman.net/2011/04/26/opencv-matching-faces-over-time/
 *
 * Modified by Jordi Tost (call the constructor specifying an ID)
 * @updated: 01/10/2014
 */

class Face {
  // A Rectangle
  Rectangle r;
  Rectangle p;
  
  // Am I available to be matched?
  boolean available;
  
  // Should I be deleted?
  boolean delete;
  
  // How long should I live if I have disappeared?
  int timer = 10;
  
  // Assign a number to each face
  int id;
  int faceW = 0 ;
  // Make me
  Face(int newID, int x, int y, int w, int h) {
    r = new Rectangle(x,y,w,h);
    p = new Rectangle(x,y,10,h);
    available = true;
    delete = false;
    id = newID;
  }
  
  
  

  // Show me
  void display() {
    fill(0,0,255,timer);
    stroke(0,0,255);
    
    float margin = ((displayWidth - camW)/2)/scl;
    float mirrorX = camW/scl - r.x - r.width;  
    float xBonus = map(mirrorX, 0, 240, -margin*4, margin*4);
    float yBonus = map(r.y, 40, 150, -margin*2, margin*2);
    faceW = r.width;
   // rect(mirrorX+xBonus ,  r.y+yBonus,r.width, r.height);
  }

  // Give me a new location / size
  // Oooh, it would be nice to lerp here!
  void update(Rectangle newR) {
    r = (Rectangle) newR.clone();
  }

  // Count me down, I am gone
  void countDown() {
    timer--;
  }

  // I am deed, delete me
  boolean dead() {
    if (timer < 0) return true;
    return false;
  }
}

