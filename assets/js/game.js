// jshint esversion: 6

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Event Triggered");
    let gameContainer = document.getElementById("game-container");
    let nameForm = document.getElementById("name-form");
    let gameNavigation = document.getElementById("navigation-container-game");
    console.log(gameContainer);
    gameContainer.classList.add("hide");
    // adds a class of hide which hides the game container when page is loaded
    nameForm.style.opacity = "1";
    nameForm.classList.add("game-container-transition");
    gameNavigation.style.opacity = "1";
    gameNavigation.classList.add("game-container-transition");
    // allows all content to appear as content is loaded and a class that has a transition effect is added
});

// When form is submitted this will hide the form and display the game board
function startPage () {
    let form = document.getElementById("name-form");
    let gameContainer = document.getElementById("game-container");
    let name = document.getElementById("name");
    if (name.value === "") {
      alert("Please enter a name");
    } else {
      form.style.display = "none";
      gameContainer.classList.remove("hide");
      form.classList.add("hide");
      console.log("startPage Function was executed");
      /* 
      console.logging this allows me to ensure the function was executed
      call the addName function once everything has been complete
      */
      addName();
    }
}

// After addName function gets called this will retrieve the value of the form value then add it onto the span to display name 
// takes the input value submitted and then adds it to the span element nested within the game container
function addName () {
    let name = document.getElementById("name");
    let nameCard = document.getElementById("player-name");
    nameCard.innerHTML = (name.value);
    document.getElementById("volume-icon").style.display = "block";
    // sets name within local storage to be accessed to be put on another page
    localStorage.setItem("name", (name.value));
    // console.logs to ensure that it has stored
    console.log(localStorage.getItem("name"));
    // calls the startGame function after addName function is completed
    console.log("addName function was executed");
    startGame();
}

// const array of colors 
const colors = ["blue", "red", "yellow", "green"];
// game sequence where the games chosen color will be stored
let gameSequence = [];
// user sequence where users chosen color will be stored
let userSequence = [];
// Default of game started is false to disable users from being able to play unless activiated
let gameStarted = false;
// will store all scores and will only display the highest score out of all the 
let highScore = [];
// score will initially equal zero
let score = 0;

function startGame() {
    //changes the innerHTML to a call to action to intiate game
    document.getElementById("game-title").innerHTML = "Press Any Key to get Started!";
    // Listens for an event which will be a key press to invoke handleKeyPress function
    document.addEventListener("keypress", function handleKeyPress() {
      // creates an if statement to check if game started is false - if it is. Score will be set to zero gameSequence function will be called to intialize game and gameStarted will then be set to true
      if (!gameStarted) {
        score = 0;
        nextSequence();
        gameStarted = true;
        document.getElementById("game-title").innerHTML = "Simon Game";
        console.log("Game Started");
        
      }
    });
}

function nextSequence () {
    // user sequence gets reset everytime that the game sequence adds a new color to the sequence
    userSequence = [];
    // score is displayed
    document.getElementById("score").innerHTML = (score);
    // A random color is generated from 0-3
    let randomColor = Math.floor(Math.random() * 4);
    // allows a random color to be chosen from the colors array
    let gameColor = colors[randomColor];
    // pushes the random color to the gameSequence array
    gameSequence.push(gameColor);
    // Sends the game color as a parameter to the functions
    playSound(gameColor);
    buttonAnimation(gameColor);
    // console logs the gameSequence to ensure that the gameSequence has added the new random color
    console.log(gameSequence);
    console.log("nextSequence function was executed");
}

// for each box a click event listener is added with the paramater of box
document.querySelectorAll(".box").forEach(function(box) {
    box.addEventListener("click", function() {
      // using this to target the attribute's ID that has been clicked
      let color = this.getAttribute("id");
      // pushes the users chosen color to the userSequence's array
      userSequence.push(color);
      // logs the userSequence to ensure that it has been added
      console.log(userSequence);
      // takes the color value as a parameter and sends them to the functions 
      playSound(color);
      buttonAnimation(color);
      // - 1 to target the last index as length will be 1 extra
      checkAnswer(userSequence.length -1);
    });
});

function checkAnswer(color) {
    // checks to see if game sequence and user sequence matches
    if (userSequence[color] === gameSequence[color]) {
      if (userSequence.length === gameSequence.length) {
        document.getElementById("game-title").innerHTML = "Correct!";
        let gameBody = document.getElementById("body-game");
        gameBody.classList.add("correct");
    
        //plays victory audio
        const soundEnabled = localStorage.getItem("soundEnabled") === "true";
        if (soundEnabled) {
          new Audio("./assets/sounds/success.mp3").play();
          console.log("Success audio was executed");
        }
    
        /* 
         if it all matches - this will then console log succes for validation
         increment score
         call nextSequence function and loop through the code again
        set time out so it will move straight on with the code 
        */
        console.log("Success");
        score++;
        setTimeout(() => {
          document.getElementById("game-title").innerHTML = "Simon Game";
          gameBody.classList.remove("correct");
          nextSequence();
        }, 1000);
      }
    } else {
      // checks if the game has started before applying the wrong class
      if (gameStarted) {
        // console logs wrong for validation
        // adds a classlist of wrong to display a red effect 
        console.log("Wrong");
        const soundEnabled = localStorage.getItem("soundEnabled") === "true";
        if (soundEnabled) {
          new Audio("assets/sounds/wrong.mp3").play();
          console.log("wrong audio was executed");
    
        }
    
        
        let gameBody = document.getElementById("body-game");
        gameBody.classList.add("wrong");
        setTimeout(function() {
          gameBody.classList.remove("wrong");
        }, 1000);
        // calls the startOver function where it will reset everything
        startOver();
      }
      // indicates to user that they inputted wrong sequence and then changes text back to call to action to start game
      document.getElementById("game-title").innerHTML = "Wrong! Try Again";
      setTimeout(function() {
        document.getElementById("game-title").innerHTML = "Press Any Key to get Started!";
      }, 1200);
    }
}