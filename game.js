var colors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userPattern = [];
var index = 0;
var level = 0;

function nextColor() {
  var nextSequence = Math.floor(Math.random() * 4);
  var randomColor = colors[nextSequence];
  return randomColor;
}

var newColor = nextColor();

$("body").on("keydown", keyboardPressed);
$(".btn").click(buttonClick);

function keyboardPressed() {
  if (
    $("h1").text() === "Press A Key to Start" ||
    $("h1").text() === "Game over"
  ) {
    var startLevel = ++level;
    $("h1").text("Level " + startLevel);
    showTile(newColor);
    playMusic(newColor);
    gamePattern.push(newColor);
  }
}

/*function buttonClick(event) {
  var button= event.target.id;
  showTile(button);
    playMusic(button);
    userPattern.push(button);  
}*/

function showTile(key) {
  $("#" + key).addClass("pressed");
  setInterval(() => {
    $("#" + key).removeClass("pressed");
  }, 100);
}

function playMusic(key) {
  var sound = new Audio("sounds/" + key + ".mp3");
  sound.play();
}
function buttonClick(event) {
  var button = event.target.id;
  userPattern.push(button);
  if (userPattern[index] === gamePattern[index]) {
    showTile(button);
    playMusic(button);
    if (userPattern.length !== gamePattern.length) {
      ++index;
    } else {
      ++level;
      $("h1").text("Level " + level);
      newColor = nextColor();
      gamePattern.push(newColor);
      showTile(newColor);
      playMusic(newColor);
      userPattern = [];
      index = 0;
    }
  } else {
    showTile(button);
    playMusic("wrong");
    $("body").addClass("game-over");
    setInterval(() => {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game over");
    userPattern = [];
    gamePattern = [];
    level = 0;
  }
}

/*
while(level<10){
    
    
    for (let i = 0; i < gamePattern.length; i++) {
      if(userPattern[i]===gamePattern[i]){
        

    

      }else{
        showTile(button);
    playMusic("wrong");
      }
      
    }
    level++;
    newColor=nextColor();
    gamePattern.push(newColor);
    userPattern=[];

    
    

    if (userPattern.length<gamePattern.length) {
      

   
}
  }

while (gamePattern.length<10) {
    for(let i=0; i<gamePattern.length; i++){
      var button= event.target.id;
  if (button===gamePattern[i]) {
    showTile(button);
    playMusic(button);
    userPattern.push(button); 
  } else {
    showTile(button);
    playMusic("wrong");
    $("body").addClass("game-over");
    setInterval(() => {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game over")
    userPattern=[];
    gamePattern=[];
  }
    }
  }
  level++;
  $("h1").text("Level "+level);
  randomNumber();
  gamePattern.push(randomColor);
  showTile(randomColor);
  playMusic(randomColor);*/