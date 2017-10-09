var s = 0;
var m = 0;
var h = 0;
var M = 0;
var x2  = 0;

var x = 0;
var start = 0;
var p = 16;

function setup(){
	createCanvas(600,501);
	background(0);
	frameRate(60);
	m = minute();
	M = -40*m;

}

function draw(){
	background(0);
	textSize(150);
	fill(100);

	s = second();
	m = minute();
	if (s==0){
		start = 1;
		x = 0;
	}
	if (m==0){
		x2 = 0;
		M = 0 ;
	}




	if (start == 1){

	
	
		// s = second();
		s = second();
		if (s ==1){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("I", 400-x, 450);
		}
		s= second();
		if (s ==2){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("II", 400-x, 450);
		}
		s= second();
		if (s ==3){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("III", 400-x, 450);
		}
		s= second();
		if (s ==4){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("  IV", 400-x, 450);
		}
		s= second();
		if (s ==5){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("   V", 400-x, 450);
		}
		s= second();
		if (s ==6){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("   VI", 400-x, 450);
		}
		s= second();
		if (s ==7){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("   VII", 400-x, 450);
		}
		s= second();
		if (s == 8){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("   VIII", 400-x, 450);
		}
		// 9 and 10 don't work
		s= second();
		if (s ==9){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("       IX     ", 400-x+p, 450);
		}
		s= second();
		if (s ==10){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        X        ", 400-x+p, 450);
		}
		s= second();
		if (s ==11){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        XI", 400-x+p, 450);
		}
		s= second();
		if (s ==12){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        XII", 400-x+p, 450);
		}
		s= second();
		if (s ==13){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        XIII", 400-x+p, 450);
		}
		s= second();
		if (s ==14){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        X  IV", 400-x+p, 450);
		}
		s= second();
		if (s ==15){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        X   V", 400-x+p, 450);
		}
		s= second();
		if (s ==16){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("        X   VI", 400-x+p, 450);
		}
		s= second();
		if (s ==17){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("V      X   VII", 400-x, 450);
		}
		s= second();
		if (s ==18){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("V      X   VIII", 400-x, 450);
		}
		s= second();
		if (s ==19){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("V      X      ", 400-x, 450);
			text ("VX             IX", 400-x+p, 450);
		}
		s= second();
		if (s ==20){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX", 400-x, 450);
		}
		s= second();
		if (s ==21){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XXI", 400-x, 450);
		}
		s= second();
		if (s ==22){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XXII", 400-x, 450);
		}
		s= second();
		if (s ==23){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XXIII", 400-x, 450);
		}
		s= second();
		if (s ==24){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX  IV", 400-x, 450);
		}
		s= second();
		if (s ==25){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX   V", 400-x, 450);
		}
		s= second();
		if (s ==26){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX   VI", 400-x, 450);
		}
		s= second();
		if (s ==27){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX   VII", 400-x, 450);
		}
		s= second();
		if (s ==28){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX   VIII", 400-x, 450);
		}
		s= second();
		if (s ==29){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VX         XX        ", 400-x, 450); 
			text ("VXXX                IX", 400-x+p, 450);
		}
		s= second();
		if (s ==30){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX", 400-x, 450);
		}
		s= second();
		if (s ==31){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXXI", 400-x, 450);
		}
		s= second();
		if (s ==32){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXXII", 400-x, 450);
		}
		s= second();
		if (s ==33){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXXIII", 400-x, 450);
		}
		s= second();
		if (s ==34){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX  IV", 400-x, 450);
		}
		s= second();
		if (s ==35){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX   V", 400-x, 450);
		}
		s= second();
		if (s ==36){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX   VI", 400-x, 450);
		}
		s= second();
		if (s ==37){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX   VII", 400-x, 450);
		}
		s= second();
		if (s == 38){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXX          XXX   VIII", 400-x, 450);
		}
		s= second();
		if (s ==39){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXX          XXX   ", 400-x, 450);
			text ("VXXXXXXV               IX", 400-x, 450);
		}
		s= second();
		if (s ==40){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL", 400-x, 450);
		}
		s= second();
		if (s ==41){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XLI", 400-x, 450);
		}
		s= second();
		if (s ==42){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XLII", 400-x, 450);
		}
		s= second();
		if (s ==43){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XLIII", 400-x, 450);
		}
		s= second();
		if (s ==44){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL  IV", 400-x, 450);
		}
		s= second();
		if (s ==45){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL   V", 400-x, 450);
		}
		s= second();
		if (s ==46){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL   VI", 400-x, 450);
		}
		s= second();
		if (s ==47){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL   VII", 400-x, 450);
		}
		s= second();
		if (s ==48){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL   VIII", 400-x, 450);
		}
		s= second();
		if (s ==49){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VXXXXXX             XL      ", 400-x, 450);
			text ("VVXXXXXXXL                  IX", 400-x, 450);
		}
		s = second();
		if (s ==50){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L", 400-x, 450);
		}
		s = second();
		if (s ==51){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  LI", 400-x, 450);
		}
		s = second();
		if (s ==52){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  LII", 400-x, 450);
		}
		s = second();
		if (s ==53){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  LIII", 400-x, 450);
		}
		s = second();
		if (s ==54){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L  IV", 400-x, 450);
		}
		s = second();
		if (s ==55){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L   V", 400-x, 450);
		}
		s = second();
		if (s ==56){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L   VI", 400-x, 450);
		}
		s = second();
		if (s ==57){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L   VII", 400-x, 450);
		}
		s = second();
		if (s ==58){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L   VIII", 400-x, 450);
		}
		s = second();
		if (s ==59){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400-x, 450);
			fill(250);
			text ("VVXXXXXXXL                  L      ", 400-x, 450);
			text ("VVXXXXXXXLLV                       IX", 400-x+14, 450);
		}

		x = x+.6;


/// MINUTES

// s = second();
		m = minute();
		if (m ==1){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("I", 400+M-x2, 300);
		}
		m = minute();
		if (m ==2){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("II", 400+M-x2, 300);
		}
		m = minute();
		if (m ==3){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("III", 400+M-x2, 300);
		}
		m = minute();
		if (m ==4){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("  IV", 400+M-x2, 300);
		}
		m = minute();
		if (m == 5){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==6){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==7){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("   VII", 400+M-x2, 300);
		}
		m = minute();
		if (m == 8){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("   VIII", 400+M-x2, 300);
		}
		// 9 and 10 don't work
		m = minute();
		if (m ==9){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX",400+M-x2, 300);
			fill(250);
			text("       IX          ", 400+M-x2+16, 300);
		}
		m = minute();
		if (m ==10){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        X        ", 400+M-x2, 300);
		}
		m = minute();
		if (m ==11){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        XI", 400+M-x2+16, 300);
		}
		m = minute();
		if (m ==12){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        XII", 400+M-x2+16, 300);
		}
		m = minute();
		if (m ==13){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        XIII", 400+M-x2+16, 300);
		}
		m = minute();
		if (m ==14){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        X  IV", 400+M-x2+16, 300);
		}
		m = minute();
		if (m ==15){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("V      X   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==16){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("V      X   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==17){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("        X   VII", 400+M-x2+p, 300);
		}
		m = minute();
		if (m ==18){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("V      X   VIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==19){
			fill(100);
			text ("IIIVIIIXIIIVIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("V      X      ", 400+M-x2, 300);
			text ("VX             IX", 400+M-x2+p, 300);
		}
		m = minute();
		if (m ==20){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("V          XX", 400+M-x2+p, 300);
		}
		m = minute();
		if (m ==21){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XXI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==22){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XXII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==23){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XXIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==24){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX  IV", 400+M-x2, 300);
		}
		m = minute();
		if (m ==25){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==26){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==27){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX   VII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==28){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX   VIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==29){
			fill(100);
			text ("IIIVIIIXIIIXXIIIVIIIXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VX         XX        ", 400+M-x2, 300);
			text ("VXXX                IX", 400+M-x2+p, 300);
		}
		m = minute();
		if (m ==30){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX", 400+M-x2, 300);
		}
		m = minute();
		if (m ==31){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXXI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==32){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXXII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==33){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXXIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==34){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX  IV", 400+M-x2, 300);
		}
		m = minute();
		if (m ==35){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==36){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==37){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX   VII", 400+M-x2, 300);
		}
		m = minute();
		if (m == 38){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXX          XXX   VIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==39){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIVIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXX          XXX   ", 400+M-x2, 300);
			text ("VXXXXXXV               IX", 400+M-x2, 300);
		}
		m = minute();
		if (m ==40){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL", 400+M-x2, 300);
		}
		m = minute();
		if (m ==41){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XLI", 400+M-x2, 300);
		}
		sm = minute();
		if (m ==42){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XLII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==43){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XLIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==44){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL  IV", 400+M-x2, 300);
		}
		m = minute();
		if (m ==45){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==46){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==47){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL   VII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==48){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL   VIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==49){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIIIXLIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VXXXXXX             XL      ", 400+M-x2, 300);
			text ("VVXXXXXXXL                  IX", 400+M-x2+p, 300);
		}
		m = minute();
		if (m ==50){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX",400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L", 400+M-x2, 300);
		}
		m = minute();
		if (m ==51){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  LI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==52){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX",400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  LII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==53){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  LIII",400+M-x2, 300);
		}
		m = minute();
		if (m ==54){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L  IV", 400+M-x2, 300);
		}
		m = minute();
		if (m ==55){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L   V", 400+M-x2, 300);
		}
		m = minute();
		if (m ==56){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L   VI", 400+M-x2, 300);
		}
		m = minute();
		if (m ==57){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L   VII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==58){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L   VIII", 400+M-x2, 300);
		}
		m = minute();
		if (m ==59){
			fill(100);
			text ("IIIVIIIXIIIXXIXXXIIIXLIIIVIILIIIVIIIX", 400+M-x2, 300);
			fill(250);
			text ("VVXXXXXXXL                  L      ", 400+M-x2, 300);
			text ("VVXXXXXXXLV                        X", 400+M-x2, 300);
		}


	x2 = x2+.6/60;


	}


	h = hour();
	if (h>12){
		h = h-12;
	}
	if (h ==1){
		fill(100);
		text ("IVIIIXIIIVXIIIII", 0, 150);
		fill(250);
		text ("     I", 16, 150);
	}
	if (h ==2){
		fill(100);
		text ("IVIIIXIIIVXIIIII", 0, 150);
		fill(250);
		text ("    II", 16, 150);
	}
	if (h ==3){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text ("   III", 16, 150);
	}
	if (h ==4){
		fill(100);
		text ("IVIIIXIIIVXVIIIII", 0, 150);
		fill(250);
		text ("IV", 0, 150);
	}

	if (h ==5){
		fill(100);
		text ("IVIIIXIIIVXVIIIII", 0, 150);
		fill(250);
		text (" V", 0, 150);
	}
	if (h ==6){
		fill(100);
		text ("IVIIIXIIIVXVIIIII", 0, 150);
		fill(250);
		text (" VI", 0, 150);
	}
	if (h ==7){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text (" VII", 0, 150);
	}
	if (h ==8){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text (" VIII", 0, 150);
	}
	if (h ==9){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text ("     IX", 16, 150);
	}
	if (h ==10){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text ("      X", 16, 150);
	}
	if (h ==11){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text ("      XI", 16, 150);
	}
if (h ==12){
		fill(100);
		text ("IVIIIXIIVXIVIIIII", 0, 150);
		fill(250);
		text ("      XII", 16, 150);
	}


	console.log(second() + "," + M + "," + x2 + "," + minute());
}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)