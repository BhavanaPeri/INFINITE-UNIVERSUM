class Travel{
    constructor(){

    }
    getState(){
        gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Start()
          form.display();
        }
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
    
        background(0);
    
        var x = 100 ;
        var y;
  
        for(var plr in allPlayers){        
            camera.position.y = displayHeight/2;
            camera.position.x = player.x;
         
       console.log("mad");
       if(gameState === 2) {
        text("You've Reached your Destination",600,100);
        
        }
      }
    keyPressed();
      drawSprites();
    }
    }
    function keyPressed(){
        switch(keyCode){
            case UP_ARROW: player.y = player.y-20;
            break;
            case DOWN_ARROW: player.y = player.y+20;
            break;
            case RIGHT_ARROW: player.x = player.x+20;
            break;
            case LEFT_ARROW: player.x = player.x-20;
            break;
            }
   }