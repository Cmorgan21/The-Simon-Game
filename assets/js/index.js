// jshint esversion: 6

// When Window has loaded it will appear and slowly move to the center from the page
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Event Triggered");
    let welcomeBoard = document.getElementById("welcome-container");
    // allows the element to start off from 0 and gradually appear when the DOM loads
    welcomeBoard.style.opacity = "1";
    // adds a class name which creates an effect
    welcomeBoard.classList.add("welcome-container-transition");
    let welcomeNav = document.getElementById("navigation-container-index");
    welcomeNav.style.opacity = "1";
    welcomeNav.classList.add("navigation-container-transition");
    let footer = document.getElementById("footer-container");
    footer.style.opacity = "1";
    footer.classList.add("navigation-container-transition");
});