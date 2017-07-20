function Ship(id) {
  //positioning
  this.x = (window.innerWidth/2);
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.startPos = 50;
  this.wid = 20;
  var c = [0, 0, 0]
  
  
  if(id == 1){
    this.y = window.innerWidth - this.startPos;
    c = [255, 0, 51]
  } else if(id == 2){
    this.y = this.startPos;
    c = [22, 141, 255]
  }
  this.show = function(){
    this.manager();
    fill(c[0], c[1], c[2]);
    ellipse(this.x, this.y, this.wid, this.wid);
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.manager = function(){
    //manages location of Ship.
    if(this.x != 10000){
      if(this.x > window.innerWidth + (this.wid/2)){
        this.x = -this.wid/2;
      }
      if(this.x < -this.wid/2){
        this.x = window.innerWidth + (this.wid/2);
      }
      
      if(this.y > window.innerHeight + (this.wid/2)){
        this.y = 0;
      }
      if(this.y < -this.wid/2){
        this.y = window.innerHeight + (this.wid/2);
      }
    }
  }
}