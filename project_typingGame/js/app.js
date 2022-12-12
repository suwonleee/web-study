
const SETTING_TIME = 5;
let words = []
let time;
let isPlaying = false;
let score = 0;
let timeInterval;
let isReady = false;

const url = "https://random-word-api.herokuapp.com/word?num=100";
const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

//functions
const getWords = () => {
    axios.get(url).then(res =>{
        words = res.data.filter(word => word.length < 10)
        button.innerText = '게임 시작!'
        button.classList.remove('loading');
        isReady = true;
    }).catch(err => console.log(err))
}

const init = () =>{
    time = SETTING_TIME;
    getWords();
}

const countDown = () => {
    if (time > 0){
        time--;
    } else {
        clearInterval(timeInterval)
        isPlaying = false;
    }
    timeDisplay.innerText = time;
}
const run = ()=>{ //버튼을 누르면 시작
    if (isReady === false){
        return
    }
    timeInterval = setInterval(countDown, 1000)
    wordInput.value = ""
    score = 0;
    scoreDisplay.innerText = score;
    isPlaying = true;
}
const checkMatch = () => {
    if (!isPlaying) {
        return;
    } 
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++
        time = SETTING_TIME
        wordInput.value = ""
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex]
    }
    scoreDisplay.innerText = score;
}   

//event handler
wordInput.addEventListener('input', checkMatch)

//getting ready
init()
