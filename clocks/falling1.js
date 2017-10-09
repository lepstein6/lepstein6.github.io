var y1 = 0;
var y2 = 0;
var i = 0;
var s = 0;

function setup(){
	createCanvas(500,500);
	background(200);
}


function draw(){

	background(200);
	noFill();
	rect(25,129,450,201);
	rect(55,129,120,201);

	fill(0,0,0);
	s = second();
	for (i=0;i<s;i++){
		if (i<20){
			x = 56-25
			y = 325-10*i
		}
		if(i>=20 && i<40){
			x = 66-25
			y = 325-10*(i-20)
		}
		if (i>=40){
			x = 76-25
			y = 325-10*(i-40)
		}

		ellipse (x,y,10,10)

	}

	m = minute();
	for (i=0;i<m;i++){
		if (i<10){
			x = 56+35-25
			y = 320-20*i
		}
		if(i>=10 && i<20){
			x = 76+35-25
			y = 320-20*(i-10)
		}
		if (i>=20 && i<30){
			x = 96+35-25
			y = 320-20*(i-20)
		}
		if (i>=30 && i<40){
			x = 116+35-25
			y = 320-20*(i-30)
		}
		if (i>=40 && i<50){
			x = 136+35-25
			y = 320-20*(i-40)
		}		
		if (i>=50){
			x = 156+35-25
			y = 320-20*(i-50)
		}

		ellipse (x,y,20,20)
	}




	h = hour();
	for (i=0;i<h;i++){
		if (i<4){
			x = 56+35-25+135
			y = 305-50*i
		}
		if(i>=4 && i<8){
			x = 106+35-25+135
			y = 305-50*(i-4)
		}
		if (i>=8 && i<12){
			x = 156+35-25+135
			y = 305-50*(i-8)
		}
		if (i>=12 && i<16){
			x = 206+35-25+135
			y = 305-50*(i-12)
		}
		if (i>=16 && i<20){
			x = 256+35-25+135
			y = 305-50*(i-16)
		}		
		if (i>=20){
			x = 306+35-25+135
			y = 305-50*(i-20)
		}


		ellipse (x,y,50,50)


	}


	ellipse (x,y,50,50)


	// ellipse(56,y1,10,10) 
	// if (y1<325){
	// 	y1 = y1+1;
	// }

	// ellipse(56,y2,10,10) 
	// if (y2<315){
	// 	y2 = y2+1;
	// }


	console.log(s);
	console.log("it is: " + hour() +" hours and " + minute() + " minutes and " + second() + " seconds")

}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)