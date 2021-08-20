var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question1,question2,question3, contestant, quiz;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("yellow");
  console.log(contestantCount)
  if(contestantCount === 8){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
