var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    sound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "purple";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "red"
    
    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "darkblue"

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = -11;
    ball.velocityX = -11;

    
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
     
      
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "purple";
    }
    


    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        sound.play();
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        //write code to bounce off ball from the block3
    
        ball.shapeColor = "red";
        
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        //write code to bounce off ball from the block4
    
        ball.shapeColor = "darkblue";
        sound.stop(); 
    }

    drawSprites();
}
