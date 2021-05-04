class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
      
    });

  }

  //it is static when the function is not dependant on any specific OBJECT(dependant on the player crossing the finish line, not a button)
  
  getRank(){

      var carsFinished = database.ref('CarsAtEnd');
      carsFinished.on("value", (data)=>{

        this.rank = data.val();

      });
  }

  //it is not specific on any specific PLAYER(dependant on the button, not the player's actions)

  static updateRank(rank){

    database.ref('/').update({

      CarsAtEnd: rank

    })


  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
