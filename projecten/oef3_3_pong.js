let xbal = 400; 
let ybal = 400; 
let xspeed = 0;
let yspeed = -0;
let straal = 20;
let kleur = 0;
let points = 0;
let plus = 1;
let rectx = 75;
let recty = 20;

function setup() {
    createCanvas(800, 800);
}
function keyPressed(){
    // start game
    if (keyCode === 32 && points === 0) {
        ybal = (height/2);
        xbal = (width/2);
        xspeed = 5;
        yspeed = -5;
    }
}
function draw() {
    background("red");
    fill(kleur);
    ellipse(xbal, ybal, straal, straal);
    rect(mouseX - 37,700,rectx,recty);
    xbal += xspeed;
    ybal += yspeed;
    if (xbal >= (width) - straal && xspeed > 0) {
        xspeed = -xspeed;
    } 
    else if (xbal <= straal && xspeed < 0) {
        xspeed = -xspeed;
    }
    if (ybal <= straal && yspeed < 0) {
        yspeed = -yspeed;
    }
    if(xbal > (mouseX - 37) && xbal < (mouseX + 37))
        console.log("above paddle ", ybal, yspeed);
    if (xbal > (mouseX - 37) && xbal < (mouseX + 37) && ybal >= 700  && ybal <= 700 + 20 && yspeed > 0){
        
        if (xspeed < 0){
            xspeed -= plus;
        }
        if (xspeed > 0){
            xspeed += plus;
        }
        yspeed = -yspeed;
        kleur = random(0,255);
        points += 1;
    }
    if (points === 0 && xspeed === 0){
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text("START GAME",width/2,height/2);
    }
    if (ybal > height){
       fill(255);
       textAlign(CENTER);
        textSize(32);
        text("game over " + "\n" + "you scored " + points, width/2, height/2);
    }
    if (ybal <= 800 && xspeed != 0 && yspeed != 0){ 
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text(points, width/2, height/2);
    } 
}