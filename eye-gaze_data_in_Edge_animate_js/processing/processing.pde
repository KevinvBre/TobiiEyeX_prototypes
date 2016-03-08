import gazetrack.*;
GazeTrack gt;

JSONObject json;

float x=  0;
float y=  0;
void setup()
{
rectMode(CENTER);
  size(200,200);
  gt = new GazeTrack(this);
  fill(255);

   json = new JSONObject();
 

   frameRate(10);

}

void draw(){
  background(125);

  x = gt.getGazeX();
  y = gt.getGazeY();
 


  
  json();
}


void json() {
 
   json.setFloat("1", x);
      json.setFloat("2", y);
    saveJSONObject(json, "data/new.json");

}
