var dX = 65
var DX = 150

var S = 0


function setup(){
	createCanvas(501,501);
}


function draw(){
	background(200)
	fill(100)
	noStroke()
	rect(20,150,445,150);

	fill(0,0,0)
	ellipse(168,200,10,10)
	ellipse(168,250,10,10)
	ellipse(168+DX,200,10,10)
	ellipse(168+DX,250,10,10)


	stroke(255,0,0)
	strokeWeight(5)

//	line (40,175,80,175) // 11
//	line (85,180,85,220) // 12
//	line (85,230,85,270) // 13
//	line (40,275,80,275) // 14
//	line (35,230,35,270) // 15
//	line (35,180,35,220) // 16
//	line (40,225,80,225) // 17

//	line (40+dX,175,80+dX,175) // 21
//	line (85+dX,180,85+dX,220) // 22
//	line (85+dX,230,85+dX,270) // 23
//	line (40+dX,275,80+dX,275) // 24
//	line (35+dX,230,35+dX,270) // 25
//	line (35+dX,180,35+dX,220) // 26
//	line (40+dX,225,80+dX,225) // 27

//	line (40+DX,175,80+DX,175) // 31
//	line (85+DX,180,85+DX,220) // 32
//	line (85+DX,230,85+DX,270) // 33
//	line (40+DX,275,80+DX,275) // 34
//	line (35+DX,230,35+DX,270) // 35
//	line (35+DX,180,35+DX,220) // 36
//	line (40+DX,225,80+DX,225) // 37

//	line (40+dX+DX,175,80+dX+DX,175) // 41
//	line (85+dX+DX,180,85+dX+DX,220) // 42
//	line (85+dX+DX,230,85+dX+DX,270) // 43
//	line (40+dX+DX,275,80+dX+DX,275) // 44
//	line (35+dX+DX,230,35+dX+DX,270) // 45
//	line (35+dX+DX,180,35+dX+DX,220) // 46
//	line (40+dX+DX,225,80+dX+DX,225) // 47

//	line (40+2*DX,175,80+2*DX,175) // 51
//	line (85+2*DX,180,85+2*DX,220) // 52
//	line (85+2*DX,230,85+2*DX,270) // 53
//	line (40+2*DX,275,80+2*DX,275) // 54
//	line (35+2*DX,230,35+2*DX,270) // 55
//	line (35+2*DX,180,35+2*DX,220) // 56
//	line (40+2*DX,225,80+2*DX,225) // 57

//	line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
//	line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
//	line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
//	line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
//	line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
//	line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
//	line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
	

	if ((hour()>9) && (hour()<20)){
		// Draw an A
		stroke(255,0,0)
		line (40,175,80,175) // 11
		line (85,180,85,220) // 12
		line (85,230,85,270) // 13
		line (35,230,35,270) // 15
		line (35,180,35,220) // 16
		line (40,225,80,225) // 17
		stroke(100)
		line (40,275,80,275) //14
	}
	if (hour()>=20){
		stroke(255,0,0)
		line (40,175,80,175) // 11
		line (85,180,85,220) // 12
		line (85,230,85,270) // 13
		line (40,275,80,275) //14
		line (35,230,35,270) // 15
		line (35,180,35,220) // 16
		line (40,225,80,225) // 17
	}


	H = hour()

	if ((H==0) || (H== 10)|| (H == 20)){
		stroke (255,0,0)
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (40+dX,175,80+dX,175) // 21
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (40+dX,275,80+dX,275) // 24
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		
	}

	if ((H==1) || (H == 11)|| (H == 21) ){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (40+dX,275,80+dX,275) // 24
		
	}
	if ((H==2) || (H== 12)|| (H== 22)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		line (40+dX,275,80+dX,275) // 24
	}
	if ((H==3) || (H == 13)|| (H == 23)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (40+dX,275,80+dX,275) // 24	
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		stroke(100)
		line (85+dX,230,85+dX,270) // 23
		line (85+dX,180,85+dX,220) // 22
		line (40+dX,225,80+dX,225) // 27
		
	}
	if ((H==4) || (H == 14)|| (H== 24)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (40+dX,275,80+dX,275) // 24	
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		stroke(100)
		line (40+dX,225,80+dX,225) // 27
	}
	if ((H==5) || (H == 15)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (40+dX,275,80+dX,275) // 24
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
	
	}
	if ((H==6) || (H == 16)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (40+dX,275,80+dX,275) // 24
	}
	if ((H==7) || (H == 17)){
		stroke (255,0,0)
		line (40+dX,175,80+dX,175) // 21
		line (85+dX,230,85+dX,270) // 23
		line (40+dX,275,80+dX,275) // 24
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (85+dX,180,85+dX,220) // 22
	}
	if ((H==8) || (H == 18)){
		stroke (255,0,0)
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
		stroke(100)
		line (40+dX,175,80+dX,175) // 21
		line (40+dX,275,80+dX,275) // 24	
	}
	if ((H==9) || (H == 19)){
		stroke (255,0,0)
		line (85+dX,180,85+dX,220) // 22
		line (85+dX,230,85+dX,270) // 23
		stroke(100)
		line (40+dX,175,80+dX,175) // 21
		line (40+dX,275,80+dX,275) // 24
		line (35+dX,230,35+dX,270) // 25
		line (35+dX,180,35+dX,220) // 26
		line (40+dX,225,80+dX,225) // 27
	}


	// minutes
	M = minute()

	if ((M==0) || (M == 10)|| (M == 20)|| (M == 30)|| (M == 40)|| (M == 50)){
		stroke(255,0,0)
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (40+dX+DX,275,80+dX+DX,275) // 44
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
	}
	if ((M==1) || (M == 11)|| (M == 21)|| (M == 31)|| (M == 41)|| (M == 51)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (40+dX+DX,275,80+dX+DX,275) // 44
	}
	if ((M==2) || (M== 12)|| (M== 22)|| (M== 32)|| (M == 42)|| (M == 52)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		line (40+dX+DX,275,80+dX+DX,275) // 44
	}
	if ((M==3) || (M == 13)|| (M == 23)|| (M == 33)|| (M == 43)|| (M == 53)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (40+dX+DX,275,80+dX+DX,275) // 44
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		stroke(100)
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (40+dX+DX,225,80+dX+DX,225) // 47
	}
	if ((M==4) || (M == 14)|| (M== 24)|| (M== 34)|| (M == 44)|| (M== 54)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (40+dX+DX,275,80+dX+DX,275) // 44
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		stroke(100)
		line (40+dX+DX,225,80+dX+DX,225) // 47
	}


	if ((M==5) || (M == 15)|| (M == 25)|| (M == 35)|| (M == 45)|| (M == 55)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41	
		line (40+dX+DX,275,80+dX+DX,275) // 44
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
	}

	if ((M==6) || (M== 16)|| (M== 26)|| (M == 36)|| (M == 46)|| (M== 56)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41	
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (40+dX+DX,275,80+dX+DX,275) // 44
	}

	if ((M==7) || (M == 17)|| (M == 27)|| (M == 37)|| (M == 47)|| (M== 57)){
		stroke(255,0,0)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (40+dX+DX,275,80+dX+DX,275) // 44	
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (85+dX+DX,180,85+dX+DX,220) // 42
	}

	if ((M==8) || (M== 18)|| (M == 28)|| (M== 38)|| (M == 48)|| (M == 58)){
		stroke(255,0,0)
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
		stroke(100)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (40+dX+DX,275,80+dX+DX,275) // 44
	}

	if ((M==9) || (M == 19)|| (M == 29)|| (M == 39)|| (M== 49)|| (M== 59)){
		stroke(255,0,0)
		line (85+dX+DX,180,85+dX+DX,220) // 42
		line (85+dX+DX,230,85+dX+DX,270) // 43
		stroke(100)
		line (40+dX+DX,175,80+dX+DX,175) // 41
		line (40+dX+DX,275,80+dX+DX,275) // 44
		line (35+dX+DX,230,35+dX+DX,270) // 45
		line (35+dX+DX,180,35+dX+DX,220) // 46
		line (40+dX+DX,225,80+dX+DX,225) // 47
	}


	m = floor(minute()/10);

	if (m==0){
		stroke(255,0,0)
		line (40+DX,225,80+DX,225) // 37
		stroke(100)
		line (40+DX,175,80+DX,175) // 31
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33
		line (40+DX,275,80+DX,275) // 34
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
	}

	if (m== 1){
		stroke(255,0,0)
		line (40+DX,175,80+DX,175) // 31
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
		line (40+DX,225,80+DX,225) // 37
		stroke(100)
		line (40+DX,275,80+DX,275) // 34
	}
	if (m ==2){

		stroke(255,0,0)
		line (40+DX,175,80+DX,175) // 31
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
		line (40+DX,225,80+DX,225) // 37
		line (40+DX,275,80+DX,275) // 34
	}
	if (m == 3){
		stroke(255,0,0)
		line (40+DX,175,80+DX,175) // 31
		line (40+DX,275,80+DX,275) // 34		
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
		stroke(100)
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33	
		line (40+DX,225,80+DX,225) // 37	
	}
	if (m == 4){
		stroke(255,0,0)
		line (40+DX,175,80+DX,175) // 31
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33
		line (40+DX,275,80+DX,275) // 34		
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
		stroke(100)
		line (40+DX,225,80+DX,225) // 37	
	}
	if (m == 5){
		stroke(255,0,0)
		line (40+DX,175,80+DX,175) // 31		
		line (40+DX,275,80+DX,275) // 34		
		line (35+DX,230,35+DX,270) // 35
		line (35+DX,180,35+DX,220) // 36
		line (40+DX,225,80+DX,225) // 37
		stroke(100)
		line (85+DX,180,85+DX,220) // 32
		line (85+DX,230,85+DX,270) // 33
	
	}






	//seconds
	S = second()


	if ((S==0) || (S == 10)|| (S == 20)|| (S == 30)|| (S == 40)|| (S == 50)){
		stroke(255,0,0)
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
	}
	if ((S==1) || (S == 11)|| (S == 21)|| (S == 31)|| (S == 41)|| (S == 51)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
	}
	if ((S==2) || (S== 12)|| (S== 22)|| (S== 32)|| (S == 42)|| (S == 52)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
	}
	if ((S==3) || (S == 13)|| (S == 23)|| (S == 33)|| (S == 43)|| (S == 53)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		stroke(100)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		
	}
	if ((S==4) || (S == 14)|| (S== 24)|| (S== 34)|| (S == 44)|| (S == 54)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		stroke(100)
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
	}


	if ((S==5) || (S == 15)|| (S == 25)|| (S == 35)|| (S == 45)|| (S == 55)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
	}

	if ((S==6) || (S == 16)|| (S == 26)|| (S == 36)|| (S == 46)|| (S== 56)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
	}

	if ((S==7) || (S == 17)|| (S == 27)|| (S == 37)|| (S == 47)|| (S== 57)){
		stroke(255,0,0)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		
	}

	if ((S==8) || (S == 18)|| (S == 28)|| (S== 38)|| (S == 48)|| (S == 58)){
		stroke(255,0,0)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
		stroke(100)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
	}

	if ((S==9) || (S == 19)|| (S == 29)|| (S == 39)|| (S== 49)|| (S== 59)){
		stroke(255,0,0)
		line (85+dX+2*DX,180,85+dX+2*DX,220) // 62
		line (85+dX+2*DX,230,85+dX+2*DX,270) // 63
		stroke(100)
		line (40+dX+2*DX,175,80+dX+2*DX,175) // 61
		line (40+dX+2*DX,275,80+dX+2*DX,275) // 64
		line (35+dX+2*DX,230,35+dX+2*DX,270) // 65
		line (35+dX+2*DX,180,35+dX+2*DX,220) // 66
		line (40+dX+2*DX,225,80+dX+2*DX,225) // 67
	}


	s= floor(second()/10);

	if (s==0){
		stroke(255,0,0)
		line (40+2*DX,225,80+2*DX,225) // 57
		stroke(100)	
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53
		line (40+2*DX,175,80+2*DX,175) // 51		
		line (40+2*DX,275,80+2*DX,275) // 54
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56	
	}
	if (s== 1){
		stroke(255,0,0)
		line (40+2*DX,175,80+2*DX,175) // 51
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56
		line (40+2*DX,225,80+2*DX,225) // 57
		stroke(100)
		line (40+2*DX,275,80+2*DX,275) // 54
	}
	if (s ==2){
		stroke(255,0,0)
		line (40+2*DX,175,80+2*DX,175) // 51
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56
		line (40+2*DX,225,80+2*DX,225) // 57
		line (40+2*DX,275,80+2*DX,275) // 54
	}
	if (s == 3){
		stroke(255,0,0)
		line (40+2*DX,175,80+2*DX,175) // 51
		line (40+2*DX,275,80+2*DX,275) // 54
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56
		stroke(100)
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53
		line (40+2*DX,225,80+2*DX,225) // 57		
	}
	if (s == 4){
		stroke(255,0,0)
		line (40+2*DX,175,80+2*DX,175) // 51
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53
		line (40+2*DX,275,80+2*DX,275) // 54
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56
		stroke(100)		
		line (40+2*DX,225,80+2*DX,225) // 57	
	}
	if (s == 5){
		stroke(255,0,0)
		line (40+2*DX,175,80+2*DX,175) // 51		
		line (40+2*DX,275,80+2*DX,275) // 54
		line (35+2*DX,230,35+2*DX,270) // 55
		line (35+2*DX,180,35+2*DX,220) // 56
		line (40+2*DX,225,80+2*DX,225) // 57
		stroke(100)	
		line (85+2*DX,180,85+2*DX,220) // 52
		line (85+2*DX,230,85+2*DX,270) // 53	
	}





	console.log(S);



// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)







	console.log("it is: " + hour() +" hours and " + minute() + " minutes and " + second() + " seconds")

}

// number of bounces in 30 seconds = Hours (big ball), Minutes (middle), or seconds (small)