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

//$("body").on("keydown", keyboardPressed);
$(".btn").click(buttonClick);
$(".start-btn").click(startPressed);

function startPressed() {
  gamePattern.push(newColor);
  if (
    $("h1").text() === "" ||
    $("h1").text() === "Game over"
  ) {
    var startLevel = ++level;
    $("h1").text("Level " + startLevel);
    showTile("start")
    setTimeout(() => {
      showNewtile(newColor);
      playMusic(newColor);
    }, 500);         
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
  setTimeout(() => {
    $("#" + key).removeClass("pressed");
  }, 100);
}

function showNewtile(key){
   $("#" + key).fadeIn(100).fadeOut(100).fadeIn(100);
 }

function playMusic(key) {
  var sound = new Audio("sounds/" + key + ".mp3");
  sound.play();
}
function buttonClick(event) {
  var button = event.target.id;
  userPattern.push(button);  
  if (userPattern[index] === gamePattern[index]) {
    setTimeout(() => {
      showTile(button);
    playMusic(button);
    }, 500);
    
    if (userPattern.length !== gamePattern.length) {
      ++index;
    } else {      
      ++level;
      newColor = nextColor();
      gamePattern.push(newColor);
      setTimeout(() => {        
        showNewtile(newColor);
      playMusic(newColor);
      userPattern = [];
      index = 0;
      $("h1").text("Level " + level);
      }, 1500);      
    }
  } else {
    showTile(button);
    playMusic("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 500);
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