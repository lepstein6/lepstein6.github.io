
var img;
var s1;
var h1 = 0;
var s2 =0;
var h2 =0;
var m ;

var newS = 0;
var newM = 0;
var newH = 0;

var r = 0;
var theta = 0;
var x = 1;

function setup(){
	createCanvas(501,501);
	background(220);

	m = minute();
	s1 = second()+60*m;
	i = 1;
	for(i=1; i<s1;i++){
		r = random(0, 350/2.5);
		theta = random(0, 2*PI);
		if (x == 1){
			noStroke();
			fill(1,105,8, 200);
			quad(210+r*cos(theta),170+r*sin(theta),210+r*cos(theta)+7, 170+r*sin(theta)+7, 210+r*cos(theta)+14,170+r*sin(theta), 210+r*cos(theta)+7, 170+r*sin(theta)-7  )
			x = 2;
		}
		else if (x == 2){
			noStroke();
			fill(1,105,8, 200);
			quad(290+r*cos(theta),170+r*sin(theta),290+r*cos(theta)+7, 170+r*sin(theta)+7, 290+r*cos(theta)+14,170+r*sin(theta), 290+r*cos(theta)+7, 170+r*sin(theta)-7  )				
			x = 1;
		}
		i = i+1;
	}

	h = hour();
	for(i=1;i<h;i++){
		x = random(100,400);
		y = random(390,450);
		fill(7,58,22, 150);
		ellipse(x,y,20,18);
	}

	




}

function draw(){

	strokeWeight(6);
	stroke(37,23,2)
	line (250, 400, 250, 250);
	strokeWeight(4);
	line (260, 240, 400, 150);
	line (240, 240, 100, 150);
	line (190, 200, 200, 120);
	line (325, 195, 290, 120);
//	line (130, 150, 140, 120);
//	line (275, 200, 240, 150);

	noFill();
//  	ellipse(250,170, 350,240);
	m = minute();
	s1 = second()+60*m;
	h1 = hour();

	if (s1 == 3600){
		clear;
		background(220);
		h = hour();
		for(i=1;i<h;i++){
			x = random(100,400);
			y = random(390,450);
			fill(7,58,22, 150);
			ellipse(x,y,20,18);
		}

	}


	if (s1 != s2){
		newS = 1;
		s2 = second()+m*60;
	}

	if (h1 != h2){
		newH = 1;
		h2 = hour()+m*60;
	}

	noStroke();
	fill(1,105,8, 200);

	if (newS == 1){
		r = random(0, 350/2.5);
		theta = random(0, 2*PI);
		if (x == 1){
			quad(210+r*cos(theta),170+r*sin(theta),210+r*cos(theta)+7, 170+r*sin(theta)+7, 210+r*cos(theta)+14,170+r*sin(theta), 210+r*cos(theta)+7, 170+r*sin(theta)-7);
			x = 2;
		}
		else {				
			quad(290+r*cos(theta),170+r*sin(theta),290+r*cos(theta)+7, 170+r*sin(theta)+7, 290+r*cos(theta)+14,170+r*sin(theta), 290+r*cos(theta)+7, 170+r*sin(theta)-7);
			x = 1;
		}
		
		newS = 0;
		
	}


	console.log(h, s1)
}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)