/*
  Face rectangle and position
*/

class PointerDot {
  // Make face
  float curX, curY;
  float speed;
  PointerDot(int i_) {
    speed = 0.25 + (i_)*0.15;
  }
  
 
  
  // Show me
  void update(float x_, float y_){
    curX += (x_ - curX)/speed;
    curY += (y_ - curY)/speed;
  }
  
  void display() {
    stroke(224,225,10);
    fill(224,0,10);
    ellipse(curX , curY, 5, 5);
  }
  
     
  
  
}

