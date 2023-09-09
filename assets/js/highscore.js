// jshint esversion: 6


// stores username and highscore into a variable in new javascript page
const userName = localStorage.getItem("name");
const score = localStorage.getItem("HighScore");
let scoreSystem = [];

/* 
allows all objects to be stored into an array where they can all be accessed
if there is data set with the variable scoreSystem it will unstringy the data allowing it to be accessed
*/ 
if (localStorage.getItem("scoreSystem")) {
    scoreSystem = JSON.parse(localStorage.getItem("scoreSystem"));
    console.log("scoreSystem:", scoreSystem);
}

/* 
pushes usernames and scores stored from local storage and inserts them into an object
 displays when variable is entered and stored equalling to truthy value
*/
if (userName && score) {
    // Check if the user is already in the scoreSystem array
    const existingUserIndex = scoreSystem.findIndex(user => user.userName === userName);
    if (existingUserIndex === -1) {
        scoreSystem.push({
            userName: userName,
            score: score
        });
    } else {
        // Update the score if the user already exists
        scoreSystem[existingUserIndex].score = score;
    }
}
