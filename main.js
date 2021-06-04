function preload(){

}

function setup(){
canvas= createCanvas(640, 480);
canvas.position(150, 150);
img= createCapture(VIDEO);
img.hide();

filter="";

}

function take_snapshot(){
save('filtered_image.png')

}


function apply(){
filter= document.getElementById("filter").value;
}

function draw(){
image(img, 130, 75, 400, 325);
tint(filter);
fill(255,0,0);
stroke(0,128,0);
circle(50,50,80);

fill(0,128,0);
stroke(0,128,0);
rect(90,40,460,20);

fill(255,0,0);
stroke(0,128,0);
circle(590,50,80);

fill(0,128,0);
stroke(0,128,0);
rect(40,90,20,350);

fill(255,0,0);
stroke(0,128,0);
circle(50,450,80);

fill(0,128,0);
stroke(0,128,0);
rect(90,440,475,20);

fill(255,0,0);
stroke(0,128,0);
circle(590,450,80);

fill(0,128,0);
stroke(0,128,0);
rect(580,90,20,320);
}
