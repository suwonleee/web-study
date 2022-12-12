const SETTING_TIME = 5;
let word = [];
let time;
let isPlaying = false;
let score = 0;

const wordDisplay = document.querySelector(".word-display")
const wordInput = document.querySelector(".word-input")
const scoreDisplay = document.querySelector(".score")
const timeDisplay = document.querySelector(".time")
const button = document.querySelector(".button")

//function
const checkMatch = ()=>{
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++
    }
    scoreDisplay.innerText = score;
}   

//event handler
wordInput.addEventListener('input', checkMatch)
    
