var ground1,theif,aadi
//var story1=1, story2=2, play,end;
//var gamestate=story1;
var start=0;
var play=1;
var end=2;
var gamestate=start
function preload() {


escapekeyimg = loadImage("imagesofprisonergame/escapekey.png")
escaperoomimg = loadImage("imagesofprisonergame/escaperoomimg.jpg")
jailcell = loadImage("imagesofprisonergame/jailcell.jpg")
policestationimg = loadImage("imagesofprisonergame/policestation.jpg")
mainimg = loadAnimation("imagesofprisonergame/runningmain.png","imagesofprisonergame/standingmain.png")
policemanimg = loadAnimation("imagesofprisonergame/standingpoliceman.png","imagesofprisonergame/walkingpoliceman.png")
theifimg = loadAnimation("imagesofprisonergame/standingtheif.png","imagesofprisonergame/walkingtheif.png")
theifstaticimg=loadAnimation("imagesofprisonergame/standingtheif.png")
mainstaticimg=loadAnimation("imagesofprisonergame/standingmain.png")
}

function setup (){
createCanvas(1850,970)
ground1 - createSprite(width/2,800,width,20)
theif = createSprite(300,950,40,140)
theif.addAnimation("clueman",theifstaticimg)
theif.scale=2
aadi = createSprite(1100,700,40,140)
aadi.addAnimation("main",mainstaticimg)
aadi.scale=1.2
aadi.mirrorX(-1)
   
// if (gamestate===story1)
// {
//     text("Press Space key to know the story",400,300)  
//     console.log(gamestate)
//     gamestate=story2                  
//     }
//     if (gamestate===story2){
//        if (keyDown("space")){
//     text("I can help you escape prison", 500,500)
//        console.log(gamestate)
// } 
// }
}
function draw(){
background(jailcell)
//theif.collide(ground1)
textSize(30)
fill("red")
text(mouseX, 300,300)
text(mouseY,300,320)
    textSize(50)
    fill("black")
    if(gamestate===start)
    {
    text("Press Space key to know the story", 400, 300)
   
    if (keyDown("space")) {
     text("I can help you escape prison", 500,500)
        text("Press *z* to continue", 400, 330)
    }
    if (keyDown("z")){
        text(" What do I have to do?",500,500)
 text("Press *x* to continue", 400, 360)
    }
    if (keyDown("x"))
    {
        text("You need to serach for the keys without being ",500,600)
        text("caught by the policeman. Make sure you find it before the buzzer rings.", 500, 670)
        text("Press *k* to Search for the keys",400,400)
    }

    if(keyDown("k")){
        gamestate=play
    }

}
if (gamestate===play){
    console.log("search the keys")
    background(escaperoomimg)
    textSize(30)
    fill("red")
    text(mouseX, 300, 300)
    text(mouseY, 300, 320)
    theif.visible=false
    aadi.changeAnimation("moving", mainimg)
    if (keyDown("a")){
        aadi.x=aadi.x-2
        
    }
    if (keyDown("d")){
        aadi.x=aadi.x+2
    }
    if (keyDown("w") && aadi.y>=630){
        aadi.y=aadi.y-2
    }
    if (keyDown("s")&& aadi.y>=630){
        aadi.y=aadi.y+2
    }
}

    drawSprites()
}