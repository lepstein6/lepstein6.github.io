var xPos1 = 100;
var y1=0;

var xPos2 = 100;
var y2 = 0;

var xPos3 = 100;
var y3 = 0;


function setup(){
	createCanvas(500,500);
	background(220);
	
	canvas.parent('bouncingClock'); 
}


function draw(){

	background(200);
	noStroke();
	fill(100,255,255);
	ellipse(xPos1,120,100,100);

	if (y1==0) {
		xPos1 = xPos1+hour()*2*.082;
	}
	if (y1==1) {
		xPos1 = xPos1-hour()*2*.082;
	}

	if (xPos1>400){
		y1 = 1;
	}
	if (xPos1<100){
		y1 =0;
	}


	ellipse(xPos2,250,75,75);

	if (y2==0) {
		xPos2 = xPos2+minute()*2*.082;
	}
	if (y2==1) {
		xPos2 = xPos2-minute()*2*.082;
	}

	if (xPos2>400){
		y2 = 1;
	}
	if (xPos2<100){
		y2 =0;
	}


	ellipse(xPos3,370,50,50);

	if (y3==0) {
		xPos3 = xPos3+second()*2*.082;
	}
	if (y3==1) {
		xPos3 = xPos3-second()*2*.082;
	}

	if (xPos3>400){
		y3 = 1;
	}
	if (xPos3<100){
		y3 =0;
	}

	

	console.log(second());
	console.log("it is: " + hour() +" hours and " + minute() + " minutes and " + second() + " seconds")
}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)
