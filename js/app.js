
$(document).ready(function(){
	
    var randomNum = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;
    
    //Create random number
    
    var randomNum = (Math.floor(Math.random() * 100));
    console.log("random Number =" + randomNum);

    
    $(".new").click(function(){
        newGame();
        console.log("New game clicked");
    })
    
    
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        randomNum = (Math.floor(Math.random() * 100));
        feedback("Make your guess!!");
        console.log("works fine!! new random number is " + randomNum);
    }
    
    function setCount(){
        $('#count').text(guessCount);
    }
    
    function feedback(feedback){
        $("#feedback").text(feedback);
    }
    
    function comparison() {
        if (userGuess / randomNum === 1) {
            feedback("Congrats !! You guessed number!");
            finish = true;
        } else if (Math.abs(randomNum - userGuess) > 60.5){
            feedback("Its very Cold!");
            $("body").css("background-color","#002cb3");
        } else if (Math.abs(randomNum - userGuess) > 50.5){
            feedback("Its freezing");
            $("body").css("background-color","#0038e6");
        } else if (Math.abs(randomNum - userGuess) > 40.5){
            feedback("Its cold out there !! Put a coat on!!");
            $("body").css("background-color","#3333cc");
        } else if (Math.abs(randomNum - userGuess) > 30.5){
            feedback("Its cold!!");
            $("body").css("background-color","#6600ff");
        } else if (Math.abs(randomNum - userGuess) > 20.5){
            feedback("Its warm-ish!!");
            $("body").css("background-color","#8533ff");
        } else if (Math.abs(randomNum - userGuess) > 15.5){
            feedback("Its getting-warm!!");
            $("body").css("background-color","#b84dff");
        } else if (Math.abs(randomNum - userGuess) > 10.5){
            feedback("Its warm!!");
            $("body").css("background-color","#fc0446");
        } else if (Math.abs(randomNum - userGuess) > 0.5){
            feedback("Its hot!!");
            $("body").css("background-color","#ff0404");
        } else {
            
        }
    }
    
     function checkInput() {
        if (isNaN(userGuess)) {
            alert("Please enter a number from 1 to 100!");

        } else if (userGuess === "") {
            alert("Please enter Something!!");
        } else if (userGuess < 0 || userGuess > 100) {
            alert("Please enter a number from 1 to 100!");
        } else if (userGuess === " ") {
            alert("Please enter a number!!");
        } else if (userGuess === "  ") {
            alert("Please enter a number!!");
        } else if (userGuess === "   ") {
            alert("Please enter a number!!");
        } else {
            comparison();
            console.log("User guess" + userGuess);
            $("#userGuess").val();
            guessCount++;
            setCount(guessCount);
            $('ul#guessList').append("<li>" + userGuess + "<li>");
        }

    }
    
    
    
    //validate the input number is equal to random number
    
    $("form").submit(function(e) {
        e.preventDefault();
        if (!finish) {
            userGuess = $("#userGuess").val();
            checkInput();
        } else {
            setFeedback("Please Restart the Game and Play again!!");
        }
    });
    
    
    //Count the number of attempts to guess random number
    
    
    
    
    
    //Check if the guess number is equal to random number
    
    
    //Show the number that tried to guess to make equal number to random number
    
    
    
    
    //Play a new game
    
    
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


