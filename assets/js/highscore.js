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