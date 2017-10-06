

var queryResult;
var r1 = 250;
var r2 = 125;
var r3 = 75;
var time;
var x_time;
var textSizeLarge = 65;
var textSizeMed = 30;
var textSizeSmall = 14;
var sym = "\u2600";


var state = 0;

var T;
var I;
var H;
var P;
var W;
var A;
var C;
var B;


function setup() {
  // see pixeldensity in reference
  pixelDensity(3.0);
  /*
  this is the logical resolution for iphone 6 without the browser chrome at the top
  adjust it for your phone accordingly
  */

  createCanvas(375,667); 
  background(159,217,255);
  query();

  for (var x=1; x<25; x++){
    strokeWeight(3);
    line(x*width/24,667, x*width/24, 655);
  }

  console.log(sym);
  console.log(T);
  query();


}




// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/b7da10e47185eed24eb8968618f1baa6/42.361936, -71.097309';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  var day = queryResult.daily.data[0];
  

// currentWeather.summary
// ' ' .icon, temperature, precipProbability, windSpeed,
// '' . humidity, apparentTemperature, nearestStormDistance, cloudCover, windBearing
// ** Wind speed included twice --> pressure


  // set current time
  time = hour() + minute()/60 + second()/3600;
  x_time = time * width/24;
  fill (239,189,53);
  ellipse(x_time, 640, 12,12);

  // set sunrise

  var sunrise = new Date(day.sunriseTime*1000);

  var hR = sunrise.getHours();
  var mR = sunrise.getMinutes();
  var sR = sunrise.getSeconds();

  console.log(hR + "," + mR + "," + sR);

  
  x_sunrise = (hR + mR/60 + sR/3600)*width/24;
  fill (255,255,255);
  ellipse(x_sunrise, 640, 12,12);

  // set sunset
  var sunset = new Date(day.sunsetTime*1000);
  var hS = sunset.getHours();
  var mS = sunset.getMinutes();
  var sS = sunset.getSeconds();

  x_sunset = (hS + mS/60 + sS/3600)*width/24;
  fill (0);
  ellipse(x_sunset, 640, 12,12);


  // set data needed for circles


  if (currentWeather.icon == "clear-night"){
    sym = "\u263D";
  }
  if (currentWeather.icon == "clear-day"){
    sym = "\u2600";
  }
  if (currentWeather.icon == "partly-cloudy-day"){
    sym =  "\u2600"+"\u2601"
  }
  if (currentWeather.icon == "partly-cloudy-night"){
    sym =  "\u263D"+"\u2601";
  }
  if (currentWeather.icon == "cloudy"){
    sym = "\u2601";
  }
  if (currentWeather.icon == "rain"){
    sym = "\u2602";
  }
  if (currentWeather.icon == "sleet"){
    sym = "\u2744";
  }
  if (currentWeather.icon == "snow"){
    sym = "\u2744";
  }
  if (currentWeather.icon == "wind"){
    sym = "\u263D";
  }
  if (currentWeather.icon == "fog"){
    sym = "\u263D";
  }



  T = currentWeather.temperature;
  H = currentWeather.humidity;
  P = currentWeather.precipProbability;
  W = currentWeather.windSpeed;
  A = currentWeather.apparentTemperature;
  C = currentWeather.cloudCover;
  B = currentWeather.windBearing;



}




function draw(){


  if (state == 0){

    // remove other circles 
    fill(159,217,255);
    noStroke();
    rect(0,0,500,600);

    // add 1 big circle
    fill(0,0,102);
    noStroke();
    ellipse(width/2, height/2, r1);

    fill(255);
    textAlign(CENTER);
    textSize(textSizeLarge);
    text(sym, width/2, height/2);
    textSize(textSizeSmall);
    text("Cambridge,MA", width/2, height/2+45);
    

  }
  if (state == 1){

    // move 1st circle
    fill(159,217,255);
    noStroke();
    ellipse(width/2, height/2, r1);

    // redraw 1st circle
    fill(0,0,102);
    ellipse(width/2, height/2, r1);
    for (x =0; x<100; x++){
      var y = map(x, 0, 100, 0, 145);
      fill(159,217,255);
      rect(0,0,500,600);
      fill(0,0,102);
      ellipse(width/2 - x, height/2-y, r1);

    }
    fill(255);
    textAlign(CENTER);
    textSize(textSizeLarge);
    text(sym,width/2-100, height/2-145);
    textSize(textSizeSmall);
    text("Cambridge,MA", width/2-100, height/2+45-145);
    fill(0,0,102);


    // add 3 smaller circles
    ellipse(width/2+65, height/2-20-25, r2-5);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed);
    text(P+ "%",width/2+65, height/2-45+5);
    textSize(textSizeSmall-1);
    text("Precipitation", width/2+65, height/2-45+25);
    fill(0,0,102);

    ellipse(width/2-25, height/2+85-25, r2+15);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed);
    text(T + "º",width/2-25, height/2+85-25);
    textSize(textSizeSmall-1);
    text("Temperature", width/2-25, height/2+85-25+20);
    fill(0,0,102);

    ellipse(width/2+75, height/2+170-25, r2-15);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-2);
    text(W + "   ",width/2+75, height/2+170-25);
    textSize(textSizeSmall-5);
    text("                " + "mph",width/2+75, height/2+170-25);
    textSize(textSizeSmall-1);
    text("Wind Speed", width/2+75, height/2+170-25+20);
    fill(0,0,102);


  }
  if (state ==2){
    fill(159,217,255);
    noStroke();
    rect(0,0,500,600);


    ellipse(width/2, height/2, r1);
    for (y =0; y<40; y++){
      fill(159,217,255);
      rect(0,0,500,600);
      fill(0,0,102);
      ellipse(width/2-100, height/2-145-y, r1);
      ellipse(width/2+65, height/2-20-25-y, r2-5);
      ellipse(width/2-25, height/2+85-25-y, r2+15);
      ellipse(width/2+75, height/2+170-25-y, r2-15);

    }
    fill(255);
    textAlign(CENTER);
    textSize(textSizeLarge);
    text(sym,width/2-100, height/2-145-40);
    textSize(textSizeSmall);
    text("Cambridge,MA", width/2-100, height/2+45-145-40);
    fill(0,0,102);

    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed);
    text(P + "%",width/2+65, height/2-45+5-40);
    textSize(textSizeSmall-1);
    text("Precipitation", width/2+65, height/2-45+25-40);
    fill(0,0,102);

    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed);
    text(T + "º",width/2-25, height/2+85-25-40);
    textSize(textSizeSmall-1);
    text("Temperature", width/2-25, height/2+85-25+20-40);
    fill(0,0,102);

    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-2);
    text(W + "   ",width/2+75, height/2+170-25-40);
    textSize(textSizeSmall-5);
    text("                " + "mph",width/2+75, height/2+170-25-40);
    textSize(textSizeSmall-1);
    text("Wind Speed", width/2+75, height/2+170-25+20-40);
    fill(0,0,102);


    // add 4 even  smaller circles

    ellipse(width/2-130, height/2+20-40,r3+5);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-8);
    text(H+ "%",width/2-130, height/2-20+5);
    textSize(textSizeSmall-4);
    text("Humidity", width/2-130, height/2-20+20);
    fill(0,0,102);

    ellipse(width/2-105, height/2+130-40,r3-15);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-15);
    text(A + "º",width/2-105, height/2+90);
    textSize(textSizeSmall-6);
    text("Feels Like", width/2-105, height/2+90+10);
    fill(0,0,102);

    ellipse(width/2+70, height/2-148-40,r3);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-13);
    text(C+ "%",width/2+70, height/2-148-40);
    textSize(textSizeSmall-5);
    text("Cloud Cover", width/2+70, height/2-148-40+12);
    fill(0,0,102);


    ellipse(width/2+35, height/2+230-40,r3-10);
    fill(255);
    textAlign(CENTER);
    textSize(textSizeMed-13);
    text(B ,width/2+35, height/2+230-40);
    textSize(textSizeSmall-5);
    text("Wind Bearing", width/2+35, height/2+230-40+10);
    fill(0,0,102);
  }


}



// or touchStarted
function mousePressed(){


  if (mouseY>600){
      fill(0,0,102);
      textAlign(CENTER);
      textSize(40);
      textStyle(BOLD);
      var s = second();
      if (s<10){
        s = "0"+s;
      }
      var m = minute();
      if (m<10){
        m = "0"+m;
      }
      var h = hour();

      text(h + ":" + m + ":" + s, width/2, 640);
      textStyle(NORMAL);

  }
  if (state == 0 && mouseY <600) {
    state = 1;
  }
  else if (state == 1 && mouseY <600){
    state = 2;
  }
  else if (state == 2 && mouseY <600){
    state = 0;
  }

  console.log(state);

  return false;
}


function mouseReleased(){
        fill(159,217,255);
        rect(0,610, 500,45);

        fill (255,255,255);
        ellipse(x_sunrise, 640, 12,12);

        fill (0);
        ellipse(x_sunset, 640, 12,12);

        time = hour() + minute()/60 + second()/3600;
        x_time = time * width/24;
        fill (239,189,53);
        ellipse(x_time, 640, 12,12);

      }






// bouncing circles


// good colors
// light blue   fill(51,204,255);
// light purple   background(221,204,255);







