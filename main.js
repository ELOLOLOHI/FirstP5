function preload(){

}

function setup(){
    canvas=createCanvas(900,700);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.hide();
}

function draw(){
fill("rgb(198, 99, 76)");
strokeWeight(2);
rect(7, 150, 60, 450);

fill("rgb(198, 99, 76)");
strokeWeight(2);
rect(800, 150, 60, 450);

fill("rgb(198, 99, 76)");
strokeWeight(2);
rect(80, 150, 700, 60);

fill("rgb(198, 99, 76)");
strokeWeight(2);
rect(80, 540, 700, 60);

strokeWeight(4);
stroke("rgb(255, 158, 147)")

fill("rgb(255, 144, 147)");
circle(55, 180, 113, 115);

fill("rgb(255, 144, 147)");
circle(830, 180, 120, 120);

fill("rgb(255, 144, 147)");
circle(822, 553, 123, 123);

fill("rgb(255, 144, 147)");
circle(55, 553, 113, 115);

image(vid, 150, 230, 600, 300);
}

function takepic(){
   save('weirdpic.png');
    }