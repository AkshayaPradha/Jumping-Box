function isTouching(sprite1,sprite2){
    if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2 &&
      sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2 &&
      sprite1.y - sprite2.y <= sprite1.height/2 + sprite2.height/2 &&
      sprite2.y - sprite1.y <= sprite1.height/2 + sprite2.height/2) {
      //movingRect.shapeColor = "red";
      //fixedRect.shapeColor = "red";
      return true;
    }else{
      //movingRect.shapeColor = "green";
      //fixedRect.shapeColor = "green";
      return false;
    }
  }
  
  function bounce(sprite1,sprite2){
    //when it is touching in x direction, give the opposite x velocity
    if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2 &&
      sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2 ){
        sprite1.velocityX = -sprite1.velocityX;
        sprite2.velocityX = -sprite2.velocityX;
    }
    if(sprite1.y - sprite2.y <= sprite1.height/2 + sprite2.height/2 &&
      sprite2.y - sprite1.y <= sprite1.height/2 + sprite2.height/2) {
        sprite1.velocityY = -sprite1.velocityY;
        sprite2.velocityY = -sprite2.velocityY;
      }
       
  }