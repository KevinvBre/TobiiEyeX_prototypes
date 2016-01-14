/*
  Tile and position numbers and place are made by forloop
*/

class tile {

  int scl = 1;
  int id,tx, ty, tw, th;
  boolean hit = false;
  int margin = 25;
  float sizeF =1;
  
  int tyTemp;
  
  float hoverTimer = 1;
   
  //array the images       
  PImage[] images = new PImage[5];
  PImage[] imagesH = new PImage[5];
  
  tile(int i_, int tX_, int tY_, int tW_, int tH_) {
   id = i_;
   tx = tX_;
   ty = tY_ - margin * i_;
   tw = tW_;
   th = tH_;
   tyTemp = ty; // for reset memory
   //Load assets
   for ( int i = 0; i< images.length; i++ ) {
     imagesH[i] = loadImage( i + ".png" );  
    }
   for ( int i = 0; i< imagesH.length; i++ ) {
     images[i] = loadImage( i + "h.png" );   
    }
    
  }
  //is used to reset shapes and size if not hovered
  void reset(){
    
   //if(ty < 900){
     ty = 950;
  // }
   //control size
    if(sizeF > 1){
     sizeF *= 0.9;
    }
            
  }  
    
  void display(){
       strokeWeight(0);
      
      
      if(ty > tyTemp){
        ty += (tyTemp - ty)/10;
      }

       // println(buttonHover);
    
       //accounts for rectmode center
       if(x_ > tx-tw/2 && x_ < tx+tw/2 && y_ > ty - th/2 && y_ < ty  + th/2 && hit == false){
           hit = true;  
           code[0] = id;
       }
       //reset hover
       if(code[0] != id){
         hit = false;
         hoverTimer = 1;
       }
       // if timer = max
     
       
          //control hover
          fill(255); 
          if(hit){    
            
            //control size
            if(sizeF < 2){
             sizeF *= 1.1;
            }
            //hover time
            if(hoverTimer< 50)  hoverTimer*=1.05;
            
            
             //control depth  
            pushMatrix();                       
              translate(0,0,10); 
               
              ellipse(tx, ty , tw*sizeF, th*sizeF);
              //hover animation
           
              fill(33,134,250, 4.5*hoverTimer);
              ellipse(tx, ty , tw*sizeF, th*sizeF);
              
              //icon
              image(images[id], tx-35, ty-35);
            popMatrix();
          }else{
            
            //control size
            if(sizeF > 1){
             sizeF *= 0.9;
            }
            
             //control depth  
             pushMatrix();
              translate(0,0,1);                     // depth
              ellipse(tx, ty , tw*sizeF, th*sizeF); // shape
              image(imagesH[id], tx-35, ty-35);     // icon
             popMatrix();
          } //end hover
        
         
       if(debug){
          fill(0);
        //  text(id, tx-100,ty+50);
        }
  
  }
}

