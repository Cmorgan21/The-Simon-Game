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