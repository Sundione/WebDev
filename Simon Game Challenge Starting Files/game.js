var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var level = 0;
var started = false;

$("body").on("keydown", function(Event){
    if(!(started)){
        started = true;
        nextSequence();
        $("#level-title").html("Level 0");
    }
})

$(".btn").on("click", function(){
    buttonAnimation(this.id);
    makeSound(this.id);
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    makeSound(randomChosenColour);
    level++;
    $("#level-title").html("Level " + (level-1));
    userClickedPattern = [];
}

function buttonAnimation(key) {
    $("#"+key).toggleClass("pressed");
   
    setTimeout(function(){
        $("#"+key).toggleClass("pressed");
    },100);
    // makeSound(key);
}

function makeSound(key) {
    switch(key){
      case "blue":
          var blue = new Audio("sounds/blue.mp3");
          blue.play();
          break;
      case "red":
          var red = new Audio("sounds/red.mp3");
          red.play();
          break;
      case "green":
          var green = new Audio("sounds/green.mp3");
          green.play();
          break;
      case "yellow":
          var yellow = new Audio("sounds/yellow.mp3");
          yellow.play();
          break;  
      default: console.log();
    }
  
  }

function checkAnswer (currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
       console.log("success");
    }else {
        console.log("wrong");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").toggleClass("game-over");
        setTimeout(function(){
            $("body").toggleClass("game-over");
        },200);
        $("#level-title").html("Game Over [Score: " + (level-1) + "]" + ",Press Any Key to Restart");
        startOver();
    }
    if(userClickedPattern.length === level){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}

function startOver(){
    gamePattern = [];
    level = 0;
    started = false;
}
