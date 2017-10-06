

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
var Tmax;
var Tmin;

var dx = 50;

var h;
var m;
var s;

function setup() {
  // see pixeldensity in reference
  pixelDensity(3.0);
  /*
  this is the logical resolution for iphone 6 without the browser chrome at the top
  adjust it for your phone accordingly
  */

  createCanvas(375,667); 
  background(225);
  query();

  fill(0);
  strokeWeight(2);
  line(50,0, 50+2*dx,667);
  line(50+dx,0, 50,667);
  line(50+2*dx,0, 50,667);
  line(50+3*dx,0, 50,667);
  //line(0,5,400,40);

  run();

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


  // set sunrise

  var sunrise = new Date(day.sunriseTime*1000);

  var hR = sunrise.getHours();
  var mR = sunrise.getMinutes();
  var sR = sunrise.getSeconds();

  console.log(hR + "," + mR + "," + sR);

  
  x_sunrise = (hR + mR/60 + sR/3600)*width/24;


  // set sunset
  var sunset = new Date(day.sunsetTime*1000);
  var hS = sunset.getHours();
  var mS = sunset.getMinutes();
  var sS = sunset.getSeconds();

  x_sunset = (hS + mS/60 + sS/3600)*width/24;



  // set data needed for circles



  T = currentWeather.temperature;
  H = currentWeather.humidity;
  P = currentWeather.precipProbability;
  W = currentWeather.windSpeed;
  A = currentWeather.apparentTemperature;
  C = currentWeather.cloudCover;
  B = currentWeather.windBearing;

  Tmax = day.temperatureMax;
  Tmin = day.temperatureMin;


}




function run(){

  noStroke();
  fill(225);
  rect(220,580, 90,30);

  strokeWeight(2);
  fill(100);
  h = hour();
  m = minute();
  if (m<10){
    m = "0" + m;
  }
  s = second();
  if (s<10){
    s = "0"+s;
  }
  textFont("Verdana",[20])
  text(h + ":" + m + ":" + s, 220, 600);


  yMax = map(Tmax,100,0,0,220);
  xMax = (yMax-1334)/-13.34
  ellipse(xMax,yMax,5,5);

  yMin = map(Tmin,100,0,0,220);
  xMin = (yMin-1334)/-13.34
  ellipse(xMin,yMin,5,5);

  yT = map(T, 100, 0 , 0 , 220);
  xT = (yT-1334)/-13.34;
  ellipse(xT,yT,5,5);

  yP = map(P,1,0,10,330);
  xP = (yP-1000.5)/-6.67
  ellipse(xP,yP,5,5);

  yH = map(H,1,0,10,400);
  xH = (yH - 889.5)/-4.45
  ellipse(xH,yH,5,5);


  stroke(120);
  line(xMax,yMax, 400,random(100,600));
  line(xMin,yMin, 400,random(100,600));
  line(xT,yT, 400,random(100,600));
  line(xP,yP, 0,random(100,600));
  line(xH,yH, 0,random(100,600));

  console.log(Tmax + "," + Tmin + "," + T + "," + P + "," + H);


}

function mousePressed(){
  background(225);
  query();

  
  strokeWeight(2);
  stroke(0);
  line(50,0, 50+2*dx,667);
  line(50+dx,0, 50,667);
  line(50+2*dx,0, 50,667);
  line(50+3*dx,0, 50,667);
  //line(0,5,400,40);

  run();

}

