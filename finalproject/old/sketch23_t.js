$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/AllTrials_RunningRecord.csv",
        dataType: "text",
        success: function(data) {parseData(data);}
     });
});

// this table will contain the numbers and actual data



// var margin = 150;
// this is an array that will contain all the data in form of javascript objects
var time;
var sensorReading;
var sensors = []

Cwidth = 350;
Cheight = 350;

var prompt;


// Square Coordinates
// 1st corner 
var x1 = 25;
var y1 = 25;

// var initx = 75;
// var inity = 50;

var DX = 100;
var DY = 100;

var myCar;

var index = 0;

var Cars = [];
var currentCar;

var N = 38;
var lines = 1747;


var block;

var design = 0;
var old_design = 0;

var placement = 0; 

var placedFirst = [];
var placed = 0; 

var prev_config = [];
var Bpattern = [0,0,0,0];

var timesFirst = [0,0,0,0,0,0,0,0,0];

var errorsB = [];
var timesErrors = [0,0,0,0,0,0,0,0,0];

var averagetimes = [20.1131, 21.2936,25.3039, 28.5933, 32.7752,32.9533, 40.7588, 42.8120, 43.5577, 44.9436];
var patterns = [2,1,4,6,9,3,12,8,11,10];

function parseData(data){
// print(table.getRowCount() + " total rows in table");
//  print(table.getColumnCount() + " total columns in table");

    var allTextLines = data.split(/\r\n|\n/);

    for (var i=0; i<lines; i++) 
    {
      var row = allTextLines[i].split(',');
      for (var j = 0; j<N;j++)
      {
        sensorReading = row[j];
        sensors.push(sensorReading);
      }
    }
    console.log('parsed!');


    calculateFirstPlacement();
    calculateMistakes();


var q = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(Cwidth,Cheight);  
    p.background(255);

    B1 = new p.square(1);
    B2 = new p.square(2);
    B3 = new p.square(3);
    B4 = new p.square(4);
    B5 = new p.square(5);
    B6 = new p.square(6);
    B7 = new p.square(7);
    B8 = new p.square(8);
    B9 = new p.square(9);

	Blocks = [B1, B2, B3, B4, B5, B6, B7, B8, B9];

    console.log("Blocks!");


    p.drawFirstPlacement();
 
  }




  p.drawFirstPlacement = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
  	}
  }



 

  // }

 

  p.square = function(block){
    

    var c = block;
    var r = 1;
    if (block>3 && block<7){
      var c = block - 3;
      r = 2; 
    }
    if (block>6){
      c = block - 6;
      r = 3;
    }

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {	  	
    	var maxFirst = p.max(timesFirst);
    	var int = 250/maxFirst;
    	var darkness = 250-timesFirst[block-1]*int;
    	// console.log(darkness);
    	this.c = p.color(darkness);
    }


      
    this.display = function()
    {
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
  }

}
}

var myp5 = new p5(q, 'c4');


/// Second Canvas - mistakes!!!

var h = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(350,350);  
    p.background(255);

    B_1 = new p.square(1);
    B_2 = new p.square(2);
    B_3 = new p.square(3);
    B_4 = new p.square(4);
    B_5 = new p.square(5);
    B_6 = new p.square(6);
    B_7 = new p.square(7);
    B_8 = new p.square(8);
    B_9 = new p.square(9);

  Blocks = [B_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9];

    p.drawErrors();
    

  }

  p.drawErrors = function()
  {
    p.fill(0,0,0);
    p.stroke(0,0,0);

    for(var i = 0; i<9; i++)
    {
      currentBlock = Blocks[i];
      currentBlock.light();
      // console.log(currentBlock);
      currentBlock.display();
    }
  }

    p.square = function(block){
    

    var c = block;
    var r = 1;
    if (block>3 && block<7){
      var c = block - 3;
      r = 2; 
    }
    if (block>6){
      c = block - 6;
      r = 3;
    }

    // this.x1 = x1+(c-1)*DX;
    // this.x2 = this.x1+DX;
    // this.y1 = y1+(r-1)*DY;
    // this.y2 = this.y1+DY;

    this.x1 = x1+(c-1)*DX;
    this.width = DX;
    this.y1 = y1+(r-1)*DY;
    this.height = DY;


    this.c = p.color(255,0,0);



    this.light = function()
    {     
      var maxError = p.max(timesErrors);
      var int = 250/maxError;
      var darkness = 250-timesErrors[block-1]*int;
      // console.log(darkness);
      this.c = p.color(darkness);
    }


      
    this.display = function(){
   
      p.fill(this.c);
      p.rect(this.x1,this.y1,this.width,this.height);
    }

  }

}

var myp5 = new p5(h, 'c5');



// 3rd Canvas - Time
var j = function (p){
  p.setup = function()
  {
    // p.frameRate(10);
    p.createCanvas(300,500);  
    p.background(255);

    // plot time graph

    p.strokeWeight(2);
    p.line(30,8,30,280);

    var maxTime = p.max(averagetimes);
    var dx = 24;
    p.stroke(0);
    p.strokeWeight(1.5);
    p.noFill();

    for (i=0; i<10; i++){
      var length = 200*averagetimes[i]/maxTime;
      p.rect(45,29.5+i*dx,length, 15);
    }
    
 
  }




}

var myp5 = new p5(j, 'c6');

}










calculateFirstPlacement = function()
  {
  	console.log('calculating firsts');
  	for (var l=0; l<lines; l++)
  	{
  		design = sensors[l*N+36];

  		// console.log(design);

  		if (old_design != design)
  		{
  			// console.log(design);
    		// Go through and find configurations of all blocks when it was placed
    		placement = 0; 
			for (B = 1; B<10; B++)
			{
				var Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[index*N+2+4*(B-1)],sensors[index*N+3+4*(B-1)]];
    				
    			// check if block is placed
    			if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
    				Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
    				Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
    				Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
    				Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
    				Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
    				Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
				{
					placedFirst.push(1);  // will produce 1x9 array with block numbers of each block that was placed in the first time step
					placement = 1;
					old_design = design;
				}
				else{
					placedFirst.push(0);
				}

    			if (placement == 0){
    				l = l+1;
    			}

    		 }	


    		// console.log(placedFirst);
			for (v=0; v<9; v++){
				timesFirst[v] = timesFirst[v]+placedFirst[v];
			}

				
    		placedFirst = [];




    	
    }

	console.log(timesFirst); // how many times each block is placed first, in order


  }




calculateMistakes = function()
{
  console.log('calculating mistakes');
    for (var l=0; l<lines; l++)
    {
      design = sensors[l*N+36];

      // console.log(design);

      if (design == 1){
        //prompt checkerboard
        prompt = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
      }
      if (design == 2){
        //prompt M
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1];

      }
      if (design == 3){
        //prompt Slash
        prompt = [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];
        prompt2 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1];

      }
      if (design == 4){
        //prompt Upper Left
        prompt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,];
        prompt2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,1,1,0, 0,1,1,0];

      }
      if (design == 6){
        //prompt Stary
        prompt = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0];
        prompt2 = prompt;
      }
      if (design == 8){
        //prompt Diagonal
        prompt = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
        prompt2 = prompt;
      }
      if (design == 9){
        //prompt Random
        prompt = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
        prompt2 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
      }
      if (design == 10){
        //prompt Zig Zag
        prompt = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
        promt2 = prompt;
      }
      if (design == 11){
        //prompt Square
        prompt = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1];
        promt2 = prompt;
      }
      if (design == 12){
        //prompt X
        prompt = [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
        promt2 = prompt;
      }

      // console.log(design);


      for (B = 1; B<10; B++)
      {
        
        prev_config = [sensors[(l-1)*N+4*(B-1)],sensors[(l-1)*N+1+4*(B-1)],sensors[(l-1)*N+2+4*(B-1)],sensors[(l-1)*N+3+4*(B-1)]];

        Bpattern = [sensors[l*N+4*(B-1)],sensors[l*N+1+4*(B-1)],sensors[l*N+2+4*(B-1)],sensors[l*N+3+4*(B-1)]];
            
          // check if block is placed
        if (Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==1 || 
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==1 && Bpattern[3] ==0 || 
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==0 && Bpattern[3] ==1 ||
            Bpattern[0] ==1 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==0 ||
            Bpattern[0] ==1 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==0 ||
            Bpattern[0] ==0 && Bpattern[1] ==0 && Bpattern[2] ==1 && Bpattern[3] ==1 ||
            Bpattern[0] ==0 && Bpattern[1] ==1 && Bpattern[2] ==0 && Bpattern[3] ==1 )
        {
          // Block has been placed in a configuration


          if ((Bpattern[0] == prompt[(B-1)*4] || Bpattern[0] == prompt2[(B-1)*4]) && (Bpattern[1] == prompt[(B-1)*4+1] || Bpattern[1] == prompt2[(B-1)*4+1]) && (Bpattern[2] == prompt[(B-1)*4+2] || Bpattern[2] == prompt2[(B-1)*4+2]) && (Bpattern[3] == prompt[(B-1)*4+3]||Bpattern[3] == prompt2[(B-1)*4+3])){
            errorsB.push(0);
          }
          // else if(Bpattern[0] == prompt2[(B-1)*4] && Bpattern[1] == prompt2[(B-1)*4+1] && Bpattern[2] == prompt2[(B-1)*4+2] && Bpattern[3] == prompt2[(B-1)*4+3]){
          //   errorsB.push(0);
          // }
          else if(Bpattern[0] == prev_config[0] && Bpattern[1] == prev_config[1] && Bpattern[2] == prev_config[2] && Bpattern[3] == prev_config[3]){
            errorsB.push(0);
          }
          else{
            errorsB.push(1);
          }
        }
        else{
          errorsB.push(0);
        }

      }

      for (v=0; v<9; v++)
      {
        timesErrors[v] = timesErrors[v]+ errorsB[v];
      }

      errorsB = [];

    }
    
    console.log(timesErrors);
  
}
}




