var s = 0;
var m = 0;
var h = 0;
var i = 0;
var x = 0;
var y = 0;

var r = 0;
var theta = 0;


function setup(){
	createCanvas(500,500);
	background (220);
	frameRate(1);

}


function draw(){
	background (239,147,218);
	//create sundial triangle
	fill (109,137,246);
	strokeWeight(3);
	quad(145,282,100,450, 400,450, 355, 282)
	fill(255,255,255);
	ellipse(250,175, 300,300);

	fill(114,246,109);
	ellipse(250,360,50,50);
	line(240,350,260,370);
	fill(255,255,255);
	rect(200,400, 100,30);


	// seconds
//	noStroke();
//	fill(255,100,0);
//	ellipse(250,250,15,15)
//	ellipse(250,210,15,15)
//	ellipse(220,210,15,15)
//	ellipse(210,240,15,15)
//	ellipse(190,250,15,15)

	// rect(145,65,210,220) // rectangle contained by gumball machine
	strokeWeight(1);

	fill(239,147,218); // pink = seconds
	s = second();
	for (i=0; i<s; i++){
		r = random(5,135);
		theta = random (0,TWO_PI);
		x = 250+r*cos(theta);
		y = 175+r*sin(theta);
		ellipse(x,y,30,30)
	}

	fill(114,246,109); // green = minute
	m = minute();
	for (i=0; i<m; i++){
		r = random(5,135);
		theta = random (0,TWO_PI);
		x = 250+r*cos(theta);
		y = 175+r*sin(theta);
		ellipse(x,y,30,30)
	}


	fill(109,137,246); // blue = hour
	h = hour();
	for (i=0; i<h; i++){
		r = random(5,135);
		theta = random (0,TWO_PI);
		x = 250+r*cos(theta);
		y = 175+r*sin(theta);
		ellipse(x,y,30,30)
	}


}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)