/*
  Tile and position numbers and place are made by forloop
*/

class tile {
  int id;
  float tx, ty, tw, th;
  boolean hit = false;
  int padding = 0;
  int margin = 0;
  tile(int i_, float tX_, float tY_, float tW_, float tH_) {
   id = i_;
   tx = tX_+padding + margin;
   ty = tY_+padding + margin;
   tw = tW_ - margin*2;
   th = tH_- margin*2;
  }

  void display(){
           //int tX_, int tY_, int tW_, int tH_
          
       if(x_ > tx && x_ < tx+tw && y_ > ty && y_ < ty + th && hit == false){
           hit = true;
           code[codeCount] = id;
           codeCount ++; 
       }
       


        if(debug == true){
          if(hit){
            fill(0,0,0,100);  
          }else{
             fill(255,255,255, 100);
          } 
          rect(tx, ty, tw, th);
        }
  
        
        if(debug){    
          fill(255, 0,0);
          text(id, tx,ty+50);
        }
  
  }
}

