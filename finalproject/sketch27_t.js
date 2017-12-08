$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/AllTrials_RunningRecord.csv",
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

Cwidth = 350;
Cheight = 350;

var prompt;


// Square Coordinates
// 1st corner 
var x1 = 25;
var y1 = 25;

// var initx = 75;
// var inity = 50;

var DX = 100;
var DY = 100;

var myCar;

var index = 0;

var Cars = [];
var currentCar;

var N = 38;
var lines = 1747;


var block;

var design = 0;
var old_design = 0;

var placement = 0; 

var placedFirst = [];
var placed = 0; 

var prev_config = [];
var Bpattern = [0,0,0,0];

var timesFirst = [0,0,0,0,0,0,0,0,0];
var timesFirst_M= [0,0,0,0,0,0,0,0,0];
var maxFirst;
var maxFirst_M;
var timesFirst_Check= [0,0,0,0,0,0,0,0,0];
var maxFirst_Check;
var timesFirst_UL= [0,0,0,0,0,0,0,0,0];
var maxFirst_UL;
var timesFirst_Star= [0,0,0,0,0,0,0,0,0];
var maxFirst_Star;
var timesFirst_Rand= [0,0,0,0,0,0,0,0,0];
var maxFirst_Rand;
var timesFirst_Sl = [0,0,0,0,0,0,0,0,0];
var maxFirst_Sl;
var timesFirst_X = [0,0,0,0,0,0,0,0,0];
var maxFirst_X;
var timesFirst_D = [0,0,0,0,0,0,0,0,0];
var maxFirst_D;
var timesFirst_Sq = [0,0,0,0,0,0,0,0,0];
var maxFirst_Sq;
var timesFirst_Z= [0,0,0,0,0,0,0,0,0];
var maxFirst_Z;


var errorsB = [];
var timesErrors = [0,0,0,0,0,0,0,0,0];
var errorsB_M = [];
var timesErrors_M = [0,0,0,0,0,0,0,0,0];
var errorsB_Check = [];
var timesErrors_Check= [0,0,0,0,0,0,0,0,0];
var errorsB_UL = [];
var timesErrors_UL= [0,0,0,0,0,0,0,0,0];
var errorsB_Star = [];
var timesErrors_Star= [0,0,0,0,0,0,0,0,0];
var errorsB_Rand = [];
var timesErrors_Rand= [0,0,0,0,0,0,0,0,0];
var errorsB_Sl = [];
var timesErrors_Sl= [0,0,0,0,0,0,0,0,0];
var errorsB_X = [];
var timesErrors_X= [0,0,0,0,0,0,0,0,0];
var errorsB_D = [];
var timesErrors_D= [0,0,0,0,0,0,0,0,0];
var errorsB_Sq = [];
var timesErrors_Sq= [0,0,0,0,0,0,0,0,0];
var errorsB_Z = [];
var timesErrors_Z= [0,0,0,0,0,0,0,0,0];

var averagetimes = [20.1131, 21.2936,25.3039, 28.5933, 32.7752,32.9533, 40.7588, 42.8120, 43.5577, 44.9436];
var patterns = [2,1,4,6,9,3,12,8,11,10];

function parseData(data){
// print(table.getRowCount() + " total rows in table");
//  print(table.getColumnCount() + " total columns in table");

    var allTextLines = data.split(/\r\n|\n/);

    for (var i=0; i<lines; i++) 
    {
      var row = allTextLines[i].split(',');
      for (var j = 0; j<N;j++)
      {
        sensorReading = row[j];
        sensors.push(sensorReading);
      }
    }
    console.log('parsed!');


    calculateFirstPlacement();
    calculateFirstPlacement_M();
    calculateFirstPlacement_Check();
    calculateFirstPlacement_UL();
    calculateFirstPlacement_Star();
    calculateFirstPlacement_Rand();
    calculateFirstPlacement_Sl();
    calculateFirstPlacement_X();
    calculateFirstPlacement_D();
    calculateFirstPlacement_Sq();
    calculateFirstPlacement_Z();

    calculateMistakes();
    calculateMistakes_M();
    calculateMistakes_Check();
    calculateMistakes_UL();
    calculateMistakes_Star();
    calculateMistakes_Rand();
    calculateMistakes_Sl();
    calculateMistakes_X();
    calculateMistakes_D();
    calculateMistakes_Sq();
    calculateMistakes_Z();



// Total Summary
var q = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

	Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    // console.log("Blocks!");


    p.drawFirstPlacement();
 
  }




  p.drawFirstPlacement = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

  	}

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    // console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst[n];
    }

    var perc = p.round(timesFirst[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }



 

  // }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {	  	
    	maxFirst = p.max(timesFirst);
    	var int = 250/maxFirst;
    	var darkness = 250-timesFirst[block-1]*int;
    	// console.log(darkness);
    	this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    
  }

}
}

var myp5 = new p5(q, 'c4');


/// Second Canvas - mistakes!!!

var h = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors();
    

  }

  p.drawErrors = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    // console.log(maxFirst);

    var sumError = 0;
    for(var n = 0; n<9; n++){
      sumError = sumError+timesErrors[n];
    }

    var perc = p.round(timesErrors[0]/sumError*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors[1]/sumError*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors[2]/sumError*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors[3]/sumError*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors[4]/sumError*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors[5]/sumError*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors[6]/sumError*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors[7]/sumError*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors[8]/sumError*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors);
      var int = 250/maxError;
      var darkness = 250-timesErrors[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h, 'c5');



// 3rd Canvas - Time
var j = function (p){
  p.setup = function()
  {


    img1 = p.loadImage("checkerboard.png");
    img2 = p.loadImage("M.png");
    img3 = p.loadImage("Slash.png"); // different?
    img4 = p.loadImage("ul.png");
    img5 = p.loadImage("Slash.png"); //different?
    img6 = p.loadImage("stary.png");
    img7 = p.loadImage("diagonal.png");
    img8 = p.loadImage("Slash.png");// different?
    img9 = p.loadImage("Random.png");
    img10= p.loadImage("ZigZag.png");
    img11 = p.loadImage("square.png");
    img12 = p.loadImage("X.png");

    var pics = [img2, img1, img4, img6,img9,img8,img12,img7,img11,img10];

    // p.frameRate(10);
    p.createCanvas(500,320);  
    p.background(255);

    // plot time graph

    p.strokeWeight(2);
    p.line(250,10,250,320);

    var maxTime = p.max(averagetimes);
    var dx = 30;
    p.stroke(0);
    p.strokeWeight(1.5);
    p.noFill();

    for (i=0; i<10; i++){
      var length = 200*averagetimes[i]/maxTime;
      p.rect(265,24+i*dx,length, 18);
    }

  }

  p.draw = function(){


    p.noFill();
    p.strokeWeight(1);

    p.image(img2,210,20,24,24);
    p.rect(210,20,24,24);
    p.image(img1,210,20+30,24,24);
    p.rect(210,20+30,24,24);
    p.image(img4,210,20+60,24,24);
    p.rect(210,20+60,24,24);
    p.image(img6,210,20+90,24,24);
    p.rect(210,20+90,24,24);
    p.image(img9,210,20+120,24,24);
    p.rect(210,20+120,24,24);
    p.image(img8,210,20+150,24,24);
    p.rect(210,20+150,24,24);
    p.image(img12,210,20+180,24,24);
    p.rect(210,20+180,24,24);
    p.image(img7,210,20+210,24,24);
    p.rect(210,20+210,24,24);
    p.image(img11,210,20+240,24,24);
    p.rect(210,20+240,24,24);
    p.image(img10,210,20+270,24,24);
    p.rect(210,20+270,24,24);

  }


}

var myp5 = new p5(j, 'c6');



// // ONLY FOR Certian PATTERNs

// M Pattern

var q_M = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_M();
 
  }




  p.drawFirstPlacement_M = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_M[n];
    }

    var perc = p.round(timesFirst_M[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_M[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_M[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_M[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_M[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_M[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_M[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_M[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_M[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }




 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_M = p.max(timesFirst_M);
      var int = 250/maxFirst_M;
      var darkness = 250-timesFirst_M[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_M, 'c7');




// /// Second Canvas - mistakes!!!

var h_M = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_M();
    

  }

  p.drawErrors_M = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_M = 0;
    for(var n = 0; n<9; n++){
      sumError_M = sumError_M+timesErrors_M[n];
    }

    var perc = p.round(timesErrors_M[0]/sumError_M*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_M[1]/sumError_M*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_M[2]/sumError_M*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_M[3]/sumError_M*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_M[4]/sumError_M*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_M[5]/sumError_M*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_M[6]/sumError_M*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_M[7]/sumError_M*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_M[8]/sumError_M*100);
    p.text(perc + "%" ,50+200,85+200);




  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_M);
      var int = 250/maxError;
      var darkness = 250-timesErrors_M[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_M, 'c8');


// Checkerboard Pattern

var q_Check = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Check();
 
  }




  p.drawFirstPlacement_Check = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Check[n];
    }

    p.fill(100);
    var perc = p.round(timesFirst_Check[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    p.fill(200);
    var perc = p.round(timesFirst_Check[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Check[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Check[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Check[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Check[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Check[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Check[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    p.fill(100);
    var perc = p.round(timesFirst_Check[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Check = p.max(timesFirst_Check);
      var int = 250/maxFirst_Check;
      var darkness = 250-timesFirst_Check[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Check, 'c9');


var h_Check = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Check();
    

  }

  p.drawErrors_Check = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Check = 0;
    for(var n = 0; n<9; n++){
      sumError_Check = sumError_Check+timesErrors_Check[n];
    }

    var perc = p.round(timesErrors_Check[0]/sumError_Check*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Check[1]/sumError_Check*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Check[2]/sumError_Check*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Check[3]/sumError_Check*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Check[4]/sumError_Check*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Check[5]/sumError_Check*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Check[6]/sumError_Check*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Check[7]/sumError_Check*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Check[8]/sumError_Check*100);
    p.text(perc + "%" ,50+200,85+200);




  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Check);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Check[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Check, 'c10');


// UL Pattern

var q_UL = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_UL();
 
  }




  p.drawFirstPlacement_UL = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_UL[n];
    }


    var perc = p.round(timesFirst_UL[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_UL[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_UL[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_UL[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_UL[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_UL[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_UL[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_UL[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_UL[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_UL = p.max(timesFirst_UL);
      var int = 250/maxFirst_UL;
      var darkness = 250-timesFirst_UL[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_UL, 'c11');


var h_UL = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_UL();
    

  }

  p.drawErrors_UL = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_UL = 0;
    for(var n = 0; n<9; n++){
      sumError_UL = sumError_UL+timesErrors_UL[n];
    }

    var perc = p.round(timesErrors_UL[0]/sumError_UL*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_UL[1]/sumError_UL*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_UL[2]/sumError_UL*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_UL[3]/sumError_UL*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_UL[4]/sumError_UL*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_UL[5]/sumError_UL*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_UL[6]/sumError_UL*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_UL[7]/sumError_UL*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_UL[8]/sumError_UL*100);
    p.text(perc + "%" ,50+200,85+200);




  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_UL);
      var int = 250/maxError;
      var darkness = 250-timesErrors_UL[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_UL, 'c12');



// Stary
var q_Star = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Star();
 
  }




  p.drawFirstPlacement_Star = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Star[n];
    }


    var perc = p.round(timesFirst_Star[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_Star[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Star[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Star[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Star[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Star[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Star[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Star[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_Star[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Star = p.max(timesFirst_Star);
      var int = 250/maxFirst_Star;
      var darkness = 250-timesFirst_Star[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Star, 'c13');


var h_Star = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Star();
    

  }

  p.drawErrors_Star = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Star = 0;
    for(var n = 0; n<9; n++){
      sumError_Star = sumError_Star+timesErrors_Star[n];
    }

    var perc = p.round(timesErrors_Star[0]/sumError_Star*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Star[1]/sumError_Star*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Star[2]/sumError_Star*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Star[3]/sumError_Star*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Star[4]/sumError_Star*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Star[5]/sumError_Star*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Star[6]/sumError_Star*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Star[7]/sumError_Star*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Star[8]/sumError_Star*100);
    p.text(perc + "%" ,50+200,85+200);




  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Star);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Star[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Star, 'c14');

// Random
var q_Rand = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Rand();
 
  }




  p.drawFirstPlacement_Rand = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Rand[n];
    }


    var perc = p.round(timesFirst_Rand[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_Rand[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Rand[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Rand[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Rand[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Rand[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Rand[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Rand[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_Rand[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Rand = p.max(timesFirst_Rand);
      var int = 250/maxFirst_Rand;
      var darkness = 250-timesFirst_Rand[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Rand, 'c15');


var h_Rand = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Rand();
    

  }

  p.drawErrors_Rand = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Rand = 0;
    for(var n = 0; n<9; n++){
      sumError_Rand = sumError_Rand+timesErrors_Rand[n];
    }

    var perc = p.round(timesErrors_Rand[0]/sumError_Rand*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Rand[1]/sumError_Rand*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Rand[2]/sumError_Rand*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Rand[3]/sumError_Rand*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Rand[4]/sumError_Rand*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Rand[5]/sumError_Rand*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Rand[6]/sumError_Rand*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Rand[7]/sumError_Rand*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Rand[8]/sumError_Rand*100);
    p.text(perc + "%" ,50+200,85+200);




  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Rand);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Rand[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Rand, 'c16');


// Slash
var q_Sl = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Sl();
 
  }




  p.drawFirstPlacement_Sl = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Sl[n];
    }


    var perc = p.round(timesFirst_Sl[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_Sl[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Sl[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Sl[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Sl[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Sl[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Sl[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Sl[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_Sl[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Sl = p.max(timesFirst_Sl);
      var int = 250/maxFirst_Sl;
      var darkness = 250-timesFirst_Sl[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Sl, 'c17');


var h_Sl = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Sl();
    

  }

  p.drawErrors_Sl = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Sl = 0;
    for(var n = 0; n<9; n++){
      sumError_Sl = sumError_Sl+timesErrors_Sl[n];
    }

    var perc = p.round(timesErrors_Sl[0]/sumError_Sl*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Sl[1]/sumError_Sl*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Sl[2]/sumError_Sl*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Sl[3]/sumError_Sl*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Sl[4]/sumError_Sl*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Sl[5]/sumError_Sl*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Sl[6]/sumError_Sl*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Sl[7]/sumError_Sl*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Sl[8]/sumError_Sl*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Sl);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Sl[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Sl, 'c18');

// X
var q_X = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_X();
 
  }




  p.drawFirstPlacement_X = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_X[n];
    }


    var perc = p.round(timesFirst_X[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_X[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    p.fill(100);
    var perc = p.round(timesFirst_X[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_X[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_X[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    p.fill(200);
    var perc = p.round(timesFirst_X[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_X[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_X[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_X[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_X = p.max(timesFirst_X);
      var int = 250/maxFirst_X;
      var darkness = 250-timesFirst_X[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_X, 'c19');


var h_X = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_X();
    

  }

  p.drawErrors_X = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_X = 0;
    for(var n = 0; n<9; n++){
      sumError_X = sumError_X+timesErrors_X[n];
    }

    var perc = p.round(timesErrors_X[0]/sumError_X*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_X[1]/sumError_X*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_X[2]/sumError_X*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_X[3]/sumError_X*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_X[4]/sumError_X*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_X[5]/sumError_X*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_X[6]/sumError_X*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_X[7]/sumError_X*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_X[8]/sumError_X*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_X);
      var int = 250/maxError;
      var darkness = 250-timesErrors_X[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_X, 'c20');



// Diagonal
var q_D = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_D();
 
  }




  p.drawFirstPlacement_D = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_D[n];
    }


    var perc = p.round(timesFirst_D[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_D[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_D[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_D[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_D[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_D[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_D[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_D[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_D[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_D = p.max(timesFirst_D);
      var int = 250/maxFirst_D;
      var darkness = 250-timesFirst_D[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_D, 'c21');


var h_D = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_D();
    

  }

  p.drawErrors_D = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_D = 0;
    for(var n = 0; n<9; n++){
      sumError_D = sumError_D+timesErrors_D[n];
    }

    var perc = p.round(timesErrors_D[0]/sumError_D*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_D[1]/sumError_D*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_D[2]/sumError_D*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_D[3]/sumError_D*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_D[4]/sumError_D*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_D[5]/sumError_D*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_D[6]/sumError_D*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_D[7]/sumError_D*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_D[8]/sumError_D*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_D);
      var int = 250/maxError;
      var darkness = 250-timesErrors_D[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_D, 'c22');


// Square
var q_Sq = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Sq();
 
  }




  p.drawFirstPlacement_Sq = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Sq[n];
    }


    var perc = p.round(timesFirst_Sq[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_Sq[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Sq[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Sq[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Sq[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Sq[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Sq[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Sq[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_Sq[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Sq = p.max(timesFirst_Sq);
      var int = 250/maxFirst_Sq;
      var darkness = 250-timesFirst_Sq[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Sq, 'c23');


var h_Sq = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Sq();
    

  }

  p.drawErrors_Sq= function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Sq = 0;
    for(var n = 0; n<9; n++){
      sumError_Sq = sumError_Sq+timesErrors_Sq[n];
    }

    var perc = p.round(timesErrors_Sq[0]/sumError_Sq*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Sq[1]/sumError_Sq*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Sq[2]/sumError_Sq*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Sq[3]/sumError_Sq*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Sq[4]/sumError_Sq*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Sq[5]/sumError_Sq*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Sq[6]/sumError_Sq*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Sq[7]/sumError_Sq*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Sq[8]/sumError_Sq*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Sq);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Sq[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Sq, 'c24');


// Zig Zag
var q_Z = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

  Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement_Z();
 
  }




  p.drawFirstPlacement_Z = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();

    }

    p.textSize(28);
    p.noStroke();
    p.fill(200);
    console.log(maxFirst);


    var sumFirst = 0;
    for(var n = 0; n<9; n++){
      sumFirst = sumFirst+timesFirst_Z[n];
    }


    var perc = p.round(timesFirst_Z[0]/sumFirst*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesFirst_Z[1]/sumFirst*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesFirst_Z[2]/sumFirst*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesFirst_Z[3]/sumFirst*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesFirst_Z[4]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesFirst_Z[5]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesFirst_Z[6]/sumFirst*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesFirst_Z[7]/sumFirst*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesFirst_Z[8]/sumFirst*100);
    p.text(perc + "%" ,50+200,85+200);

  }

 

  p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      maxFirst_Z= p.max(timesFirst_Z);
      var int = 250/maxFirst_Z;
      var darkness = 250-timesFirst_Z[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}

}

var myp5 = new p5(q_Z, 'c25');


var h_Z = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors_Z();
    

  }

  p.drawErrors_Z = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }


    p.textSize(28);
    p.noStroke();
    p.fill(100);
    console.log(maxFirst);

    var sumError_Z = 0;
    for(var n = 0; n<9; n++){
      sumError_Z = sumError_Z+timesErrors_Z[n];
    }

    var perc = p.round(timesErrors_Z[0]/sumError_Z*100);
    p.text(perc + "%" ,50,85);

    var perc = p.round(timesErrors_Z[1]/sumError_Z*100);
    p.text(perc + "%" ,50+100,85);

    var perc = p.round(timesErrors_Z[2]/sumError_Z*100);
    p.text(perc + "%" ,50+200,85);

    var perc = p.round(timesErrors_Z[3]/sumError_Z*100);
    p.text(perc + "%" ,50,85+100);

    var perc = p.round(timesErrors_Z[4]/sumError_Z*100);
    p.text(perc + "%" ,50+100,85+100);

    var perc = p.round(timesErrors_Z[5]/sumError_Z*100);
    p.text(perc + "%" ,50+200,85+100);

    var perc = p.round(timesErrors_Z[6]/sumError_Z*100);
    p.text(perc + "%" ,50,85+200);

    var perc = p.round(timesErrors_Z[7]/sumError_Z*100);
    p.text(perc + "%" ,50+100,85+200);

    var perc = p.round(timesErrors_Z[8]/sumError_Z*100);
    p.text(perc + "%" ,50+200,85+200);


  }

    p.square = function(block){
    

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

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors_Z);
      var int = 250/maxError;
      var darkness = 250-timesErrors_Z[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h_Z, 'c26');
}
























calculateFirstPlacement = function()
  {
  	console.log('calculating firsts');
  	for (var l=0; l<lines; l++)
  	{
  		design = sensors[l*N+36];

  		// console.log(design);

  		if (old_design != design)
  		{
  			// console.log(design);
    		// Go through and find configurations of all blocks when it was placed
    		placement = 0; 
			for (B = 1; B<10; B++)
			{
				var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
    				
    			// check if block is placed
    			if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
    				Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
    				Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
    				Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
    				Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
    				Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
    				Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
				{
					placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
					placement = 1;
					old_design = design;
				}
				else{
					placedFirst.push(0);
				}

    			if (placement == 0){
    				l = l+1;
    			}

    		 }	


    		// console.log(placedFirst);
			for (v=0; v<9; v++){
				timesFirst[v] = timesFirst[v]+placedFirst[v];
			}

				
    		placedFirst = [];




    	
    }




  }
  console.log(timesFirst); // how many times each block is placed first, in order

}


calculateMistakes = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (design == 1){
        //prompt checkerboard
        prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      }
      if (design == 2){
        //prompt M
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      }
      if (design == 3){
        //prompt Slash
        prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      }
      if (design == 4){
        //prompt Upper Left
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      }
      if (design == 6){
        //prompt Stary
        prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
        prompt2 = prompt;
      }
      if (design == 8){
        //prompt Diagonal
        prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
        prompt2 = prompt;
      }
      if (design == 9){
        //prompt Random
        prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
        prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      }
      if (design == 10){
        //prompt Zig Zag
        prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
        promt2 = prompt;
      }
      if (design == 11){
        //prompt Square
        prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
        promt2 = prompt;
      }
      if (design == 12){
        //prompt X
        prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
        promt2 = prompt;
      }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB.push(0);
          }
          else{
            errorsB.push(1);
          }
        }
        else{
          errorsB.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors[v] = timesErrors[v]+ errorsB[v];
      }

      errorsB = [];

    }
    
    console.log(timesErrors);
  


}


calculateFirstPlacement_M = function()
  {
    console.log('calculating firsts');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design )
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==2){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_M[v] = timesFirst_M[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_M); // how many times each block is placed first, in order

}

calculateMistakes_M = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 2){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      if (design == 2){
        //prompt M
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_M.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_M.push(0);
          }
          else{
            errorsB_M.push(1);
          }
        }
      else{
          errorsB_M.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_M[v] = timesErrors_M[v]+ errorsB_M[v];
      }

      errorsB_M = [];

      }
    }
    
    console.log(timesErrors_M);
  


}



calculateFirstPlacement_Check = function()
  {
    console.log('calculating firsts checkerboard');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==1){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Check[v] = timesFirst_Check[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Check); // how many times each block is placed first, in order

}

calculateMistakes_Check = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 1){

      // console.log(design);

      if (design == 1){
        //prompt checkerboard
        prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Check.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Check.push(0);
          }
          else{
            errorsB_Check.push(1);
          }
        }
      else{
          errorsB_Check.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Check[v] = timesErrors_Check[v]+ errorsB_Check[v];
      }

      errorsB_Check = [];

      }
    }
    
    console.log(timesErrors_Check);
  

}


calculateFirstPlacement_UL = function()
  {
    console.log('calculating firsts UL');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==4){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_UL[v] = timesFirst_UL[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_UL); // how many times each block is placed first, in order

}

calculateMistakes_UL = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 4){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      if (design == 4){
        //prompt Upper Left
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_UL.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_UL.push(0);
          }
          else{
            errorsB_UL.push(1);
          }
        }
      else{
          errorsB_UL.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_UL[v] = timesErrors_UL[v]+ errorsB_UL[v];
      }

      errorsB_UL = [];

      }
    }
    
    console.log(timesErrors_UL);
  

}

calculateFirstPlacement_Star= function()
  {
    console.log('calculating firsts Star');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==6){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Star[v] = timesFirst_Star[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Star); // how many times each block is placed first, in order

}

calculateMistakes_Star = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 6){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      if (design == 6){
        //prompt Stary
        prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
        prompt2 = prompt;
      }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Star.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Star.push(0);
          }
          else{
            errorsB_Star.push(1);
          }
        }
      else{
          errorsB_Star.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Star[v] = timesErrors_Star[v]+ errorsB_Star[v];
      }

      errorsB_Star = [];

      }
    }
    
    console.log(timesErrors_Star);
  

}



calculateFirstPlacement_Rand = function()
  {
    console.log('calculating firsts Random');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==9){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Rand[v] = timesFirst_Rand[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Rand); // how many times each block is placed first, in order

}

calculateMistakes_Rand = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 9){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      if (design == 9){
        //prompt Random
        prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
        prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Rand.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Rand.push(0);
          }
          else{
            errorsB_Rand.push(1);
          }
        }
      else{
          errorsB_Rand.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Rand[v] = timesErrors_Rand[v]+ errorsB_Rand[v];
      }

      errorsB_Rand = [];

      }
    }
    
    console.log(timesErrors_Rand);
  

}


calculateFirstPlacement_Sl = function()
  {
    console.log('calculating firsts Random');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==3){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Sl[v] = timesFirst_Sl[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Sl); // how many times each block is placed first, in order

}

calculateMistakes_Sl = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 3){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      if (design == 3){
        //prompt Slash
        prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Sl.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Sl.push(0);
          }
          else{
            errorsB_Sl.push(1);
          }
        }
      else{
          errorsB_Sl.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Sl[v] = timesErrors_Sl[v]+ errorsB_Sl[v];
      }

      errorsB_Sl = [];

      }
    }
    
    console.log(timesErrors_Sl);
  

}



calculateFirstPlacement_X = function()
  {
    console.log('calculating firsts X');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==12){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_X[v] = timesFirst_X[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_X); // how many times each block is placed first, in order

}

calculateMistakes_X = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 12){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      if (design == 12){
        //prompt X
        prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
        promt2 = prompt;
      }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_X.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_X.push(0);
          }
          else{
            errorsB_X.push(1);
          }
        }
      else{
          errorsB_X.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_X[v] = timesErrors_X[v]+ errorsB_X[v];
      }

      errorsB_X = [];

      }
    }
    
    console.log(timesErrors_X);
  

}

calculateFirstPlacement_D = function()
  {
    console.log('calculating firsts D');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==8){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_D[v] = timesFirst_D[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_D); // how many times each block is placed first, in order

}

calculateMistakes_D = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 8){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      if (design == 8){
        //prompt Diagonal
        prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
        prompt2 = prompt;
      }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_D.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_D.push(0);
          }
          else{
            errorsB_D.push(1);
          }
        }
      else{
          errorsB_D.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_D[v] = timesErrors_D[v]+ errorsB_D[v];
      }

      errorsB_D = [];

      }
    }
    
    console.log(timesErrors_D);
  

}


calculateFirstPlacement_Sq = function()
  {
    console.log('calculating firsts Square');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==11){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Sq[v] = timesFirst_Sq[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Sq); // how many times each block is placed first, in order

}

calculateMistakes_Sq = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 11){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      // if (design == 10){
      //   //prompt Zig Zag
      //   prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
      //   promt2 = prompt;
      // }
      if (design == 11){
        //prompt Square
        prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
        promt2 = prompt;
      }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Sq.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Sq.push(0);
          }
          else{
            errorsB_Sq.push(1);
          }
        }
      else{
          errorsB_Sq.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Sq[v] = timesErrors_Sq[v]+ errorsB_Sq[v];
      }

      errorsB_Sq = [];

      }
    }
    
    console.log(timesErrors_Sq);
  

}

calculateFirstPlacement_Z = function()
  {
    console.log('calculating firsts Zig Zag');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (old_design != design)
      {
        // console.log(design);
        // Go through and find configurations of all blocks when it was placed
        placement = 0; 
        for (B = 1; B<10; B++)
        {
          var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          if (design ==10){
            placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
            placement = 1;
          }
          else{
            placedFirst.push(0);
          }
          old_design = design;
        }
        else{
          placedFirst.push(0);
        }

          if (placement == 0){
            l = l+1;
          }

         }  


        // console.log(placedFirst);
      for (v=0; v<9; v++){
        timesFirst_Z[v] = timesFirst_Z[v]+placedFirst[v];
      }

        
        placedFirst = [];




      
    }


  }

  console.log(timesFirst_Z); // how many times each block is placed first, in order

}

calculateMistakes_Z = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      if (design == 10){

      // console.log(design);

      // if (design == 1){
      //   //prompt checkerboard
      //   prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      // }
      // if (design == 2){
      //   //prompt M
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      // }
      // if (design == 3){
      //   //prompt Slash
      //   prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      // }
      // if (design == 4){
      //   //prompt Upper Left
      //   prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
      //   prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      // }
      // if (design == 6){
      //   //prompt Stary
      //   prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
      //   prompt2 = prompt;
      // }
      // if (design == 8){
      //   //prompt Diagonal
      //   prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
      //   prompt2 = prompt;
      // }
      // if (design == 9){
      //   //prompt Random
      //   prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
      //   prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      // }
      if (design == 10){
        //prompt Zig Zag
        prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
        promt2 = prompt;
      }
      // if (design == 11){
      //   //prompt Square
      //   prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
      //   promt2 = prompt;
      // }
      // if (design == 12){
      //   //prompt X
      //   prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
      //   promt2 = prompt;
      // }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB_Z.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB_Z.push(0);
          }
          else{
            errorsB_Z.push(1);
          }
        }
      else{
          errorsB_Z.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors_Z[v] = timesErrors_Z[v]+ errorsB_Z[v];
      }

      errorsB_Z = [];

      }
    }
    
    console.log(timesErrors_Z);
  

}


