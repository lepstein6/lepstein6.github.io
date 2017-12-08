$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/runningRecordUVW_test.csv",
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

Cwidth = 600;
Cheight = 600;

var initx = 150;
var inity = 100;
var dx = 30;
var dy = 30;
var DX = 150;
var DY = 150;

var myCar;

var index = -1;

var Cars = [];
var currentCar;

var N = 36;
var lines = 120;

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
  background(100);
  myCar4 = new Car(initx,inity,3);
  myCar2 = new Car(initx+dx,inity+dy,1);
  myCar = new Car(initx,inity+2*dy,0);
  myCar3 = new Car(initx-dx,inity+dy,2);

  myCar8 = new Car(initx+DX,inity,7);
  myCar6 = new Car(initx+dx+DX,inity+dy,5);
  myCar5 = new Car(initx+DX,inity+2*dy,4);
  myCar7 = new Car(initx-dx+DX,inity+dy,6);

  myCar12 = new Car(initx+2*DX,inity,11);
  myCar10 = new Car(initx+dx+2*DX,inity+dy,9);
  myCar9 = new Car(initx+2*DX,inity+2*dy,8);
  myCar11 = new Car(initx-dx+2*DX,inity+dy,10);

  myCar16 = new Car(initx,inity+DY,15);
  myCar14 = new Car(initx+dx,inity+dy+DY,13);
  myCar13 = new Car(initx,inity+2*dy+DY,12);
  myCar15 = new Car(initx-dx,inity+dy+DY,14);

  myCar20 = new Car(initx+DX,inity+DY,19);
  myCar18 = new Car(initx+dx+DX,inity+dy+DY,17);
  myCar17 = new Car(initx+DX,inity+2*dy+DY,16);
  myCar19 = new Car(initx-dx+DX,inity+dy+DY,18);

  myCar24 = new Car(initx+2*DX,inity+DY,23);
  myCar22 = new Car(initx+dx+2*DX,inity+dy+DY,21);
  myCar21 = new Car(initx+2*DX,inity+2*dy+DY,20);
  myCar23 = new Car(initx-dx+2*DX,inity+dy+DY,22);

  myCar28 = new Car(initx,inity+2*DY,27);
  myCar26 = new Car(initx+dx,inity+dy+2*DY,25);
  myCar25 = new Car(initx,inity+2*dy+2*DY,24);
  myCar27 = new Car(initx-dx,inity+dy+2*DY,26);

  myCar32 = new Car(initx+DX,inity+2*DY,31);
  myCar30 = new Car(initx+dx+DX,inity+dy+2*DY,29);
  myCar29 = new Car(initx+DX,inity+2*dy+2*DY,28);
  myCar31 = new Car(initx-dx+DX,inity+dy+2*DY,30);

  myCar36 = new Car(initx+2*DX,inity+2*DY,35);
  myCar34 = new Car(initx+dx+2*DX,inity+dy+2*DY,33);
  myCar33 = new Car(initx+2*DX,inity+2*dy+2*DY,32);
  myCar35 = new Car(initx-dx+2*DX,inity+dy+2*DY,34);


  Cars = [myCar, myCar2, myCar3, myCar4, myCar5, myCar6, myCar7, myCar8, myCar9, myCar10, myCar11, myCar12,
  myCar13, myCar14, myCar15, myCar16, myCar17, myCar18, myCar19, myCar20, myCar21, myCar22, myCar23, myCar24,
  myCar25, myCar26,myCar27,myCar28,myCar29,myCar30,myCar31,myCar32,myCar33,myCar34,myCar35,myCar36];
  
	noStroke();
	fill(0,0,0);
	textAlign(CENTER);
	textSize(14);
	text("Press Space to Advance", 300, 50);
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
	background(100);

  for(var r = 0; r<N; r++){
    currentCar = Cars[r];
    currentCar.display();
    currentCar.light();
  }

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
      }


  		// ellipse(100,50,10,10);
  		// ellipse(100+dx,50+dy,10,10);
  		// ellipse(100-dx,50+dy,10,10);
  		// ellipse(100,50+2*dy,10,10);
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
