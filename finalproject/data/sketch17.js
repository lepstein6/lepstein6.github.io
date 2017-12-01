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



var s = function(p)
{
  p.setup = function()
  {

    p.createCanvas(Cwidth,Cheight);  
    // p.myCar4 = new Car(initx,inity,3);
    // p.myCar2 = new Car(initx+dx,inity+dy,1);
    // 
    // p.myCar3 = new Car(initx-dx,inity+dy,2);

    // Cars = [myCar, myCar2, myCar3, myCar4];
    p.background(255,255,255);

    myCar4 = new p.Car(initx,inity,3);
    myCar2 = new p.Car(initx+dx,inity+dy,1);
    myCar = new p.Car(initx,inity+2*dy,0);
    myCar3 = new p.Car(initx-dx,inity+dy,2);

    myCar8 = new p.Car(initx+DX,inity,7);
    myCar6 = new p.Car(initx+dx+DX,inity+dy,5);
    myCar5 = new p.Car(initx+DX,inity+2*dy,4);
    myCar7 = new p.Car(initx-dx+DX,inity+dy,6);

    myCar12 = new p.Car(initx+2*DX,inity,11);
    myCar10 = new p.Car(initx+dx+2*DX,inity+dy,9);
    myCar9 = new p.Car(initx+2*DX,inity+2*dy,8);
    myCar11 = new p.Car(initx-dx+2*DX,inity+dy,10);

    myCar16 = new p.Car(initx,inity+DY,15);
    myCar14 = new p.Car(initx+dx,inity+dy+DY,13);
    myCar13 = new p.Car(initx,inity+2*dy+DY,12);
    myCar15 = new p.Car(initx-dx,inity+dy+DY,14);

    myCar20 = new p.Car(initx+DX,inity+DY,19);
    myCar18 = new p.Car(initx+dx+DX,inity+dy+DY,17);
    myCar17 = new p.Car(initx+DX,inity+2*dy+DY,16);
    myCar19 = new p.Car(initx-dx+DX,inity+dy+DY,18);

    myCar24 = new p.Car(initx+2*DX,inity+DY,23);
    myCar22 = new p.Car(initx+dx+2*DX,inity+dy+DY,21);
    myCar21 = new p.Car(initx+2*DX,inity+2*dy+DY,20);
    myCar23 = new p.Car(initx-dx+2*DX,inity+dy+DY,22);

    myCar28 = new p.Car(initx,inity+2*DY,27);
    myCar26 = new p.Car(initx+dx,inity+dy+2*DY,25);
    myCar25 = new p.Car(initx,inity+2*dy+2*DY,24);
    myCar27 = new p.Car(initx-dx,inity+dy+2*DY,26);

    myCar32 = new p.Car(initx+DX,inity+2*DY,31);
    myCar30 = new p.Car(initx+dx+DX,inity+dy+2*DY,29);
    myCar29 = new p.Car(initx+DX,inity+2*dy+2*DY,28);
    myCar31 = new p.Car(initx-dx+DX,inity+dy+2*DY,30);

    myCar36 = new p.Car(initx+2*DX,inity+2*DY,35);
    myCar34 = new p.Car(initx+dx+2*DX,inity+dy+2*DY,33);
    myCar33 = new p.Car(initx+2*DX,inity+2*dy+2*DY,32);
    myCar35 = new p.Car(initx-dx+2*DX,inity+dy+2*DY,34);

    Cars = [myCar, myCar2, myCar3, myCar4, myCar5, myCar6, myCar7, myCar8, myCar9, myCar10, myCar11, myCar12,
    myCar13, myCar14, myCar15, myCar16, myCar17, myCar18, myCar19, myCar20, myCar21, myCar22, myCar23, myCar24,
    myCar25, myCar26,myCar27,myCar28,myCar29,myCar30,myCar31,myCar32,myCar33,myCar34,myCar35,myCar36];

  }

  p.draw = function(){
    p.noFill();
    p.stroke(0,0,0);
    // p.rect(50,50,Cwidth-100, Cheight-100);

    for(var r = 0; r<(N-2); r++){
      currentCar = Cars[r];
      currentCar.light();
      currentCar.display();
    }
  }

  p.Car = function(x, y,dot) {
    this.xpos = x;
    this.ypos = y;
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
      p.ellipse(this.xpos, this.ypos, this.diam, this.diam);
    }


  }

  p.keyPressed = function(){
    // background(0,0,0);

    p.clear();

    if (index<lines){
        index = index + 1;
        // print(index+1);
      }
      else{
        // print ('Restarting');
        index = 0;
        t = 0;
      }


      p.noStroke();
      p.fill(255,255,255);
      p.rect(0,Cheight-75, Cwidth, Cheight);

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
      // console.log(now);


      // p.text('Time:  '+ t_now + ' s', Cwidth/2+30, Cheight-10);
  }
}

var myp5 = new p5(s, 'c1');




var q = function (p){
  p.setup = function()
  {
    p.createCanvas(Cwidth,Cheight);  
    p.background(255,255,255);

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

    console.log("Triangles!");


    p.stroke(0,0,0);
    p.strokeWeight(2);
    p.noFill();
    p.rect(x1-1,y1-1,362,362);



  }

  p.draw = function()
  {
    p.noFill();
    p.stroke(0,0,0);
    // p.rect(50,50,Cwidth-100, Cheight-100);

    // currentTri = Tris[0];
    // currentTri.display();
    // currentTri.light();


    // console.log('disp');

    p.noFill();
    p.noStroke();

    for(var r = 0; r<(N-2); r++){
      currentTri = Tris[r];
      currentTri.light();
      currentTri.display();
    }


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

      
      if (triNum == 1) {
        p.fill(this.c)
        p.triangle(this.x1,this.y1, this.x2, this.y1, this.xcen, this.ycen);
      }
      if (triNum == 2) {
        p.fill(this.c)
        p.triangle(this.x2,this.y1, this.x2, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 3) {
        p.fill(this.c)
        p.triangle(this.x2,this.y2, this.x1, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 4) {
        p.fill(this.c)
        p.triangle(this.x1,this.y2, this.x1, this.y1, this.xcen, this.ycen);
      }
    }
  }


}

var myp5 = new p5(q, 'c2');






