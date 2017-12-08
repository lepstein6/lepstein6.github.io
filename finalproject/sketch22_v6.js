$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/6_TUEM_RunningRecord.csv",
        dataType: "text",
        success: function(data) {parseData(data);}
     });
});

// this table will contain the numbers and actual data



// var margin = 150;
// this is an array that will contain all the data in form of javascript objects
var time;
var sensorReading;
var sensors = []

Cwidth = 900;
Cheight = 690;

var initx = 75;
var inity = 50;
var dx = 30;
var dy = 30;
var DX = 120;
var DY = 120;

// Triangle Coordinates
// 1st corner 
var x1 = 175;
var y1 = 166;

var myCar;

var index = 0;

var Cars = [];
var currentCar;

var N = 38;
var lines = 212;

 var t_millis;





var block;
var triNum;

var t_dx = 4*dx;
var t_dy = 4*dy;

var t = 0 ;
var t_now = 0;

var img1;
var img2;


function parseData(data){
// print(table.getRowCount() + " total rows in table");
//  print(table.getColumnCount() + " total columns in table");

    var allTextLines = data.split(/\r\n|\n/);

    for (var i=0; i<lines; i++) {
      var row = allTextLines[i].split(',');
      for (var j = 0; j<N;j++){
        sensorReading = row[j];
        sensors.push(sensorReading);
      }
    }
    console.log('parsed!');
  }





var q = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    T1 = new p.tri(1,1);
    T2 = new p.tri(1,2);
    T3 = new p.tri(1,3);
    T4 = new p.tri(1,4);

    T5 = new p.tri(2,1);
    T6 = new p.tri(2,2);
    T7 = new p.tri(2,3);
    T8 = new p.tri(2,4) ;

    T9 = new p.tri(3,1);
    T10 = new p.tri(3,2);
    T11 = new p.tri(3,3);
    T12 = new p.tri(3,4);

    T13 = new p.tri(4,1);
    T14 = new p.tri(4,2);
    T15 = new p.tri(4,3);
    T16 = new p.tri(4,4) ;

    T17 = new p.tri(5,1);
    T18 = new p.tri(5,2);
    T19 = new p.tri(5,3);
    T20 = new p.tri(5,4);

    T21 = new p.tri(6,1);
    T22 = new p.tri(6,2);
    T23 = new p.tri(6,3);
    T24 = new p.tri(6,4);

    T25 = new p.tri(7,1);
    T26 = new p.tri(7,2);
    T27 = new p.tri(7,3);
    T28 = new p.tri(7,4);


    T29 = new p.tri(8,1);
    T30 = new p.tri(8,2);
    T31 = new p.tri(8,3);
    T32 = new p.tri(8,4);


    T33 = new p.tri(9,1);
    T34 = new p.tri(9,2);
    T35 = new p.tri(9,3);
    T36 = new p.tri(9,4);


    Tris = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, 
    T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, 
    T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36];

    console.log("Triangles!");
    

    t_millis = p.round(p.millis());


    p.fill(252,210,143);
    p.ellipse(Cwidth/2-100, Cheight/2, 600,600);

    p.stroke(0,0,0);
    p.strokeWeight(2);
    p.noFill();
    p.rect(x1-1,y1-1,362,362);

    img1 = p.loadImage("checkerboard.png");
    img2 = p.loadImage("M.png");
    img3 = p.loadImage("Slash.png"); // different?
    img4 = p.loadImage("ul.png");
    // img5 = p.loadImage("Slash.png"); //different?
    img6 = p.loadImage("stary.png");
    // img7 = p.loadImage("diagonal.png");
    img8 = p.loadImage("Diagonal.png");// different?
    img9 = p.loadImage("Random.png");
    img10= p.loadImage("ZigZag.png");
    img11 = p.loadImage("square.png");
    img12 = p.loadImage("X.png");

  }




  p.draw = function()
  {


    p.noFill();
    p.noStroke();
    // p.rect(50,50,Cwidth-100, Cheight-100);

    // currentTri = Tris[0];
    // currentTri.display();
    // currentTri.light();


    // console.log('disp');


    for(var r = 0; r<(N-2); r++){
      currentTri = Tris[r];
      currentTri.light();
      currentTri.display();
    }




    if (t_millis+500<p.millis()){
      t_millis = p.round(p.millis());
      // console.log(t_millis);
      // console.log(index);

      if (p.keyIsPressed===true){
        index = index;
        if(p.mouseIsPressed  ===true){
          index = index-1;
        }
      }
      else if (index<lines && p.keyIsPressed ===false){
        index = index + 1;
        // print(index+1);
      }
      else{
        // print ('Restarting');
        index = 0;
        t = 0;
      }


      // COVERING UP TIME
    p.noStroke();
    p.fill(252,210,143);
    p.rect(250,125, 200, 35);

    p.fill(0,0,0);
    // p.textAlign(CENTER);
    p.textSize(18);
    // p.text('Pattern:  '+ sensors[index*N+36], Cwidth/2-130, Cheight-10);

    var n1 = p.float(sensors[(index-1)*N+37]);
    var n2 = p.float(sensors[(index)*N+37]);
      // console.log(n1);
      // console.log(n2);



      if (n2 < n1){
        t = t+n1;
        // console.log('why ' + t);
      }

      // console.log(n1);

      t_now = n2 + t;
      t_now = p.round(100*t_now)/100;

      p.text(t_now + ' s', Cwidth/2-120, 150);

    }

 
    var hi = 25;

    // Pattern on display
    if (sensors[index*N+36] == 1){
      p.image(img1,650,hi,200,200);
    }
    if (sensors[index*N+36] == 2){
      p.image(img2,650,hi,200,200);
    }
    if (sensors[index*N+36] == 3){
      p.image(img3,650,hi,200,200);
    }
    if (sensors[index*N+36] == 4){
      p.image(img4,650,hi,200,200);
    }
    // if (sensors[index*N+36] == 5){
    //   p.image(img5,650,hi,200,200);
    // }
    if (sensors[index*N+36] == 6){
      p.image(img6,650,hi,200,200);
    }
    // if (sensors[index*N+36] == 7){
    //   p.image(img7,650,hi,200,200);
    // }
    if (sensors[index*N+36] == 8){
      p.image(img8,650,hi,200,200);
    }
    if (sensors[index*N+36] == 9){
      p.image(img9,650,hi,200,200);
    }
    if (sensors[index*N+36] == 10){
      p.image(img10,650,hi,200,200);
    }
    if (sensors[index*N+36] == 11){
      p.image(img11,650,hi,200,200);
    }
    if (sensors[index*N+36] == 12){
      p.image(img12,650,hi,200,200);
    }

    p.noStroke();
    p.fill(255);
    p.rect(715,hi+202,70,30);
    p.fill(0);
    p.textSize(14);
    p.text("PROMPT", 720,hi+220);

    p.noFill();
    p.stroke(0);
    p.strokeWeight(1);
    p.rect(650,hi,200,200);
    p.rect(1,1,Cwidth-2,Cheight-2);


  }

 

  p.tri = function(block, triNum){
    

    var c = block;
    var r = 1;
    if (block>3 && block<7){
      var c = block - 3;
      r = 2; 
    }
    if (block>6){
      c = block - 6;
      r = 3;
    }

    this.x1 = x1+(c-1)*DX;
    this.x2 = x1+t_dx+(c-1)*DX;
    this.y1 = y1+(r-1)*DY;
    this.y2 = y1+t_dy+(r-1)*DY;
    this.xcen = x1+t_dx/2+(c-1)*DX;
    this.ycen = y1+t_dy/2+(r-1)*DY;

    this.c = p.color(255,0,0);



    this.light = function(){

      
      var pattern = [sensors[index*N+4*(block-1)],sensors[index*N+1+4*(block-1)],sensors[index*N+2+4*(block-1)],sensors[index*N+3+4*(block-1)]]
      // console.log(pattern[0]);


      // All White
      if (pattern[0] ==1 && pattern[1] ==1 && pattern[2] ==1 && pattern[3] ==1)
      {
        this.c = p.color(255,0,0);
      }

      // All Red
      else if (pattern[0] ==0 && pattern[1] ==1 && pattern[2] ==1 && pattern[3] ==0 || pattern[0] ==1 && pattern[1] ==0 && pattern[2] ==0 && pattern[3] ==1)
      {
        this.c = p.color(255,255,255);
      }

      //Upper Right Red
      else if (pattern[0] ==1 && pattern[1] ==0 && pattern[2] ==1 && pattern[3] ==0)
      {
        if (triNum ==1){
          this.c = p.color(255,0,0);
        }
        if (triNum ==2){
          this.c = p.color(255,0,0);
        }
        if (triNum ==3){
          this.c = p.color(255,255,255);
        }
        if (triNum ==4){
          this.c = p.color(255,255,255);
        }
      }

      // Upper Left Red
      else if (pattern[0] ==1 && pattern[1] ==1 && pattern[2] ==0 && pattern[3] ==0)
      {
        if (triNum ==1){
          this.c = p.color(255,0,0);
        }
        if (triNum ==2){
          this.c = p.color(255,255,255);
        }
        if (triNum ==3){
          this.c = p.color(255,255,255);
        }
        if (triNum ==4){
          this.c = p.color(255,0,0);
        }
      }

      // Bottom Right Red
      else if (pattern[0] ==0 && pattern[1] ==0 && pattern[2] ==1 && pattern[3] ==1)
      {
        if (triNum ==1){
          this.c = p.color(255,255,255);
        }
        if (triNum ==2){
          this.c = p.color(255,0,0);
        }
        if (triNum ==3){
          this.c = p.color(255,0,0);
        }
        if (triNum ==4){
          this.c = p.color(255,255,255);
        }
      }
       // Bottom Left Red
      else if (pattern[0] ==0 && pattern[1] ==1 && pattern[2] ==0 && pattern[3] ==1)
      {
        if (triNum ==1){
          this.c = p.color(255,255,255);
        }
        if (triNum ==2){
          this.c = p.color(255,255,255);
        }
        if (triNum ==3){
          this.c = p.color(255,0,0);
          
        }
        if (triNum ==4){
          this.c = p.color(255,0,0);
        }
      }


        
      else{
        // console.log(pattern);
        this.c = p.color(0,0,0);
      }
    }
      
    this.display = function(){

      // p.noStroke();
      if (triNum == 1) {
        // p.stroke(this.c)
        p.fill(this.c)
        p.triangle(this.x1,this.y1, this.x2, this.y1, this.xcen, this.ycen);
      }
      if (triNum == 2) {
        // p.stroke(this.c)
        p.fill(this.c)
        p.triangle(this.x2,this.y1, this.x2, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 3) {
        // p.stroke(this.c)
        p.fill(this.c)
        p.triangle(this.x2,this.y2, this.x1, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 4) {
        // p.stroke(this.c)
        p.fill(this.c)
        p.triangle(this.x1,this.y2, this.x1, this.y1, this.xcen, this.ycen);
      }
    }
  }


}

var myp5 = new p5(q, 'c3');






