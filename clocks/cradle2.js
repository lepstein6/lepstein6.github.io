var DS = 30;
var h = 0;
var xS = 1;
var pS = 0;
var revS = 1;

var m = 0;
var DM = 6;
var xM = 1;
var pM = 0;
var revM = 2;

var s = 0;
var DH = 4;
var xH = 1;
var pH = 0;
var revH = 1;

var canvas;


function setup(){
	canvas = createCanvas(800,550);
	background (220);
	
//	canvas.parent('cradleClock');

}

function draw(){
	background (200);
	noStroke();
	//create sundial triangle
//	strokeWeight(3);



	// Hours

	h = hour();
	if (h>12){
		h = h-12;
		fill(0,0,0);
		stroke(255,255,255);
	}
	else if (h<=12){
		fill(255,255,255);
		stroke(0,0,0);
	}
	// h = hours out of 12

	if (revS ==1){
		for (i = 0; i<(12-h); i++){
			fill(0,0,0)
			noStroke();
			ellipse(400-i*DS, 100, DS, DS);
		}
			
		for (i=1; i<h+1; i++){
			fill(0,0,0)
			noStroke();
			ellipse(400+i*DS+pS, 100, DS, DS);

		}
		
		if (pS < 0){
			xS = 1; // going forward
			revS = 2; // RHS completed
		}
		if (pS>50){
			xS = 0; // going backward
		}
		if (xS == 1) {
			pS = pS+1.5;
		}
		if (xS == 0) {
			pS = pS-1.5;
		}

		if (revS==2){
			pS = 0;
			xS = 1;
		}

	}

	if (revS == 2 ){
		for (i = 0; i<(12-h); i++){
			fill(0,0,0)
			noStroke();
			ellipse(400+i*DS, 100, DS, DS);
		}
			
		for (i=1; i<h+1; i++){
			fill(0,0,0)
			noStroke();
			ellipse(400-i*DS-pS, 100, DS, DS);

		}
		
		if (pS < 0){
			xS = 1; // going backwards
			revS = 1; // LHS completed
		}
		if (pS>50){
			xS = 0; // going forwards
		}
		if (xS == 1) {
			pS = pS+1.5;
		}
		if (xS == 0) {
			pS = pS-1.5;
		}

		if (revS==1){
			pS = 0;
			xS = 1;
		}
	}



	// minutes
	m = minute();

	if (revM ==1){
		for (i = 0; i<(60-m); i++){
			fill(0,0,0)
			ellipse(400-i*DM, 250, DM, DM);
		}
			
		for (i=1; i<m+1; i++){
			fill(0,0,0)
			ellipse(400+i*DM+pM, 250, DM, DM);

		}
		
		if (pM < 0){
			xM = 1; // going forward
			revM = 2; // RHS completed
		}
		if (pM>50){
			xM = 0; // going backward
		}
		if (xM == 1) {
			pM = pM+1.5;
		}
		if (xM == 0) {
			pM = pM-1.5;
		}

		if (revM==2){
			pM = 0;
			xM = 1;
		}

	}

	if (revM == 2 ){
		for (i = 0; i<(60-m); i++){
			fill(0,0,0)
			ellipse(400+i*DM, 250, DM, DM);
		}
			
		for (i=1; i<m+1; i++){
			fill(0,0,0)
			ellipse(400-i*DM-pM, 250, DM, DM);

		}
		
		if (pM < 0){
			xM = 1; // going backwards
			revM = 1; // LHS completed
		}
		if (pM>50){
			xM = 0; // going forwards
		}
		if (xM == 1) {
			pM = pM+1.5;
		}
		if (xM == 0) {
			pM = pM-1.5;
		}

		if (revM==1){
			pM = 0;
			xM = 1;
		}
	}


	/// seconds


	s = second();
	if (revH ==1){
		for (i = 0; i<(60-s); i++){
			fill(0,0,0)
			ellipse(400-i*DH, 400, DH, DH);
		}
			
		for (i=1; i<s+1; i++){
			fill(0,0,0)
			ellipse(400+i*DH+pH, 400, DH, DH);

		}
		
		if (pH < 0){
			xH = 1; // going forward
			revH = 2; // RHS completed
		}
		if (pH>50){
			xH = 0; // going backward
		}
		if (xH == 1) {
			pH = pH+1.5;
		}
		if (xH == 0) {
			pH = pH-1.5;
		}

		if (revH==2){
			pH = 0;
			xH = 1;
		}

	}

	if (revH == 2 ){
		for (i = 0; i<(60-s); i++){
			fill(0,0,0)
			ellipse(400+i*DH, 400, DH, DH);
		}
			
		for (i=1; i<s+1; i++){
			fill(0,0,0)
			ellipse(400-i*DH-pH, 400, DH, DH);

		}
		
		if (pH < 0){
			xH = 1; // going backwards
			revH = 1; // LHS completed
		}
		if (pH>50){
			xH = 0; // going forwards
		}
		if (xH == 1) {
			pH = pH+1.5;
		}
		if (xH == 0) {
			pH = pH-1.5;
		}

		if (revH==1){
			pH = 0;
			xH= 1;
		}
	}
	




}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)
