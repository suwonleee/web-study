//DOM 
const container = document.querySelector(".image-container")
const startButton = document.querySelector(".start-button")
const gameText = document.querySelector(".game-text")
const playTime = document.querySelector(".play-time")
const tiles = document.querySelectorAll(".image-container > li")
const cheatKey = document.querySelector(".cheat-key");

cheatKey.addEventListener("click",function() {
    [...container.children].forEach(child => {
        child.innerText = child.getAttribute("data-type")
    })
})

let isPlaying = false;
let timeInterval = null;
let time = 0;

// 드래그를 들었을 때 변화를 담는 객체 변수
const dragged = {
    el: null, //엘리먼트는 아무것도 없어서 el 
    class: null,
    index: null
}

startButton.addEventListener("click",()=>{
    setGame()
})

function setGame() {
    time = 0;
    gameText.style.display = "none"
    timeInterval = setInterval(() => {
        time++;
        playTime.innerText = time;
    }, 1000)
    const gameTile = shuffle([...tiles]); //배열 형식의 내용물만 꺼내주기 위해 spread operator 사용
    container.innerHTML = "";
    //하나씩 섞어주기
    gameTiles.forEach(tile => {
        container.appendChild(tile)
    })


}

function shuffle(array){
    let index = array.length - 1;
    while (index > 0){
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex] = array[randomIndex], array[index]]
        index --;
    }
    console.log(array)
}

function checkStatus() {
    const currentList = [... container.children]

    const unmatched = currentList. filter((list, index) =>{
        return Number(list.getAttribute("data-type")) !== index
    })
    if (unmatched.length === 0) {
        isPlaying = false;
        clearInterval(timeInterval);
        gameText.style.display = "block"
    }
}


container.addEventListener("dragstart", e =>{
    // console.log(e)
    const obj = e.target;
    console.log({obj})
    dragged.el = obj
    dragged.class = obj.className; //어떤 클래스를 들어다 놨는지
    // spre~ad operator -> 배열로 바꾸는 방식 -> [... ]으로 작성
    dragged.index = [...obj.parentNode.children].indexOf(obj)
})

container.addEventListener('dragover', e =>{
    // console.log(e)
    e.preventDefault()  //드래그 놨을 때 dragover 영향력을 없애기 위해
})
container.addEventListener('drop', e =>{
    const obj = e.target; // 몇번에 올려놨는지 제대로 확인
    // 옮겨다 놨을 때 기존 값들이 밀리지 않도록 변경
    let originPlace; // 몇번을 잡았는지 변수에 지정 
    let isLast = false;
    if(dragged.el.nextSibling){ //만약 다음 변수가 없으면
        originPlace = dragged.el.nextSibling;
    } else {
        originPlace = dragged.el.prviousSiling;
        isLast = true; 
    }
    obj.before(dragged.el) // 드래그로 옮겨서 놓기
    const droppedIndex = [...obj.parentNode.children].indexOf(obj)
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    // 제일 마지막 요소라면 뒤에다가 놓고, 그게 아니라면 앞에다가 놓기
    isLast ? originPlace.after(obj) : originPlace.before(obj)
})