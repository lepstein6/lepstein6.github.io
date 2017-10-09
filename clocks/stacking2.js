var x = 0;
var y = 0;
var i = 0;
var s = 0;

var l = 2;
var r = 0;
var p = 0;
var n = 0;

function setup(){
	createCanvas(650,650);
	background(200);

	m = minute();
	h = hour();
	s = second()+60*minute()+3600*hour();

	i = 0
	while(i<s){
		rect(x,y, l,l)
		x = x +l
		if (x>650){
			y = y+l;
			x = 0;
		}
		i = i+1;

	}
	frameRate(10);
	x = 5;
	y = 5;
}


function draw(){

	strokeWeight(1)
	
	m = minute();
	h = hour();
	s = second()+60*minute()+3600*hour();

	rect(x,y, l,l)
	x = x +l
	if (x>500){
		y = y+l;
		x = 0;
	}

}