var d1 = 50;
var d2 = 100;
var d3 = 150;

var x1 = 315;
var y1 = 380;
var x2 = 250;
var y2 = 310;
var x3=190;
var y3 = 400;

var s =0;
var m = 0;
var h = 0;
var s2 = 0;
var m2 = 0;
var h2 = 0;

var iS = -1;
var iM = -1;
var iH = -1;
var r = 60; // 60 frames per second

var sec1 = 0;
var sec2 = 0;

var min1 =0;
var min2 = 0;

var hr1 = 0;
var hr2 = 0;

function setup(){
	createCanvas(500,500);
	background (220);

	frameRate(r);

}


function draw(){
	background (220);
	//create sundial triangle
	noFill();
	ellipse(250,250, 350,350);

	angleMode(DEGREES)

	if (sec1 == sec2){
		iS = iS+1;
	}
	else{
		sec1 = second();
		iS = 0;
	}


	if (sec1<=30){
		s2 = ((sec1+1/r*iS) * (sec1+1/r*iS));
		s = 0.2*s2;
		x1 = 250+(175-d1/2)*cos(s-90);
		y1 = 250+(175-d1/2)*sin(s-90);
	}

	else if (sec1>30){
		s2 = (sec1-60+1/r*iS) * (sec1-60+1/r*iS);
		s = -0.2*s2+180;
		x1 = 250+(175-d1/2)*cos(s+90);
		y1 = 250+(175-d1/2)*sin(s+90);
	}

	fill(61,201,66,150)
	ellipse(x1,y1,d1,d1)


	if (min1 == min2){
		iM = iM+1;
	}
	else{
		min1 = minute();
		iM = 0;
	}


	if (min1<=30){
		m2 = ((min1+1/(60*r)*iM) * (min1+1/(60*r)*iM));
		m = 0.2*m2;
		x2 = 250+(175-d2/2)*cos(m-90);
		y2 = 250+(175-d2/2)*sin(m-90);
	}

	else if (min1>30){
		m2 = (min1-60+1/(60*r)*iM) * (min1-60+1/(60*r)*iM);
		m = -0.2*m2+180;
		x2 = 250+(175-d2/2)*cos(m+90);
		y2 = 250+(175-d2/2)*sin(m+90);
	}


	fill(255,255,0,150)
	ellipse(x2,y2,d2,d2)


	if (hr1 == hr2){
		iH = iH+1;
	}
	else{
		hr1 = map(hour(), 0, 24, 0, 120);
		if (hr1<=60){
			hr1 = hr1;
		}
		if (hr1>60){
			hr1 = hr1-60;
	}

		iH = 0;
	}


	if (hr1<=30){
		h2 = ((hr1+1/(60*60*r)*iH) * (hr1+1/(60*60*r)*iH));
		h = 0.2*h2;
		x3 = 250+(175-d3/2)*cos(h-90);
		y3 = 250+(175-d3/2)*sin(h-90);
	}

	else if (hr1>30){
		h2 = (hr1-60+1/(60*r)*iH) * (hr1-60+1/(60*r)*iH);
		h = -0.2*h2+180;
		x3 = 250+(175-d3/2)*cos(h+90);
		y3 = 250+(175-d3/2)*sin(h+90);
	}


	fill(0,0,255,150)
	ellipse(x3,y3,d3,d3)

	textSize(20);
	fill(0,0,0)
	text("12", 245, 242-350/2)
	fill(119,112,199)
	text("1", 260 + 175*cos(5-90), 245+175*sin(5-90))
	fill(0,0,0)
	text("2", 260 + 175*cos(20-90), 250+175*sin(20-90))
	fill(119,112,199)
	text("3", 255 + 175*cos(45-90), 250+175*sin(45-90))
		fill(0,0,0)
	text("4", 255 + 175*cos(80-90), 255+175*sin(80-90))
	fill(119,112,199)
	text("5", 255 + 175*cos(125-90), 260+175*sin(125-90))
		fill(0,0,0)
	text("6", 250 + 175*cos(180-90), 270+175*sin(180-90))
	fill(119,112,199)
	text("11", 235 - 175*cos(5-90), 245+175*sin(5-90))
		fill(0,0,0)
	text("10", 225 - 175*cos(20-90), 250+175*sin(20-90))
	fill(119,112,199)
	text("9", 235 - 175*cos(45-90), 250+175*sin(45-90))
		fill(0,0,0)
	text("8", 235 - 175*cos(80-90), 255+175*sin(80-90))
	fill(119,112,199)
	text("7", 235 - 175*cos(125-90), 260+175*sin(125-90))

	sec2 = second();
	min2 = minute();
	hr2= map(hour(), 0, 24, 0, 120);
	if (hr2<=60){
		hr2 = hr2;
	}
	if (hr2>60){
		hr2 = hr2-60;
	}

	console.log(second() + "," +  iS, "," +  min1, "," +  hr1);
}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)