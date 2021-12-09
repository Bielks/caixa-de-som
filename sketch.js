var canvas;
var block1,block2,block3,block4;
var invisibleBlock1, invisibleBlock2, invisibleBlock3, invisibleBlock4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 7;
    ball.velocityY = 8;

    invisibleBlock1 = createSprite(0, 590, 360, 30);
    invisibleBlock1.visible = false;

    invisibleBlock2 = createSprite(295, 590, 360, 30);
    invisibleBlock2.visible = false;

    invisibleBlock3 = createSprite(510, 590, 360, 30);
    invisibleBlock3.visible = false;

    invisibleBlock4 = createSprite(725, 590, 360, 30);
    invisibleBlock4.visible = false;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(invisibleBlock1);
    ball.bounceOff(invisibleBlock2);
    ball.bounceOff(invisibleBlock3);
    ball.bounceOff(invisibleBlock4);

    
    
    if(block1.x - ball.x < ball .width/2 + block1.width/2
        && ball.x - block1.x < ball.width/2 + block1.width/2
        && block1.y - ball.y < block1.height/2 +ball.height/2
        && ball.y - block1.y < ball.height/2 + block1.height/2){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.x - ball.x < ball .width/2 + block2.width/2
        && ball.x - block2.x < ball.width/2 + block2.width/2
        && block2.y - ball.y < block2.height/2 +ball.height/2
        && ball.y - block2.y < ball.height/2 + block2.height/2){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;

        music.stop();
    }

    if(block3.x - ball.x < ball .width/2 + block3.width/2
        && ball.x - block3.x < ball.width/2 + block3.width/2
        && block3.y - ball.y < block3.height/2 +ball.height/2
        && ball.y - block3.y < ball.height/2 + block3.height/2){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.x - ball.x < ball .width/2 + block4.width/2
        && ball.x - block4.x < ball.width/2 + block4.width/2
        && block4.y - ball.y < block4.height/2 +ball.height/2
        && ball.y - block4.y < ball.height/2 + block4.height/4){
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}