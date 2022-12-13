
const SETTING_TIME = 10;
let words = []
let time;
let isPlaying = false;
let score = 0;
let timeInterval;
let isReady = false;

const url = "https://random-word-api.herokuapp.com/word?number=100";
const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

//functions
runToast = (text) => {
    const option = {
        text: text,
        duration: 3000,
        newWindow: true,
        gravity: 'top',
        position: "left",
        background: "linear-gradient(-45deg, #360033, #0b8793)"
    }
    Toastify(option).showToast()
}


//단어 가져오고 게임 시작
const getWords = () => {
    axios.get(url).then(res =>{
        words = res.data.filter(word => word.length < 10)
        button.innerText = '게임 시작!'
        button.classList.remove('loading');
        isReady = true;
    }).catch(err => console.log(err)) //아니라면 에러라고 출력
}

const init = () =>{
    time = SETTING_TIME;
    getWords();
}

const countDown = () => {
    if (time > 0){
        time--;
    } else {
        clearInterval(timeInterval) // 시간이 꼬이는걸 방지하기 위해 클리어 해줌
        isPlaying = false; //시간 지나면 점수가 오르는 버그 없애기 위해
    }
    timeDisplay.innerText = time;
}
const run = ()=>{ //버튼을 누르면 시작
    clearInterval(timeInterval)
    if (isReady === false){
        return;
    }
    timeInterval = setInterval(countDown, 1000) //인터벌을 진행할 시간 -> 1000 === 1초마다
    wordInput.value = ""
    score = 0;
    time = SETTING_TIME;
    scoreDisplay.innerText = score;
    isPlaying = true;
}
const checkMatch = () => {
    if (!isPlaying) {
        return;
    }
    // 소문자로 바꾸고 정답인지 확인하는 경우
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++
        runToast(wordDisplay.innerText) // 정답일 때 팝업 나오게 하기
        time = SETTING_TIME;
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
