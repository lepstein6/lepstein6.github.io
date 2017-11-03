$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/ACS5yr_2015Data1_US.csv",
        dataType: "text",
        success: function(data) {parseData(data);}
     });
});

// this table will contain the numbers and actual data
var table1;
var table2;

var margin = 150;
// this is an array that will contain all the data in form of javascript objects
var states = [];

var maxValueTotal =0;


var educations;
var occupations;

var M_educations;
var F_educations;

var Cwidth = 900;
var Cheight = 650;

var r = 200;

var status = 0;

var r1;
var r2;
var r3;
var r4;
var cnv;

var dG;
var dB; 
var DCircle;


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
  background(255,255,255);
  // parseData();
//  findMaxValueTotal();
//  createGraph("United States 2015");
  noFill();
  ellipse(450,300,400,400);

  // writeEducationLabels();

}



function parseData(data){
// print(table.getRowCount() + " total rows in table");
//  print(table.getColumnCount() + " total columns in table");

  var allTextLines = data.split(/\r\n|\n/);

  educations = [];
  M_educationPs=[]; // males educated percent

  var males_education = allTextLines[3].split(',')
  var M_pop_E = males_education[1];

  for (var i=4; i<11; i++) {
      var row = allTextLines[i].split(',');
      education = row[0];
      M_educationP = row [1]/M_pop_E;
      educations.push(education)
      M_educationPs.push(M_educationP);
   }

  F_educationPs=[];  // females educated percent
  var females_education = allTextLines[13].split(',')
  var F_pop_E = females_education[1];

  for (var i=14; i<21; i++) {
      row = allTextLines[i].split(',');
      F_educationP = row[1]/F_pop_E; // percent of population with this level of education
      F_educationPs.push(F_educationP);
   }

// print (M_educationPs);
// print(F_educationPs);


  // educations[1] = "High School Graduate";
  // educations[5] = "Professional Degree or More";

  occupations = []
  M_occupationPs = [];

  var males_occupations = allTextLines[23].split(',');
  var M_pop_O = males_occupations[1];

  for (var i=24; i<37; i++) {
      var row = allTextLines[i].split(',');
      occupation = row[0];
      M_occupationP = row[1]/M_pop_O;
      occupations.push(occupation);
      M_occupationPs.push(M_occupationP);
   }

  F_occupationPs = [];

  var females_occupations = allTextLines[39].split(',');
  var F_pop_O = females_occupations[1];

  for (var i=40; i<53; i++) {
      var row = allTextLines[i].split(',');
      F_occupationP = row[1]/F_pop_O;
      F_occupationPs.push(F_occupationP);
   }





  M_educationSals = [];

  for (var i=56; i<61; i++) {
      var row = allTextLines[i].split(',');
      M_educationSal = row[1];
      M_educationSals.push(M_educationSal);
   }

  F_educationSals = [];

  for (var i=63; i<68; i++) {
      var row = allTextLines[i].split(',');
      F_educationSal = row[1];
      F_educationSals.push(F_educationSal);
   }



  M_occupationSals = [];

  for (var i=71; i<84; i++) {
      var row = allTextLines[i].split(',');
      M_occupationSal = row[1];
      M_occupationSals.push(M_occupationSal);
   }

  F_occupationSals = [];

  for (var i=86; i<99; i++) {
      var row = allTextLines[i].split(',');
      F_occupationSal = row[1];
      F_occupationSals.push(F_occupationSal);
   }


  // education side
//   stroke(0,0,0);
//   noFill();
//   r1 = rect(150,205,115,14);
//   r2 = rect(70,235,180,14);
//   r3 = rect(85,265,160,14);
//   r4 = rect(70,295,170,14);
//  print("rectangles");
  // rect(100,325,145,14);
  // rect(60,355,190,14);
  // rect(120,385,145,14);
  // // occupation side
  // rect(635,385,60,14);
  // rect(640,370,80,14);
  // rect(645,355,125,14);
  // rect(650,340,115,14);
  // rect(652,325,190,14);
  // rect(654,310,220,14);
  // rect(655,295,170,14);
  // rect(655,280,35,14);
  // rect(652,265,212,14);
  // rect(650,250,185,14);
  // rect(646,235,160,14);
  // rect(642,220,70,14);
  // rect(635,205,95,14);
}

  // put rest of code here!


function draw(){

  dG = dist(mouseX,mouseY,800,30);
  dB = dist(mouseX,mouseY,800,50);
  DCircle = dist(mouseX,mouseY,450,300);

  if (mouseX<265 && mouseX>150 && mouseY>205 && mouseY<219){
  	hover(6);
  }
  else if (mouseX<250 && mouseX>70 && mouseY>235 && mouseY<249){
    hover(5);
  } 
  else if (mouseX<245 && mouseX>85 && mouseY>265 && mouseY<279){
    hover(4);
  } 
  else if (mouseX<240 && mouseX>70 && mouseY>295 && mouseY<309){
    hover(3);
  } 
  else if (mouseX<245 && mouseX>100 && mouseY>325 && mouseY<339){
    hover(2);
  } 
  else if (mouseX<250 && mouseX>60 && mouseY>355 && mouseY<369){
    hover(1);
  } 
  else if (mouseX<265 && mouseX>120 && mouseY>385 && mouseY<399){
    hover(0);
  } 
  else if (mouseX<695 && mouseX>635 && mouseY>385 && mouseY<399){
    hover2(0);
  } 
  else if (mouseX<720 && mouseX>640 && mouseY>370 && mouseY<384){
    hover2(1);
  } 
  else if (mouseX<770 && mouseX>645 && mouseY>355 && mouseY<369){
    hover2(2);
  } 
  else if (mouseX<765 && mouseX>650 && mouseY>340 && mouseY<354){
    hover2(3);
  } 
  else if (mouseX<842 && mouseX>652 && mouseY>325 && mouseY<339){
    hover2(4);
  } 
  else if (mouseX<864 && mouseX>654 && mouseY>310 && mouseY<324){
    hover2(5);
  } 
  else if (mouseX<825 && mouseX>655 && mouseY>295 && mouseY<309){
    hover2(6);
  } 
  else if (mouseX<690 && mouseX>655 && mouseY>280 && mouseY<294){
    hover2(7);
  } 
  else if (mouseX<864 && mouseX>652 && mouseY>265 && mouseY<279){
    hover2(8);
  } 
  else if (mouseX<835 && mouseX>659 && mouseY>250 && mouseY<264){
    hover2(9);
  } 
  else if (mouseX<806 && mouseX>646 && mouseY>235 && mouseY<250){
    hover2(10);
  }
  else if (mouseX<712 && mouseX>642 && mouseY>220 && mouseY<234){
   hover2(11);
  } 
  else if (mouseX<730 && mouseX>635 && mouseY>205 && mouseY<219){
   hover2(12);
  } 
  else if (dG<7.5){
    cursor(HAND);
  }
  else if (dB<7.5){
    cursor(HAND);
  }
  else {
    cursor(ARROW);
    noStroke();
    fill(255,255,255);
    rect(0,550,900,650);

    if (DCircle<200 && status!=0){
    	if (status<8){
    		hover(status-1);
    	}
    	else if (status<21){
    		hover2(status-8);
    	
    	}
    }
  }
}




// LABELING FUNCTIONS
function writeEducationLabels(){
  noStroke();
  fill(0,0,0)
  textAlign(RIGHT);
  textSize(14);

  for(var i = 0; i<educations.length; i++){
      text(educations[i], 240+2.5*abs(i-3)*abs(i-3),7+390-30*i);
      // print(abs(i-3)*abs(i-3));
  }
}
function writeOccupationLabels(){
  noStroke();
  fill(0,0,0)
  textAlign(LEFT);
  textSize(14);

  for(var i = 0; i<occupations.length; i++){
      text(occupations[i], 655-.5*abs(i-6)*abs(i-6),7+390-15*i);
  }
}
function writePopulationLabels(){
  noStroke();
  fill(125);
  textAlign(RIGHT);
  textSize(10);

  var x = 450+(r+5)*cos(25*PI/20);
  var y = 290+(r+5)*sin(25*PI/20);
  text("0%",x,y);

  var x = 450+(r+5)*cos(27.5*PI/20);
  var y = 290+(r+5)*sin(27.5*PI/20);
  text("25%",x,y);

  textAlign(CENTER);

  var x = 450+(r+5)*cos(30*PI/20);
  var y = 290+(r+5)*sin(30*PI/20);
  text("50%",x,y);

  textAlign(LEFT);

  var x = 450+(r+5)*cos(32.5*PI/20);
  var y = 290+(r+5)*sin(32.5*PI/20);
  text("75%",x,y);

  textAlign(CENTER);

  x = 450+(r+10)*cos(35*PI/20);
  y = 290+(r+10)*sin(35*PI/20);
  text("100%",x,y);
}
function writeEarningsLabels(){
  noStroke();
  fill(125)
  textSize(10);

  var z = 5;

  textAlign(LEFT);
  var x = 450+(r+z)*cos(5*PI/20);
  var y = 315+(r+z)*sin(5*PI/20);
  text(">$100,000",x,y);

  var x = 450+(r+z)*cos(7.5*PI/20);
  var y = 315+(r+z)*sin(7.5*PI/20);
  text("$75,000",x,y);

  textAlign(CENTER);

  x = 450+(r+z)*cos(10*PI/20);
  y = 315+(r+z)*sin(10*PI/20);
  text("$50,000",x,y);

  textAlign(RIGHT);

  x = 450+(r+z)*cos(12.5*PI/20);
  y = 315+(r+z)*sin(12.5*PI/20);
  text("$25,000",x,y);


  x = 450+(r+z)*cos(15*PI/20);
  y = 315+(r+z)*sin(15*PI/20);
  text("$0,000",x,y);
}
function writeTitle(){
  noStroke();
  fill(0,0,0)
  
  textAlign(CENTER);
  textSize(18);
  text("Education, Occupation and Earnings by Sex",450,35);

  // textAlign(LEFT);
  noStroke();
  fill(125);
  textAlign(CENTER);
  textSize(18);
  text("United States, 2015",450,57.5);
}


//MALE OCCUPATION

function drawBusiness_M(){
  // Population Side

  var theta = map(M_occupationPs[0],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(13,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[0],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProfessional_M(){
  var theta = map(M_occupationPs[1],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(12,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // // Income Side -- NO DATA
  // theta = map(M_occupationSals[1],0,100000,15*PI/20, 5*PI/20)
  // x = 450+r*cos(theta);
  // y = 300+r*sin(theta);
  // line(x2,y2,x,y);
}
function drawHealthcare_M(){
  var theta = map(M_occupationPs[2],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(11,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[2],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProtective_M(){
  var theta = map(M_occupationPs[3],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(10,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[3],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawFood_M(){
  var theta = map(M_occupationPs[4],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(9,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawBuilding_M(){
  var theta = map(M_occupationPs[5],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(8,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[5],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawPersonal_M(){
  var theta = map(M_occupationPs[6],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(7,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[6],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawSales_M(){
  var theta = map(M_occupationPs[7],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(6,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[7],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawOffice_M(){
  var theta = map(M_occupationPs[8],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(5,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[8],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawFarming_M(){
  var theta = map(M_occupationPs[9],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(4,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[9],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawConstruction_M(){
  var theta = map(M_occupationPs[10],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(3,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[10],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProduction_M(){
  var theta = map(M_occupationPs[11],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(2,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[11],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawTransportation_M(){
  var theta = map(M_occupationPs[12],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(1,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(M_occupationSals[12],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}


//FEMALE OCCUPATION
function drawBusiness_F(){
  var theta = map(F_occupationPs[0],0,1,25*PI/20, 35*PI/20);
  // print(F_occupationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(13,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[0],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProfessional_F(){
  var theta = map(F_occupationPs[1],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(12,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // // Income Side -- NO DATA
  // theta = map(F_occupationSals[0],0,100000,15*PI/20, 5*PI/20)
  // x = 450+r*cos(theta);
  // y = 300+r*sin(theta);
  // line(x2,y2,x,y);
}
function drawHealthcare_F(){
  var theta = map(F_occupationPs[2],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(11,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[2],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProtective_F(){
  var theta = map(F_occupationPs[3],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(10,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[3],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawFood_F(){
  var theta = map(F_occupationPs[4],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(9,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawBuilding_F(){
  var theta = map(F_occupationPs[5],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(8,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[5],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawPersonal_F(){
  var theta = map(F_occupationPs[6],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(7,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[6],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawSales_F(){
  var theta = map(F_occupationPs[7],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(6,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[7],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawOffice_F(){
  var theta = map(F_occupationPs[8],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(5,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[8],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawFarming_F(){
  var theta = map(F_occupationPs[9],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(4,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[9],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawConstruction_F(){
  var theta = map(F_occupationPs[10],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(3,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[10],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawProduction_F(){
  var theta = map(F_occupationPs[11],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(2,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[11],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}
function drawTransportation_F(){
  var theta = map(F_occupationPs[12],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);

  var theta2 = map(1,1,13,-0.45,0.45);
  // print(theta2);
  var x2 =  450+r*cos(theta2);
  var y2 = 300+r*sin(theta2);
  line(x2,y2,x,y);

  // Income Side
  theta = map(F_occupationSals[12],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(x2,y2,x,y);
}


// MALE EDUCATION
function drawLTHS_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[0],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(272,390,x,y);

  // Income Side
  theta = map(M_educationSals[0],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(272,390,x,y);
}
function drawHS_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[1],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[1]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(260,360,x,y);
  
  // Income Side
  theta = map(M_educationSals[1],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(260,360,x,y);
}
function drawC_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[2],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[2]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(253,332,x,y);
 
  // Income Side
  theta = map(M_educationSals[2],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(253,332,x,y);
}
function drawB_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[3],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[3]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(250,303,x,y);
  
  // Income Side
  theta = map(M_educationSals[3],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(250,303,x,y);
}
function drawM_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[4],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[4]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(252,275,x,y);

  // Income Side
  theta = map(M_educationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(252,275,x,y);
}
function drawP_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[5],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[5]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(259,243,x,y);
  
  // Income Side
  theta = map(M_educationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(259,243,x,y);
}

function drawD_M(){ // less than high school male
  // strokeWeight(2);
  // stroke(70,88,237);
  var theta = map(M_educationPs[6],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[6]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(270,215,x,y);
  // include median income portion
}

// FEMALE EDUCATION
function drawLTHS_F(){ // less than high school male;
  var theta = map(F_educationPs[0],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[0]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(272,390,x,y);

  // Income Side
  theta = map(F_educationSals[0],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(272,390,x,y);
}
function drawHS_F(){ // less than high school male
  var theta = map(F_educationPs[1],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[1]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(260,360,x,y);
  
  //INCOME PORTION
  theta = map(F_educationSals[1],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(260,360,x,y);
}
function drawC_F(){ // less than high school male
  var theta = map(F_educationPs[2],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[2]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(253,332,x,y);
  
   //INCOME PORTION
  theta = map(F_educationSals[2],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(253,332,x,y);
}
function drawB_F(){ // less than high school male
  // strokeWeight(2);
  // stroke(244,65,239);
  var theta = map(F_educationPs[3],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[3]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(250,303,x,y);
  
  //INCOME PORTION
  theta = map(F_educationSals[3],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(250,303,x,y);
}
function drawM_F(){ // less than high school male
  // strokeWeight(2);
  // stroke(244,65,239);
  var theta = map(F_educationPs[4],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[4]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(252,275,x,y);
  
  //INCOME PORTION
  theta = map(F_educationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(252,275,x,y);
}
function drawP_F(){ // less than high school male
  // strokeWeight(2);
  // stroke(244,65,239);
  var theta = map(F_educationPs[5],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[5]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(259,243,x,y);
  
  //INCOME PORTION
  theta = map(F_educationSals[4],0,100000,15*PI/20, 5*PI/20)
  x = 450+r*cos(theta);
  y = 300+r*sin(theta);
  line(259,243,x,y);
}
function drawD_F(){ // less than high school male
  // strokeWeight(2);
  // stroke(244,65,239);
  var theta = map(F_educationPs[6],0,1,25*PI/20, 35*PI/20);
  // print(M_educationPs[6]);
  // print(theta);
  var x = 450+r*cos(theta);
  var y = 300+r*sin(theta);
  line(270,215,x,y);
}





function drawMale_Education(){
  // strokeWeight(1.5);
  // stroke(70,88,237);
  drawLTHS_M(); //less than hs
  drawHS_M(); // high school
  drawC_M(); // college
  drawB_M(); // bachelors
  drawM_M(); // masters
  drawP_M(); // professional
  drawD_M(); // Doctorate
}

function drawFemale_Education(){
  // strokeWeight(1.5);
  // stroke(244,65,239);
  drawLTHS_F(); //less than hs
  drawHS_F(); // high school
  drawC_F(); // college
  drawB_F(); // bachelors
  drawM_F(); // masters
  drawP_F(); // professional
  drawD_F(); // Doctorate
}

function drawMale_Occupation(){
  // strokeWeight(1.5);
  // stroke(70,88,237);
  drawBusiness_M();
  drawProfessional_M();
  drawHealthcare_M();
  drawProtective_M();
  drawFood_M();
  drawBuilding_M();
  drawPersonal_M();
  drawSales_M();
  drawOffice_M();
  drawFarming_M();
  drawConstruction_M();
  drawProduction_M();
  drawTransportation_M();
  // 
}


function drawFemale_Occupation(){
  // strokeWeight(1.5);
  // stroke(244,65,239);
  drawBusiness_F();
  drawProfessional_F();
  drawHealthcare_F();
  drawProtective_F();
  drawFood_F();
  drawBuilding_F();
  drawPersonal_F();
  drawSales_F();
  drawOffice_F();
  drawFarming_F();
  drawConstruction_F();
  drawProduction_F();
  drawTransportation_F();
}







function mousePressed(){
  // print(mouseX);

  dG = dist(mouseX,mouseY,800,30);
  dB = dist(mouseX,mouseY,800,50);

  if (mouseX<265 && mouseX>150 && mouseY>205 && mouseY<219){
    status = 7;
  } 
  else if (mouseX<250 && mouseX>70 && mouseY>235 && mouseY<249){
    status = 6;
  } 
  else if (mouseX<245 && mouseX>85 && mouseY>265 && mouseY<279){
    status = 5;
  } 
  else if (mouseX<240 && mouseX>70 && mouseY>295 && mouseY<309){
    status = 4;
  } 
  else if (mouseX<245 && mouseX>100 && mouseY>325 && mouseY<339){
    status = 3;
  } 
  else if (mouseX<250 && mouseX>60 && mouseY>355 && mouseY<369){
    status = 2;
    // print(status);
  } 
  else if (mouseX<265 && mouseX>120 && mouseY>385 && mouseY<399){
    status = 1;
    // print(status);
  } 
  else if (mouseX<695 && mouseX>635 && mouseY>385 && mouseY<399){
    status = 8;
    // print(status);
  } 
  else if (mouseX<720 && mouseX>640 && mouseY>370 && mouseY<384){
    status = 9;
    // print(status);
  } 
  else if (mouseX<770 && mouseX>645 && mouseY>355 && mouseY<369){
    status = 10;
    // print(status);
  } 
  else if (mouseX<765 && mouseX>650 && mouseY>340 && mouseY<354){
    status = 11;
    // print(status);
  } 
  else if (mouseX<842 && mouseX>652 && mouseY>325 && mouseY<339){
    status = 12;
    // print(status);
  } 
  else if (mouseX<864 && mouseX>654 && mouseY>310 && mouseY<324){
    status = 13;
    // print(status);
  } 
  else if (mouseX<825 && mouseX>655 && mouseY>295 && mouseY<309){
    status = 14;
    // print(status);
  } 
  else if (mouseX<690 && mouseX>655 && mouseY>280 && mouseY<294){
    status = 15;
    // print(status);
  } 
  else if (mouseX<864 && mouseX>652 && mouseY>265 && mouseY<279){
    status = 16;
    // print(status);
  } 
  else if (mouseX<835 && mouseX>659 && mouseY>250 && mouseY<264){
    status = 17;
    // print(status);
  } 
  else if (mouseX<806 && mouseX>646 && mouseY>235 && mouseY<250){
    status = 18;
    // print(status);
  } 
  else if (mouseX<712 && mouseX>642 && mouseY>220 && mouseY<234){
    status = 19;
    // print(status);
  } 
  else if (mouseX<730 && mouseX>635 && mouseY>205 && mouseY<219){
    status = 20;
    // print(status);
  } 
  else if (dG<7.5){
    status = 21;
  }
  else if (dB<7.5){
    status = 22;
    // print(status);
  }
  else {
    status = 0;
  }



  if (status == 0){
      drawLabels();
      strokeWeight(1.5);
      stroke(70,88,237);
      drawMale_Education();
      drawMale_Occupation();

      stroke(244,65,239);
      drawFemale_Education();
      drawFemale_Occupation();

      drawellipse();

      print("drew all labels!");

    }
  else if (status == 1){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawLTHS_M();
      stroke(244,65,239);
      drawLTHS_F();

       drawellipse();
    }
  else if (status == 2){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawHS_M();
      stroke(244,65,239);
      drawHS_F(); 

       drawellipse();
  }
 else if (status == 3){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawC_M();
      stroke(244,65,239);
      drawC_F(); 

      drawellipse();
  }
else if (status == 4){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawB_M();
      stroke(244,65,239);
      drawB_F(); 

      drawellipse();
  }
  else if (status == 5){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawM_M();
      stroke(244,65,239);
      drawM_F(); 

      drawellipse();
  }
  else if (status == 6){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawP_M();
      stroke(244,65,239);
      drawP_F(); 

      drawellipse();
  }
  else if (status == 7){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawD_M();
      stroke(244,65,239);
      drawD_F(); 

      drawellipse();
  }
    else if (status == 8){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawBusiness_M();
      stroke(244,65,239);
      drawBusiness_F(); 

      drawellipse();
  }
  else if (status == 9){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawProfessional_M();
      stroke(244,65,239);
      drawProfessional_F(); 

      drawellipse();
  }
  else if (status == 10){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawHealthcare_M();
      stroke(244,65,239);
      drawHealthcare_F(); 

      drawellipse();
  }
  else if (status == 11){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawProtective_M();
      stroke(244,65,239);
      drawProtective_F(); 

      drawellipse();
  }
  else if (status == 12){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawFood_M();
      stroke(244,65,239);
      drawFood_F(); 

      drawellipse();
  }
  else if (status == 13){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawBuilding_M();
      stroke(244,65,239);
      drawBuilding_F(); 

      drawellipse();
  }
  else if (status == 14){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawPersonal_M();
      stroke(244,65,239);
      drawPersonal_F(); 

      drawellipse();
  }
    else if (status == 15){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      
      stroke(70,88,237);
      drawSales_M();
      stroke(244,65,239);
      drawSales_F(); 

      drawellipse();
  }
  else if (status == 16){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawOffice_M();
      stroke(244,65,239);
      drawOffice_F(); 

      drawellipse();
  }
  else if (status == 17){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawFarming_M();
      stroke(244,65,239);
      drawFarming_F(); 

      drawellipse();
  }
  else if (status == 18){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawConstruction_M();
      stroke(244,65,239);
      drawConstruction_F(); 

      drawellipse();
  }
  else if (status == 19){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawProduction_M();
      stroke(244,65,239);
      drawProduction_F(); 

      drawellipse();
  }
  else if (status == 20){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawTransportation_M();
      stroke(244,65,239);
      drawTransportation_F(); 

      drawellipse();
  }
  else if (status == 21){
      drawLabels();
      strokeWeight(1.5);

      stroke(220);
      drawMale_Education();
      drawMale_Occupation();
      
      stroke(244,65,239);
      drawFemale_Education();
      drawFemale_Occupation();

      drawellipse();
  }
  else if (status == 22){
      drawLabels();
      strokeWeight(1.5);

     
      stroke(220);
      drawFemale_Education();
      drawFemale_Occupation();

      stroke(70,88,237);
      drawMale_Education();
      drawMale_Occupation();
      
  }

}



function drawLabels(){
  clear();
  background(255,255,255);
  fill(255,255,255);
  stroke(0);
  ellipse(450,300,400,400);

  noStroke();
  fill(244,65,239);
  // ellipse(780,30,30,30); 
  ellipse(800,30,15,15); 
  fill(70,88,237);
  //ellipse(820,30,30,30);
  ellipse(800,50,15,15); 
	
	fill(0);
	fontSize(12);
	text("Female", 850,30);
	text("Male", 850,50)
	


  writeEducationLabels();
  writeOccupationLabels();
  writePopulationLabels();
  writeEarningsLabels();

  writeTitle();
}

function drawellipse(){
      stroke(0);
      noFill();
      ellipse(450,300,400,400);
}

function hover(i){

  	cursor(HAND);
  	
	if(status == 0 || status == i+1){


  	noStroke();
    fill(255,255,255);
    rect(0,550,900,650);
    
	fill(0,0,0);
	noStroke();
	textAlign(RIGHT);
	textSize(14);
    text("Population:", 410, 575);
    text("Median Earnings:", 410, 600);

    textAlign(LEFT);
    fill(70,88,237); // male colors
    var p = M_educationPs[i]*1000;
    var q = round(p);
    var h = q/10;
    text(h + '%', 430, 575);

    p = M_educationSals[i]*1000;
    q = round(p);
    h = q/10;

    if (i==5){
    	p = M_educationSals[i-1]*1000;
    	q = round(p);
    	h = q/10;
    }

    if (i==6){
    	text("N/A", 430, 600);
    }
    else{
    	text('$' + h, 430, 600);
    } 

    fill(244,65,239);
    var p = F_educationPs[i]*1000;
    var q = round(p);
    var h = q/10;
    text(h + '%', 510, 575);

    p = F_educationSals[i]*1000;
    q = round(p);
    h = q/10;

	if (i==5){
    	p = F_educationSals[i-1]*1000;
    	q = round(p);
    	h = q/10;
    }

    if (i==6){
    	text("N/A", 510, 600);
    }
    else{
    	text('$' + h, 510, 600);
    } 
    
    }

}






function hover2(i){
  	cursor(HAND);

	if(status == 0 || status == i+8){

    
	noStroke();
    fill(255,255,255);
    rect(0,550,900,650);

	fill(0,0,0);
	noStroke();
	textAlign(RIGHT);
	textSize(14);
    text("Population:", 410, 575);
    text("Median Earnings:", 410, 600);

    textAlign(LEFT);
    fill(70,88,237); // male colors
    var p = M_occupationPs[i]*1000;
    var q = round(p);
    var h = q/10;
    text(h + '%', 430, 575);

    p = M_occupationSals[i]*1000;
    q = round(p);
    h = q/10;

    if (i==1){
    	text("N/A", 430, 600);
    }
    else{
    	text('$' + h, 430, 600);
    } 

    fill(244,65,239);
    var p = F_occupationPs[i]*1000;
    var q = round(p);
    var h = q/10;
    text(h + '%', 510, 575);

    p = F_occupationSals[i]*1000;
    q = round(p);
    h = q/10;


    if (i==1){
    	text("N/A", 510, 600);
    }
    else{
    	text('$' + h, 510, 600);
    } 
}
    

}


 
