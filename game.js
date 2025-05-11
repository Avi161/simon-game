var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function() {
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id"); 
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer((userClickedPattern.length)-1);
});

var nextSequence = function(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randNum = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randNum];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

var checkAnswer = function(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if ((currentLevel + 1) === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern = [];
        } 
    } else{ 
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },2000);
        $("#level-title").text("Press Any Key to Start");
        startOver();
    } 
}

var startOver = function(){ 
    started = false;
    level = 0;
    gamePattern = [];
}

var playSound = function(name){
    var audioClick = new Audio("sounds/" + name + ".mp3");
    audioClick.play();
}

var animatePress = function(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

