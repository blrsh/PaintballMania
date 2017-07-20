    //colors
    var c = [255, 255, 255]
    //controls
    var Left = 37;
    var Up = 38;
    var Right = 39;
    var Down = 40;
    var Space = 32;

    var W = 87;
    var A = 65;
    var S = 83;
    var D = 68;
    var F = 70;

    var Enter = 13;
    var key1 = 49;
    var key2 = 50;
    var G = 71;

    //Ships and Balls
    var speed = 5;
    var bspeed = 10;
    var s1 = new Ship(1);
    var s2 = new Ship(2);
    var b1 = [];
    var b2 = [];
    var ammo1 = 0;
    var ammo2 = 0;
    var dead1 = false;
    var dead2 = false;

    //info
    var WID = 1163;
    var HEI = 559;
    var startPos = 50;
    var shoot = false;
    var score1 = 0;
    var score2 = 0;

    //text
    var menu = "Welcome to PBM!\npress ENTER to start game" 



    function setup() {
      createCanvas(2560, 1440);
      for(var i = 0; i < 20; i++){
        b1[i] = new Ball(1);
        b2[i] = new Ball(2);
      }
      reset();
    }

    function draw() {
      background(c[0],c[1],c[2]);
      s1.show();
      s2.show();
      for(var i = 0; i < 20; i++){
        b1[i].show();
        b2[i].show(); 
      }
      txt();
      collision();
      //WID = window.innerWidth();
      //HEI = window.innerHeight();
    }

    function keyPressed(){
      if(!dead1){
        //player 1
        if(keyCode == Right){
          s1.dir(speed, 0);
        }
        if(keyCode == Left){
          s1.dir(-speed, 0);
        }
        if(keyCode == Up){
          s1.dir(0, -speed);
        }
        if(keyCode == Down){
          s1.dir(0, speed);

        }
        if(keyCode == Space){
          if(shoot){
            fire(1);
          }
        }
      }

      //setup
      if(keyCode == 13){//enter
        shoot = true;
          document.getElementById("content").style.display="none";   
        reset();
      }
      if(!dead2){
        //player 2
        if(keyCode == D){
          s2.dir(speed, 0);
        }
        if(keyCode == A){
          s2.dir(-speed, 0);
        }
        if(keyCode == W){
          s2.dir(0, -speed);
        }
        if(keyCode == S){
          s2.dir(0, speed);

        }
        if(keyCode == F){
          if(shoot){
            fire(2);
          }
        }
      }
    }

    function fire(id){
      if(id == 1){
        b1[ammo1].x = s1.x;
        b1[ammo1].y = s1.y;

        if(s1.xspeed == 0 && s1.yspeed == 0){
          b1[ammo1].xspeed = 0;
          b1[ammo1].yspeed = -2 * speed;
        }else{
          b1[ammo1].xspeed = 2 * s1.xspeed;
          b1[ammo1].yspeed = 2 * s1.yspeed;
        }

        if(ammo1 < 19){
          ammo1++;
        } else {
          ammo1 = 0;
        }
      }
      if(id == 2){
        b2[ammo2].x = s2.x;
        b2[ammo2].y = s2.y;

        if(s2.xspeed == 0 && s2.yspeed == 0){
          b2[ammo2].xspeed = 0;
          b2[ammo2].yspeed = 2 * speed;
        }else{
          b2[ammo2].xspeed = 2 * s2.xspeed;
          b2[ammo2].yspeed = 2 * s2.yspeed;
        }

        if(ammo2 < 19){
          ammo2++;
        } else {
          ammo2 = 0;
        }
      }
    }

    function txt(){
        //score1
        fill(255, 0, 51);
        textSize(30);
        text("Red: " + score1, 10, 30);
        
        //score2
        fill(22, 141, 255);
        textSize(30);
        text("Blue: " + score2, 10, 60);
    }

    function reset(){
      menu = "";
        for(var i = 0; i < 20; i++){
        b1[i].x = -10000
        b1[i].y = -10000;
        b2[i].x = -10000
        b2[i].y = -10000;
      }
      s1.x = window.innerWidth/2;
      s2.x = window.innerWidth/2;
      s1.y = window.innerHeight - startPos;
      s2.y = startPos;
      s1.xspeed = 0;
      s1.yspeed = 0;
      s2.xspeed = 0;
      s2.yspeed = 0;
      dead1 = false;
      dead2 = false;
      c = [255, 255, 255];
    }

    function collision(){
      for(var i = 0; i < 20; i++){

        if((s2.x + 10) >= b1[i].x && b1[i].x >= (s2.x - 10) && (s2.y + 10) >= b1[i].y && b1[i].y >= (s2.y - 10)){
           //blue tank hit by red bullet
            score1++;
            document.getElementById("content").style.display="block";
            document.getElementById("content").style.background="#E55BBE";
            document.getElementById("main").innerHTML = "Red Wins Round " + (score1+score2) + "!<br/><button class=\"btn b1\" id=\"button\" onClick=\"start()\">Play Next Round \(ENTER\)</button>";
           dead2 = true;
           s2.x = 10000;
           s2.y = 10000;
           s2.xspeed = 0;
           s2.yspeed = 0;
           c = [255, 102, 211]
         }
         if((s1.x + 10) >= b2[i].x && b2[i].x >= (s1.x - 10) && (s1.y + 10) >= b2[i].y && b2[i].y >= (s1.y - 10)){
        //red tank hit by blue bullet
             score2++;
        document.getElementById("content").style.display="block";
        document.getElementById("content").style.background="#57DEE5";
        document.getElementById("main").innerHTML = "Blue Wins Round " + (score1+score2) + "!<br/><button class=\"btn b2\" onClick=\"start()\">Play Next Round \(ENTER\)</button>";
        dead1 = true;
        s1.x = 10000;
        s1.y = 10000;
        s1.xspeed = 0;
        s1.yspeed = 0;
        c = [96, 247, 255];
        }
    }  
}

window.addEventListener("resize", function(){reset()}, true);

function start(){
    shoot = true;
    document.getElementById("content").style.display="none";   
    reset(); 
}