var s = 0;
var m = 0;
var h = 0;
var i = 0;
var x2 = 380;
var y2 = 390;
var x1 = 160;
var y1 = 390;
var totalS = 0;
var b = color(255,255,255);


var r = 0;
var theta = 0;


function setup(){
	createCanvas(500,500);
	background (220);
	frameRate(1);

}

function draw(){
	background (100);
	//create sundial triangle
//	strokeWeight(3);

	noStroke();
	fill (255,255,255);
	arc(170,250,200,200, PI/2, 3*PI/2);
	fill (100);
	arc(170,250,130,130, PI/2, 3*PI/2);
	fill (255,255,255);
	quad(120,100,420,100,380,400,160,400)
	triangle(420,100, 450,100, 410, 150)

	s = second();
	m = minute();
	h = hour();
	if (h<=12){
		b = color(107,164,213);
	}
	if (h>12){
		h = h-12;
		b = color(13,65,111);
	}

	totalS = s+60*m+3600*h;
	dh = totalS*250/12/3600;
	y1 = 400-dh;
	y2 = y1;
	x1 = 160-(dh/7.5)
	x2 = 380+(dh/7.5)


	fill(b);
	quad(380,400, 160,400,x1,y1, x2,y2)

	stroke(0)
	line(410,150, 390,150)
	line(408,150+250/12,388,150+250/12)
	line(405,150+2*250/12,385,150+2*250/12)
	line(402,150+250/4,382,150+250/4)
	line(399,150+4*250/12,379,150+4*250/12)
	line(397,150+5*250/12,377,150+5*250/12)
	line(395,150+250/2,375,150+250/2)
	line(392,150+7*250/12,372,150+7*250/12)
	line(389,150+8*250/12,369,150+8*250/12)
	line(386,150+3*250/4,366,150+3*250/4)
	line(382,150+10*250/12,362,150+10*250/12)
	line(380,150+11*250/12,360,150+11*250/12)

	console.log(y1 + "," + y2 + "," + h)
}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)