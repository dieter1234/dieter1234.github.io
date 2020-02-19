let xbal = 600; 
let ybal = 350; 
let xspeed = 0;
let yspeed = -0;
let straal = 20;
let kleur = 0;
let pointsr = 0;
let pointsl = 0;
let rectxl = 20;
let rectyl = 100;
let rectxr = 20;
let rectyr = 100;
let yrechts = 350;
let ylinks = 350;
let kleurl = 100;
let kleurr = 200;

function setup() {
    createCanvas(1200, 700);
}
function keyPressed(){
    // reset ball
    if (keyCode === 32) {
        ybal = (height/2);
        xbal = (width/2);
        xspeed = 5;
        yspeed = -5;
    }
    // reset points
    if (keyCode === DELETE){
        pointsr = 0;
        pointsl = 0;
        xspeed = 0;
        yspeed = 0;
        ybal = (height/2);
        xbal = (width/2);
    }
}
function draw() {
    background("red");
    fill(kleur);
    ellipse(xbal, ybal, straal, straal);
    fill(kleurl);
    rect(100,ylinks - 50,rectxl,rectyl);
    fill(kleurr);
    rect(1100,yrechts - 50,rectxr,rectyr);
    xbal += xspeed;
    ybal += yspeed;
    // character p
    if (keyIsDown(80)) {
    yrechts -= 5;
  }
    // character m
    if (keyIsDown(77)) {
    yrechts += 5;
  }
    // character a
    if (keyIsDown(65)) {
    ylinks -= 5;
  }
    // character q
    if (keyIsDown(81)) {
    ylinks += 5;
  }
    // add points to player right
    if (xbal === (width - width)) {
         pointsr += 1;
    }
    // add points to player left
    if (xbal === width ) {
         pointsl += 1;
    }
    // top border collision
    if (ybal >= (height) - straal && yspeed > 0){
        yspeed = -yspeed;
    }
    // bottom border collision
    if (ybal <= straal && yspeed < 0 ) {
        yspeed = -yspeed;
    }
    //left player collision
    if(ybal > (ylinks - 50) && ybal < (ylinks + 50))
        console.log("above paddle ", xbal, xspeed);
    if (ybal > (ylinks - 50) && ybal < (ylinks + 50) && xbal <= 100 + 20  && xbal >= 100 && -xspeed > 0){
        xspeed = -xspeed;
        kleur = kleurl;
    }
    //right player collision
    if(ybal > (yrechts - 50) && ybal < (yrechts + 50))
        console.log("above paddle ", -xbal, -xspeed);
    if (ybal > (yrechts - 50) && ybal < (yrechts + 50) && xbal <= 1100 + 20  && xbal >= 1100 && xspeed > 0){
        xspeed = -xspeed;
        kleur = kleurr;
    }
    if (xbal < (width - width) && pointsr < 10){
       fill(255);
       textAlign(CENTER);
        textSize(32);
        text("point right", width/2, height/2);
    }
    if (xbal > (width) && pointsl < 10){
       fill(255);
       textAlign(CENTER);
        textSize(32);
        text("point left", width/2, height/2);
    }
    if (pointsr === 10){
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text("player right has won",width/2,height/2);
    }
    else if (pointsl === 10){
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text("player left has won",width/2,height/2);
    }
    if (pointsr === 0 && pointsl === 0 && xspeed === 0){
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text("START GAME",width/2,height/2);
    }
    if (xbal >= 0 && xbal <= 1200){ 
        fill(255);
        textAlign(LEFT);
        textSize(32);
        text(pointsl, 30, 30);
        
        fill(255);
        textAlign(LEFT);
        textSize(32);
        text(pointsr, 1150, 30);
    } 
}