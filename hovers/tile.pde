/*
  Tile and position numbers and place are made by forloop
*/

class tile {
  int id;
  float tx, ty, tw, th;
  float txn, tyn, twn, thn;

  PImage img;
  int z = 0;
  float scl;
  float factor = 0;
  
  tile(int i_, float tX_, float tY_, float tW_, float tH_) {
   id = i_;
   tx = tX_;
   ty = tY_;
   tw = tW_;
   th = tH_;
   
   txn = tX_;
   tyn = tY_;
   twn = tW_;
   thn = tH_;
   
   
    img = loadImage("fotos"+id+".png");
    scl = 1;
  }

  void display(){
           //int tX_, int tY_, int tW_, int tH_
      
      //show it on top and scale a bit. // was kinda nasty to make    
      if(x_ > tx && x_ < tx+tw && y_ > ty && y_ < ty + th){
        z=1;
        if(factor < 0.2)factor += 0.01;
        scl = 1+factor;
        txn = tx - twn*(factor/2);
        tyn = ty - thn*(factor/2);
        
     }else{
        if(factor >= 0)factor -= 0.015;
        z=0;
        scl = 1;
        txn = tx;
        tyn = ty;
       }
       
       pushMatrix();
         translate(txn,tyn,z);
         scale(scl);
         image(img, 0 ,0, tw,th);
       popMatrix();
  
  }
}

