class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question1 = new Question()
      question1.display();
 
 
     
    }
  }

  play(){
   // question1.hide();
        background("SkyBlue");
    fill("Red");
    textSize(35);
    
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
     // debugger;
            var display_Answers = 230;
      fill("Blue");
      textSize(25);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allContestants){
      //  debugger;
        var correctAns1 = "2";
        var correctAns2 = "1";
        var correctAns3 = "2";
        var correctAns4 = "2";
        var correctAns5 = "4";
        if (correctAns1 === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          if (correctAns2 === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          if (correctAns3 === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          if (correctAns4 === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
          if (correctAns5 === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");


        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }

}
