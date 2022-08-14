var colors=["red", "green", "blue", "yellow"];
var gamePattern=[];
var userPattern=[];
var level=1;

function nextColor(){
var nextSequence = Math.floor(Math.random()*4);
var randomColor = colors[nextSequence];
return randomColor;
}

var newColor=nextColor();



$("body").on("keydown", keyboardPressed);
$(".btn").click(buttonClick);



function keyboardPressed() {
  if ($("h1").text()==="Press A Key to Start") {
    $("h1").text("Level 1");
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

function showTile(key){
  $("#"+key).addClass("pressed");
  setInterval(() => {
    $("#"+key).removeClass("pressed");
  }, 100);
}

function playMusic(key) {
  var sound=new Audio("sounds/"+key+".mp3");
  sound.play();
}
function buttonClick(event) {  
  var button= event.target.id;
  userPattern.push(button);
  showTile(button);
    playMusic(button);
    
}