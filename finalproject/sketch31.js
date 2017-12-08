$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/runningRecordUVW_test.csv",
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

Cwidth = 400;
Cheight = 400;

var initx = 75;
var inity = 50;
var dx = 30;
var dy = 30;
var DX = 120;
var DY = 120;

// Triangle Coordinates
// 1st corner 
var x1 = 20;
var y1 = 20;

var myCar;

var index = 0;

var Cars = [];
var currentCar;

var N = 38;
var lines = 126;





var block;
var triNum;

var t_dx = 4*dx;
var t_dy = 4*dy;

var t = 0 ;
var t_now = 0;



var Xdim = 190;
var Ydim = 200;
var o = 5;
var ox=1.5*Xdim;
var oy=2*Ydim;



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

// Static 3D trimetric 1 block code
var m = function(p)
{
  p.setup = function()
  {

    var Xdim = 190;
    var Ydim = 200;
    var o = 5;
    p.createCanvas(Xdim+2*o,Ydim+2*o); 
    p.background(255);

    p.stroke(0);
    p.fill(255);
    p.quad(o,Ydim/4+o, Xdim/2+o,o, Xdim+o,Ydim/4+o,Xdim/2+o, Ydim/2+o);
    p.quad(Xdim+o,Ydim/4+o, Xdim+o, 3*Ydim/4+o, Xdim/2+o,Ydim+o,Xdim/2+o, Ydim/2+o);
    p.fill(255,0, 0);
    p.quad(o,Ydim/4+o, o, 3*Ydim/4+o, Xdim/2+o,Ydim+o,Xdim/2+o, Ydim/2+o);
    p.triangle(o,Ydim/4+o, Xdim/2+o,o, Xdim+o,Ydim/4+o);
    console.log("static");
  }
}
var myp5 = new p5(m, 'c3'); 



var img
// static platform
var plat = function(p)
{
  p.setup = function()
  {

	p.createCanvas(200,200);
    p.background(100);

  	img = p.loadImage("Platform.png");
    
  }

  p.draw = function(){
  	p.image(img,-50,-38,290,290);

  }
}

var myp5 = new p5(plat, 'c6'); 


var img2
// static platform
var prompt = function(p)
{
  p.setup = function()
  {

	p.createCanvas(200,200);
    p.background(255);

  	img2 = p.loadImage("ZigZag.png");
    
  }

  p.draw = function(){
  	p.image(img2,10,10,180,180);
  	
  	p.strokeWeight(2);
  	p.stroke(0);
  	p.noFill();
  	p.rect(10,10,180,180)

  }
}

var myp5 = new p5(prompt, 'c7'); 






//Updating 3D trimetric 9 block code



var q = function(p){
  p.setup = function()
  {

    p.createCanvas(Xdim*4+2*o-10,Ydim*1.6+2*o);  
    // p.myCar4 = new Car(initx,inity,3);
    // p.myCar2 = new Car(initx+dx,inity+dy,1);
    // 
    // p.myCar3 = new Car(initx-dx,inity+dy,2);
    console.log(Xdim*4+2*o-10);

    // Cars = [myCar, myCar2, myCar3, myCar4];
    p.background(255);

    p.fill(0)
    p.triangle(720,0,760,20,720,40);
    p.triangle(40,0,0,20,40,40);

    myCar4 = new p.Car(95+190*3/8,175-100*1/8,3); // bottom left
    myCar2 = new p.Car(95+190*5/8,175-100*1/8,1); // bottom right
    myCar = new p.Car(95+190*5/8,175+100*1/8,0); // top right
    myCar3 = new p.Car(95+190*3/8,175+100*1/8,2); // top left
    console.log('hi');

    myCar8 = new p.Car(95+190*3/8+190/2,175-100*1/8-100/2,7);
    myCar6 = new p.Car(95+190*5/8+190/2,175-100*1/8-100/2,5);
    myCar5 = new p.Car(95+190*5/8+190/2,175+100*1/8-100/2,4);
    myCar7 = new p.Car(95+190*3/8+190/2,175+100*1/8-100/2,6);

    myCar12 = new p.Car(95+190*3/8+190,175-100*1/8-100,11);
    myCar10 = new p.Car(95+190*5/8+190,175-100*1/8-100,9);
    myCar9 = new p.Car(95+190*5/8+190,175+100*1/8-100,8);
    myCar11 = new p.Car(95+190*3/8+190,175+100*1/8-100,10);

    myCar16 = new p.Car(95+190*3/8+190/2,175-100*1/8+100/2,15);
    myCar14 = new p.Car(95+190*5/8+190/2,175-100*1/8+100/2,13);
    myCar13 = new p.Car(95+190*5/8+190/2,175+100*1/8+100/2,12);
    myCar15 = new p.Car(95+190*3/8+190/2,175+100*1/8+100/2,14);

    myCar20 = new p.Car(95+190*3/8+190,175-100*1/8,19);
    myCar18 = new p.Car(95+190*5/8+190,175-100*1/8,17);
    myCar17 = new p.Car(95+190*5/8+190,175+100*1/8,16);
    myCar19 = new p.Car(95+190*3/8+190,175+100*1/8,18);

    myCar24 = new p.Car(95+190*3/8+3*190/2,175-100*1/8-100/2,23);
    myCar22 = new p.Car(95+190*5/8+3*190/2,175-100*1/8-100/2,21);
    myCar21 = new p.Car(95+190*5/8+3*190/2,175+100*1/8-100/2,20);
    myCar23 = new p.Car(95+190*3/8+3*190/2,175+100*1/8-100/2,22);

    myCar28 = new p.Car(95+190*3/8+190,175-100*1/8+100,27);
    myCar26 = new p.Car(95+190*5/8+190,175-100*1/8+100,25);
    myCar25 = new p.Car(95+190*5/8+190,175+100*1/8+100,24);
    myCar27 = new p.Car(95+190*3/8+190,175+100*1/8+100,26);

    myCar32 = new p.Car(95+190*3/8+3*190/2,175-100*1/8+100/2,31);
    myCar30 = new p.Car(95+190*5/8+3*190/2,175-100*1/8+100/2,29);
    myCar29 = new p.Car(95+190*5/8+3*190/2,175+100*1/8+100/2,28);
    myCar31 = new p.Car(95+190*3/8+3*190/2,175+100*1/8+100/2,30);

    myCar36 = new p.Car(95+190*3/8+2*190,175-100*1/8,35);
    myCar34 = new p.Car(95+190*5/8+2*190,175-100*1/8,33);
    myCar33 = new p.Car(95+190*5/8+2*190,175+100*1/8,32);
    myCar35 = new p.Car(95+190*3/8+2*190,175+100*1/8,34);

    Cars = [myCar, myCar2, myCar3, myCar4, myCar5, myCar6, myCar7, myCar8, myCar9, myCar10, myCar11, myCar12,
    myCar13, myCar14, myCar15, myCar16, myCar17, myCar18, myCar19, myCar20, myCar21, myCar22, myCar23, myCar24,
    myCar25, myCar26,myCar27,myCar28,myCar29,myCar30,myCar31,myCar32,myCar33,myCar34,myCar35,myCar36];


    p.noFill();
    p.stroke(0,0,0);
    p.quad(95,175,95+Xdim/2,175-Ydim/4,95+Xdim,175,95+Xdim/2,175+Ydim/4);
    p.quad(95+190,175,95+Xdim/2+190,175-Ydim/4,95+Xdim+190,175,95+Xdim/2+190,175+Ydim/4);
    p.quad(95+2*190,175,95+Xdim/2+2*190,175-Ydim/4,95+Xdim+2*190,175,95+Xdim/2+2*190,175+Ydim/4);
    p.quad(95+190/2,175-100/2,95+Xdim/2+190/2,175-Ydim/4-100/2,95+Xdim+190/2,175-100/2,95+Xdim/2+190/2,175+Ydim/4-100/2);
    p.quad(95+1.5*190,175-100/2,95+Xdim/2+1.5*190,175-Ydim/4-100/2,95+Xdim+1.5*190,175-100/2,95+Xdim/2+1.5*190,175+Ydim/4-100/2);
    p.quad(95+190/2,175+100/2,95+Xdim/2+190/2,175-Ydim/4+100/2,95+Xdim+190/2,175+100/2,95+Xdim/2+190/2,175+Ydim/4+100/2);
    p.quad(95+1.5*190,175+100/2,95+Xdim/2+1.5*190,175-Ydim/4+100/2,95+Xdim+1.5*190,175+100/2,95+Xdim/2+1.5*190,175+Ydim/4+100/2);


  }

  p.draw = function(){
    
    // p.rect(50,50,Cwidth-100, Cheight-100);

    // for(var r = 0; r<(N-2); r++){
    //   currentCar = Cars[r];
    //   currentCar.light();
    //   currentCar.display();
    // }

    // use xDim = 190, yDim=200 to iterate
    p.noFill();
    p.stroke(0,0,0);
    p.strokeWeight(1);
    p.quad(95,175,380,25,665,175,380,325);



    for(var r = 0; r<(N-2); r++){
      currentCar = Cars[r];
      currentCar.light();
      currentCar.display();
    }   

    // p.stroke(0,0,0);
    // //block 1
    // // p.ellipse(95+190*3/8,175-100*1/8,15,10);
    // p.ellipse(95+190*5/8,175-100*1/8,15,10);
    // p.ellipse(95+190*3/8,175+100*1/8,15,10);
    // p.ellipse(95+190*5/8,175+100*1/8,15,10);
    // //block 2
    // p.ellipse(95+190*3/8+190/2,175-100*1/8-100/2,15,10);
    // p.ellipse(95+190*5/8+190/2,175-100*1/8-100/2,15,10);
    // p.ellipse(95+190*3/8+190/2,175+100*1/8-100/2,15,10);
    // p.ellipse(95+190*5/8+190/2,175+100*1/8-100/2,15,10);
    // //block 3
    // p.ellipse(95+190*3/8+190,175-100*1/8-100,15,10);
    // p.ellipse(95+190*5/8+190,175-100*1/8-100,15,10);
    // p.ellipse(95+190*3/8+190,175+100*1/8-100,15,10);
    // p.ellipse(95+190*5/8+190,175+100*1/8-100,15,10);
    // //block 4
    // p.ellipse(95+190*3/8+190/2,175-100*1/8+100/2,15,10);
    // p.ellipse(95+190*5/8+190/2,175-100*1/8+100/2,15,10);
    // p.ellipse(95+190*3/8+190/2,175+100*1/8+100/2,15,10);
    // p.ellipse(95+190*5/8+190/2,175+100*1/8+100/2,15,10);
    // // block 5
    // p.ellipse(95+190*3/8+190,175-100*1/8,15,10);
    // p.ellipse(95+190*5/8+190,175-100*1/8,15,10);
    // p.ellipse(95+190*3/8+190,175+100*1/8,15,10);
    // p.ellipse(95+190*5/8+190,175+100*1/8,15,10);
    // //block 6
    // p.ellipse(95+190*3/8+3*190/2,175-100*1/8-100/2,15,10);
    // p.ellipse(95+190*5/8+3*190/2,175-100*1/8-100/2,15,10);
    // p.ellipse(95+190*3/8+3*190/2,175+100*1/8-100/2,15,10);
    // p.ellipse(95+190*5/8+3*190/2,175+100*1/8-100/2,15,10);
    // //block 7
    // p.ellipse(95+190*3/8+190,175-100*1/8+100,15,10);
    // p.ellipse(95+190*5/8+190,175-100*1/8+100,15,10);
    // p.ellipse(95+190*3/8+190,175+100*1/8+100,15,10);
    // p.ellipse(95+190*5/8+190,175+100*1/8+100,15,10);
    // //block 8
    // p.ellipse(95+190*3/8+3*190/2,175-100*1/8+100/2,15,10);
    // p.ellipse(95+190*5/8+3*190/2,175-100*1/8+100/2,15,10);
    // p.ellipse(95+190*3/8+3*190/2,175+100*1/8+100/2,15,10);
    // p.ellipse(95+190*5/8+3*190/2,175+100*1/8+100/2,15,10);
    // // block 5
    // p.ellipse(95+190*3/8+2*190,175-100*1/8,15,10);
    // p.ellipse(95+190*5/8+2*190,175-100*1/8,15,10);
    // p.ellipse(95+190*3/8+2*190,175+100*1/8,15,10);
    // p.ellipse(95+190*5/8+2*190,175+100*1/8,15,10);
   

  }

  p.Car = function(xpos, ypos,dot) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.diam = 15;

    this.c = p.color(0, 0, 0);
   
    // // light up method

    this.light = function(){
      if (sensors[index*N+dot] == 1){
        p.noStroke();
        this.c = p.color(0,0,0);
      }
      else {
        p.stroke(0,0,0);
        p.strokeWeight(1);
        this.c = p.color(255,255,255);
      }
    }
   
  //   // display method
    this.display = function() 
    {

      // body of the car
      p.fill(this.c);
      p.ellipse(this.xpos, this.ypos, 15, 10);
    }


  }

}

var myp5 = new p5(q, 'c5');



var m = function(p)
{
  p.setup = function()
  {

    p.createCanvas(Xdim*4+2*o-10,Ydim*2+2*o); 
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
    T20 = new p.tri(5,4) ;

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


    console.log("tri tri tri");
    // p.quad(Xdim+o,Ydim/4+o, Xdim+o, 3*Ydim/4+o, Xdim/2+o,Ydim+o,Xdim/2+o, Ydim/2+o);
    // p.fill(255,0, 0);
    // p.quad(o,Ydim/4+o, o, 3*Ydim/4+o, Xdim/2+o,Ydim+o,Xdim/2+o, Ydim/2+o);
    // p.triangle(o,Ydim/4+o, Xdim/2+o,o, Xdim+o,Ydim/4+o);
  }


  p.draw = function(){
    p.noFill();
    p.noStroke();

    for(var r = 0; r<(N-2); r++){
      currentTri = Tris[r];
      currentTri.light();
      currentTri.display();
    }       



  }



  p.tri = function(block, triNum){

    this.c = p.color(255,0,0);

    this.light = function(){
      
      // console.log('lighting');
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
    var ycorrect = 195;
    //BLOCK
    if (block ==7){
      ox=1.5*Xdim;
      oy=2*Ydim-ycorrect;
      p.noStroke();
      p.fill(this.c)
      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
         p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
     
   
      p.stroke(0);
      p.fill(100);
      p.quad(Xdim+ox,Ydim/4+oy, Xdim+ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);

      p.quad(ox,Ydim/4+oy, ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);
    
      p.stroke(0);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);

    }
    
  //   // //BLOCK
    else if (block == 4){

      ox = 1.5*Xdim-Xdim/2;
      oy = 2*Ydim-Ydim/4-ycorrect;

      p.noStroke();
      p.fill(this.c);
      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
     
      p.stroke(0);
      p.fill(100);
      p.quad(ox,Ydim/4+oy, ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);
    }

  //   // //BLOCK


    else if (block == 1){
      ox = 1.5*Xdim-Xdim;
      oy = 2*Ydim-Ydim/2-ycorrect;
      p.noStroke();
      p.fill(this.c);

      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
     }
      p.stroke(0);
      p.fill(100);
      p.quad(ox,Ydim/4+oy, ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);


      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);
    }
      
      
  //   // //BLOCK

    else if (block == 8){
      ox = 1.5*Xdim+Xdim/2;
      oy = 2*Ydim-Ydim/4-ycorrect;
      p.noStroke();
      p.fill(this.c);
    
      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);

      }

      p.stroke(0);
      p.fill(100);
      p.quad(Xdim+ox,Ydim/4+oy, Xdim+ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);
    }
  
  //   // //BLOCK

    else if (block ==9){
      ox = 1.5*Xdim+Xdim;
      oy = 2*Ydim-Ydim/2-ycorrect;

      p.noStroke();
      p.fill(this.c);

      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }

      p.stroke(0);
      p.fill(100);
      p.quad(Xdim+ox,Ydim/4+oy, Xdim+ox, 3*Ydim/4+oy, Xdim/2+ox,Ydim+oy,Xdim/2+ox, Ydim/2+oy);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);

    }

    

  //   //BLOCK

    else if (block == 5){
      ox = 1.5*Xdim;
      oy = 2*Ydim-Ydim/2-ycorrect;
      p.noStroke();
      p.fill(this.c);
      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
          p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }

      p.stroke(0);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);


    }

  //   // //BLOCK

    else if (block == 2 ){
      ox = 1.5*Xdim-Xdim/2;
      oy = 2*Ydim-3*Ydim/4-ycorrect;
      p.noStroke();
      p.fill(this.c);

      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy); 
      }

      p.stroke(0);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);

    }


  //   // //BLOCK

    else if (block == 6){
      ox = 1.5*Xdim+Xdim/2;
      oy = 2*Ydim-3*Ydim/4-ycorrect;

      p.noStroke();
      p.fill(this.c);

      if (triNum == 1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum == 2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum == 3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum == 4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }

      p.stroke(0);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);

    }

  //   //BLOCK

    else if (block == 3){
      ox = 1.5*Xdim;
      oy = 2*Ydim-Ydim-ycorrect;

      p.noStroke();
      p.fill(this.c);

      if (triNum ==1){
        p.triangle(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy);
      }
      if (triNum ==2){
        p.triangle(Xdim/2+ox,oy, Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy);
      }
      if (triNum ==3){
        p.triangle(Xdim/2+ox,Ydim/4+oy,Xdim+ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
      if (triNum ==4){
        p.triangle(Xdim/2+ox,Ydim/4+oy,ox,Ydim/4+oy,Xdim/2+ox,Ydim/2+oy);
      }
   
      p.stroke(0);

      p.noFill();
      p.quad(ox,Ydim/4+oy, Xdim/2+ox,oy, Xdim+ox,Ydim/4+oy,Xdim/2+ox, Ydim/2+oy);

    }

    p.noFill(100);
    // p.ellipse(95,155,10,10);
    // p.ellipse(380,5,10,10);
    // p.ellipse(2*380-95,155,10,10);
    // p.ellipse(380,305,10,10);

    p.quad(95,155,380,5,665,155,380,305)
  }

  }

p.mouseClicked = function(){

  // p.rect(600,20,20,20);
  console.log(p.mouseX, ', ', p.mouseY);
  if (p.mouseX>720 && p.mouseX<760 && p.mouseY>410 && p.mouseY<450){
    if (index<lines){
      index = index + 1;
        // print(index+1);
      }
    else{
          // print ('Restarting');
      index = 0;
      t = 0;
    }
    console.log(index);
  }
  else if (p.mouseX>0 && p.mouseX<40 && p.mouseY>410 && p.mouseY<450){
    if (index>0){
      index = index - 1;
        // print(index+1);
      }
    console.log(index);
  }
}


}

var myp5 = new p5(m, 'c4');








// function keyPressed(){
//     // background(0,0,0);
//     console.log('mouse');

//     // p.rect(600,20,20,20);

//     // if (mouseX>600 && mouseX<620 && mouseY>20 && mouseY<40){
//       if (index<lines){
//         index = index + 1;
//         // print(index+1);
//       }
//       else{
//           // print ('Restarting');
//         index = 0;
//         t = 0;
//       }
//     // }
    

//       // noStroke();
//       // fill(255,255,255);
//       // rect(0,Cheight-75, Cwidth, Cheight);

//       // fill(0,0,0);
//       // // p.textAlign(CENTER);
//       // textSize(18);
//       // // p.text('Pattern:  '+ sensors[index*N+36], Cwidth/2-130, Cheight-10);

//       // var n1 = float(sensors[(index-1)*N+37]);
//       // var n2 = float(sensors[(index)*N+37]);
//       // // console.log(n1);
//       // // console.log(n2);



//       // if (n2 < n1){
//       //   t = t+n1;
//       //   // console.log('why ' + t);
//       // }

//       // // console.log(n1);


//       // t_now = n2 + t;
//       // t_now = round(100*t_now)/100;


//       // p.text('Time:  '+ t_now + ' s', Cwidth/2+30, Cheight-10)


// }







 

