var xPos1 = 180;
var yPos1 = 80;
var xPos2 = 280;
var yPos2 = 40;
var xPos3 = 380;
var yPos3 = 80;

var x1 = 315;
var y1 = 380;
var x2 = 250;
var y2 = 310;
var x3=190;
var y3 = 400;

var s=0;
var m = 0;
var h = 0;


function setup(){
	createCanvas(500,500);
	background (220);

}


function draw(){
	noStroke();
	background (220);
	//create sundial triangle
	fill(0,0,0)
	triangle(205,260,295,260,315,110);
	//create suns
	xPos1 = 260+1.5*(250-x1)
	yPos1 = 60+(375-y1)/3
	xPos2 = 260+1.5*(250-x2)
	yPos2 = 60+(375-y2)/3
	xPos3 = 260+1.5*(250-x3)
	yPos3 = 60+(375-y3)/3


	fill(255,0,0,150)
	ellipse(xPos1,yPos1,30,30)
	fill(255,255,0,150)
	ellipse(xPos2,yPos2,30,30)
	fill(0,0,255,150)
	ellipse(xPos3,yPos3,30,30)

	
	//moving shadow triangles
	fill(255,0,0,150)
	triangle(205,260,295,260,x1,y1);
	fill(255,255,0,150)
	triangle(205,260,295,260,x2,y2);
	fill(0,0,255,150)
	triangle(205,260,295,260,x3,y3);

	angleMode(DEGREES)
	s = 6*second();
	x1 = 250+65*cos(s-90);
	y1 = 375+65*sin(s-90);

	// console.log(second() + "," + s +","+ x1);

	m = 6*minute()+second()/60;
	x2 = 250+65*cos(m-90);
	y2 = 375+65*sin(m-90);

	h = 30*hour()+0.5*minute();
	x3 = 250+65*cos(h-90);
	y3= 375+65*sin(h-90);

	// dots of clock face

	// fill(255,0,0)
	// ellipse (250, 375,140, 140)
	fill(0,0,0)
	ellipse(250,310+5,5,5)
	ellipse(250,440+5,5,5)
	ellipse(185,375+5,5,5)
	ellipse(315,375+5,5,5)
	ellipse(282.5,320+5,5,5)
	ellipse(305,345+5,5,5)
	ellipse(305,405+5,5,5)
	ellipse(282.5,430+5,5,5)
	ellipse(217.5,430+5,5,5)
	ellipse(195,405+5,5,5)
	ellipse(195,345+5,5,5)
	ellipse(217.5,320+5,5,5)


}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)