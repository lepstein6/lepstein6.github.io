$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/10_PFTG_RunningRecord.csv",
        dataType: "text",
        success: function(data) {parseData(data);}
     });
});

// this table will contain the numbers and actual data

var margin = 150;
// this is an array that will contain all the data in form of javascript objects
var time0;
var sensorReading;
var sensors = []

Cwidth = 1000;
Cheight = 500;

var initx = 150;
var inity = 75;
var dx = 30;
var dy = 30;
var DX = 120;
var DY = 120;

var myCar;

var index = -1;

var Cars = [];
var currentCar;

var N = 38;
var lines = 320;



// Triangle Coordinates
// 1st corner 
var x1 = 500;
var y1 = 50;

var block;
var triNum;

var t_dx = 4*dx;
var t_dy = 4*dy;

var t = 0 ;
var now = 0;

// function preload() {
//   //my table is comma separated value "csv"
//   //and has a header specifying the columns labels
//   print ("hello");
//   table1 = loadTable("data/ACS5yr_2015Data1_US_Education.csv", "csv");
//   table2 = loadTable("data/ACS5yr_2015Data1_US_Occupation.csv", "csv");
//   print("done");
// }

function setup() {   
  cnv = createCanvas(Cwidth,Cheight);  
//  canvas.position(20,20);
  background(150);
  myCar4 = new Car(initx,inity,3);
  myCar2 = new Car(initx+dx,inity+dy,1);
  myCar = new Car(initx,inity+2*dy,0);
  myCar3 = new Car(initx-dx,inity+dy,2);

  T1 = new tri(1,1);
  T2 = new tri(1,2);
  T3 = new tri(1,3);
  T4 = new tri(1,4) ;

  myCar8 = new Car(initx+DX,inity,7);
  myCar6 = new Car(initx+dx+DX,inity+dy,5);
  myCar5 = new Car(initx+DX,inity+2*dy,4);
  myCar7 = new Car(initx-dx+DX,inity+dy,6);

  T5 = new tri(2,1);
  T6 = new tri(2,2);
  T7 = new tri(2,3);
  T8 = new tri(2,4) ;

  myCar12 = new Car(initx+2*DX,inity,11);
  myCar10 = new Car(initx+dx+2*DX,inity+dy,9);
  myCar9 = new Car(initx+2*DX,inity+2*dy,8);
  myCar11 = new Car(initx-dx+2*DX,inity+dy,10);

  T9 = new tri(3,1);
  T10 = new tri(3,2);
  T11 = new tri(3,3);
  T12 = new tri(3,4) ;

  myCar16 = new Car(initx,inity+DY,15);
  myCar14 = new Car(initx+dx,inity+dy+DY,13);
  myCar13 = new Car(initx,inity+2*dy+DY,12);
  myCar15 = new Car(initx-dx,inity+dy+DY,14);

  T13 = new tri(4,1);
  T14 = new tri(4,2);
  T15 = new tri(4,3);
  T16 = new tri(4,4) ;

  myCar20 = new Car(initx+DX,inity+DY,19);
  myCar18 = new Car(initx+dx+DX,inity+dy+DY,17);
  myCar17 = new Car(initx+DX,inity+2*dy+DY,16);
  myCar19 = new Car(initx-dx+DX,inity+dy+DY,18);

  T17 = new tri(5,1);
  T18 = new tri(5,2);
  T19 = new tri(5,3);
  T20 = new tri(5,4) ;

  myCar24 = new Car(initx+2*DX,inity+DY,23);
  myCar22 = new Car(initx+dx+2*DX,inity+dy+DY,21);
  myCar21 = new Car(initx+2*DX,inity+2*dy+DY,20);
  myCar23 = new Car(initx-dx+2*DX,inity+dy+DY,22);

  T21 = new tri(6,1);
  T22 = new tri(6,2);
  T23 = new tri(6,3);
  T24 = new tri(6,4);

  myCar28 = new Car(initx,inity+2*DY,27);
  myCar26 = new Car(initx+dx,inity+dy+2*DY,25);
  myCar25 = new Car(initx,inity+2*dy+2*DY,24);
  myCar27 = new Car(initx-dx,inity+dy+2*DY,26);

  T25 = new tri(7,1);
  T26 = new tri(7,2);
  T27 = new tri(7,3);
  T28 = new tri(7,4);

  myCar32 = new Car(initx+DX,inity+2*DY,31);
  myCar30 = new Car(initx+dx+DX,inity+dy+2*DY,29);
  myCar29 = new Car(initx+DX,inity+2*dy+2*DY,28);
  myCar31 = new Car(initx-dx+DX,inity+dy+2*DY,30);

  T29 = new tri(8,1);
  T30 = new tri(8,2);
  T31 = new tri(8,3);
  T32 = new tri(8,4);

  myCar36 = new Car(initx+2*DX,inity+2*DY,35);
  myCar34 = new Car(initx+dx+2*DX,inity+dy+2*DY,33);
  myCar33 = new Car(initx+2*DX,inity+2*dy+2*DY,32);
  myCar35 = new Car(initx-dx+2*DX,inity+dy+2*DY,34);

  T33 = new tri(9,1);
  T34 = new tri(9,2);
  T35 = new tri(9,3);
  T36 = new tri(9,4);




  Cars = [myCar, myCar2, myCar3, myCar4, myCar5, myCar6, myCar7, myCar8, myCar9, myCar10, myCar11, myCar12,
  myCar13, myCar14, myCar15, myCar16, myCar17, myCar18, myCar19, myCar20, myCar21, myCar22, myCar23, myCar24,
  myCar25, myCar26,myCar27,myCar28,myCar29,myCar30,myCar31,myCar32,myCar33,myCar34,myCar35,myCar36];
  
  
  // parseData();
//  findMaxValueTotal();
//  createGraph("United States 2015");

  // writeEducationLabels();

}



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
}

function draw(){
//	background(100);


  for(var r = 0; r<(N-2); r++){
    currentCar = Cars[r];
    currentCar.display();
    currentCar.light();
  }

  T1.light();
  T2.light();
  T3.light();
  T4.light();
  T1.display();
  T2.display();
  T3.display();
  T4.display();

  T5.light();
  T6.light();
  T7.light();
  T8.light();
  T5.display();
  T6.display();
  T7.display();
  T8.display();

  T9.light();
  T10.light();
  T11.light();
  T12.light();
  T9.display();
  T10.display();
  T11.display();
  T12.display();

  T13.light();
  T14.light();
  T15.light();
  T16.light();
  T13.display();
  T14.display();
  T15.display();
  T16.display();

  T17.light();
  T18.light();
  T19.light();
  T20.light();
  T17.display();
  T18.display();
  T19.display();
  T20.display();

  T21.light();
  T22.light();
  T23.light();
  T24.light();
  T21.display();
  T22.display();
  T23.display();
  T24.display();

  T25.light();
  T26.light();
  T27.light();
  T28.light();
  T25.display();
  T26.display();
  T27.display();
  T28.display();

  T29.light();
  T30.light();
  T31.light();
  T32.light();
  T29.display();
  T30.display();
  T31.display();
  T32.display();

  T33.light();
  T34.light();
  T35.light();
  T36.light();
  T33.display();
  T34.display();
  T35.display();
  T36.display();
 


  // // triangle 1
  // fill(255,0,0);
  // T1 = triangle(x1,y1,x1+2*dx,y1+2*dy,x1,y1+4*dy);
  // triangle(x1,y1,x1+2*dx,y1+2*dy,x1+4*dx,y1);
  // triangle(x1+2*dx,y1+2*dy,x1+4*dx,y1, x1+4*dx, y1+4*dy);
  // triangle(x1,y1+4*dy,x1+4*dx,y1, x1+4*dx, y1+4*dy);

  // // triangle 2
  // fill(255,0,0);
  // triangle(x1,y1,x1+2*dx,y1+2*dy,x1,y1+4*dy);
  // triangle(x1,y1,x1+2*dx,y1+2*dy,x1+4*dx,y1);
  // triangle(x1+2*dx,y1+2*dy,x1+4*dx,y1, x1+4*dx, y1+4*dy);
  // triangle(x1,y1+4*dy,x1+4*dx,y1, x1+4*dx, y1+4*dy);


  // triangle(100,650,100,550,200,550);
  // fill(255,255,255);
  // triangle(200,550, 200,650,100,650);

  // fill(255,255,255);
  // triangle(100,650,100,550,200,550);
  // fill(255,0,0);
  // triangle(200,550, 200,650,100,650);


	// myCar.display();
 //  myCar2.display();
 //  myCar3.display();
 //  myCar4.display();
  // myCar5.display();
  // myCar6.display();
  // myCar7.display();
  // myCar8.display();



  // for (var q=0; q<36;q++){



  // }
  // if (sensors[index*12] == 1){
  //     myCar.c = color (255,255,255);
  // }
  // else{
  //    myCar.c = color (0,0,0);
  // }

  // if (sensors[index*12+1] == 1){
  //     myCar2.c = color (255,255,255);
  // }
  // else{
  //    myCar2.c = color (0,0,0);
  // }

  // if (sensors[index*12+2] == 1){
  //     myCar3.c = color (255,255,255);
  // }
  // else{
  //    myCar3.c = color (0,0,0);
  // }

  // if (sensors[index*12+3] == 1){
  //     myCar4.c = color (255,255,255);
  // }
  // else{
  //    myCar4.c = color (0,0,0);
  // }

  // if (sensors[index*12+4] == 1){
  //     myCar5.c = color (255,255,255);
  // }
  // else{
  //    myCar5.c = color (0,0,0);
  // }

  // if (sensors[index*12+5] == 1){
  //     myCar6.c = color (255,255,255);
  // }
  // else{
  //    myCar6.c = color (0,0,0);
  // }

  // if (sensors[index*12+6] == 1){
  //     myCar7.c = color (255,255,255);
  // }
  // else{
  //    myCar7.c = color (0,0,0);
  // }

  // if (sensors[index*12+7] == 1){
  //     myCar8.c = color (255,255,255);
  // }
  // else{
  //    myCar8.c = color (0,0,0);
  // }



  
  }

 



function keyPressed (){
      if (index<lines){
        index = index + 1;
        print(index+1);
      }
      else{
        print ('Restarting');
        index = -1;
        t = 0;
      }



      fill(150);
      rect(0,Cheight-75, Cwidth, Cheight);

      fill(0,0,0);
      textAlign(CENTER);
      textSize(18);
      text('User Study Pattern:  '+ sensors[index*N+36], Cwidth/2-130, Cheight-40);

      var n1 = float(sensors[(index-1)*N+37]);
      var n2 = float(sensors[(index)*N+37]);
      console.log(n1);
      console.log(n2);



      if (n2 < n1){
        t = t+n1;
        // console.log('why ' + t);
      }


      now = n2 + t;
      now = round(100*now)/100;
      // console.log(now);


      text('Time:  '+ now + ' s', Cwidth/2+30, Cheight-40);

      // console.log(sensors);



  		// ellipse(100,50,10,10);
  		// ellipse(100+dx,50+dy,10,10);
  		// ellipse(100-dx,50+dy,10,10);
  		// ellipse(100,50+2*dy,10,10);
}

 function tri(block, triNum){
    
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

    this.c = color(255,0,0);

    this.light = function(){
      
      var pattern = [sensors[index*N+4*(block-1)],sensors[index*N+1+4*(block-1)],sensors[index*N+2+4*(block-1)],sensors[index*N+3+4*(block-1)]]
      // console.log(pattern);

      // All White
      if (pattern[0] ==1 && pattern[1] ==1 && pattern[2] ==1 && pattern[3] ==1){
        this.c = color(255,0,0);
      }

      // All Red
      else if (pattern[0] ==0 && pattern[1] ==1 && pattern[2] ==1 && pattern[3] ==0 || pattern[0] ==1 && pattern[1] ==0 && pattern[2] ==0 && pattern[3] ==1){
        this.c = color(255,255,255);
      }

      //Upper Right Red
      else if (pattern[0] ==1 && pattern[1] ==0 && pattern[2] ==1 && pattern[3] ==0){
        if (triNum ==1){
          this.c = color(255,0,0);
        }
        if (triNum ==2){
          this.c = color(255,0,0);
        }
        if (triNum ==3){
          this.c = color(255,255,255);
        }
        if (triNum ==4){
          this.c = color(255,255,255);
        }
      }

      // Upper Left Red
      else if (pattern[0] ==1 && pattern[1] ==1 && pattern[2] ==0 && pattern[3] ==0){
        if (triNum ==1){
          this.c = color(255,0,0);
        }
        if (triNum ==2){
          this.c = color(255,255,255);
        }
        if (triNum ==3){
          this.c = color(255,255,255);
        }
        if (triNum ==4){
          this.c = color(255,0,0);
        }
      }

      // Bottom Right Red
      else if (pattern[0] ==0 && pattern[1] ==0 && pattern[2] ==1 && pattern[3] ==1){
        if (triNum ==1){
          this.c = color(255,255,255);
        }
        if (triNum ==2){
          this.c = color(255,0,0);
        }
        if (triNum ==3){
          this.c = color(255,0,0);
        }
        if (triNum ==4){
          this.c = color(255,255,255);
        }
      }
       // Bottom Left Red
      else if (pattern[0] ==0 && pattern[1] ==1 && pattern[2] ==0 && pattern[3] ==1){
        if (triNum ==1){
          this.c = color(255,255,255);
        }
        if (triNum ==2){
          this.c = color(255,255,255);
        }
        if (triNum ==3){
          this.c = color(255,0,0);
          
        }
        if (triNum ==4){
          this.c = color(255,0,0);
        }
      }



        
      else{
        // console.log(pattern);
        this.c = color(0,0,0);
      }
  }



    this.display = function(){
      if (triNum == 1) {
        fill(this.c)
        triangle(this.x1,this.y1, this.x2, this.y1, this.xcen, this.ycen);
      }
      if (triNum == 2) {
        fill(this.c)
        triangle(this.x2,this.y1, this.x2, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 3) {
        fill(this.c)
        triangle(this.x2,this.y2, this.x1, this.y2, this.xcen, this.ycen);
      }
      if (triNum == 4) {
        fill(this.c)
        triangle(this.x1,this.y2, this.x1, this.y1, this.xcen, this.ycen);
      }

    }

    // if (input == [1,1,1,1]){
    //   rectangle()
    // }

  }


function Car(x, y,dot)
{
  this.xpos = x;
  this.ypos = y;
  this.diam = 15;
  noStroke();
  this.c = color(0, 0, 0);
 
  // light up method
  this.light = function()
  {
    if (sensors[index*N+dot] == 1){
      this.c = color(255,255,255);
    }
    else {
      this.c = color(0,0,0);
    }

  }
 
  // display method
  this.display = function()
  {
    // body of the car
    fill(this.c);
    ellipse(this.xpos, this.ypos, this.diam, this.diam);
  }
}
