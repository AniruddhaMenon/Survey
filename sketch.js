var back;
var form ;
var database;
var ref;

function preload(){
back = loadImage("hulk.jpg");
}

function setup(){
    database = firebase.database();
    console.log(database);
    canvas = createCanvas(displayWidth,800);
    back.loadPixels();  
    ref = database.ref('Details');
    form = new Form();  

    textSize(80);
    text("Thanks for attemting my quiz",400,720);
}

function draw(){
   background(back);
    form.display();
}