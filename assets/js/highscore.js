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

// Sort the scoreSystem array in descending order from score
scoreSystem.sort((a, b) => b.score - a.score);

// sets the variable to empty so back ticks can inject html code into it using += expression
let tableBody = "";
// loops through all the stored objects and accessesing them and injecting them into a HTML using template literals
for (let i = 0; i < scoreSystem.length; i++) {
    tableBody += `
    <tr>
        <td class="tr-user-info"><h3>${scoreSystem[i].userName}</h3></td>
        <td class="tr-user-info"><h3>${scoreSystem[i].score}</h3></td>
    </tr>`;
}

// injects the tableBody variable into table variable to display within the highscore.html page
const table = `
<h1>High Score</h1>
<table>
    <thead>
        <tr>
            <th class="th-user-info"><h2>Name</h2></th>
            <th class="th-user-info"><h2>Score</h2></th>
        </tr>
    </thead>
    <tbody>
        ${tableBody}
    </tbody>
</table>`;

// Stores the scoreSystem variable into a string format to be stored within localStorage and is updated with any new modifications
console.log("Updated scoreSystem in Local Storage:", scoreSystem);
localStorage.setItem("scoreSystem", JSON.stringify(scoreSystem));
// injects template literals into the innerHTML of the container
document.getElementById("highscore-container").innerHTML = table;