//DOM 
const container = document.querySelector(".image-container")
const startButton = document.querySelector(".start-button")
const gameText = document.querySelector(".game-text")
const playTime = document.querySelector(".play-time")

// 드래그를 들었을 때 변화를 담는 객체 변수
const dragged = {
    el: null, //엘리먼트는 아무것도 없어서 el 
    class: null,
    index: null
}


container.addEventListener("dragstart", e =>{
    // console.log(e)
    const obj = e.target;
    console.log({obj})
    dragged.el = obj
    dragged.class = obj.className; //어떤 클래스를 들어다 놨는지
    // spread operator -> 배열로 바꾸는 방식 -> [... ]으로 작성
    dragged.index = [...obj.parentNode.children].indexOf(obj)
})

container.addEventListener('dragover', e =>{
    // console.log(e)
    e.preventDefault()  //드래그 놨을 때 dragover 영향력을 없애기 위해
})
container.addEventListener('drop', e =>{
    const obj = e.target; // 몇번에 올려놨는지 제대로 확인
    // 옮겨다 놨을 때 기존 값들이 밀리지 않도록 변경
    let orifinPlace;
    let isLast = false;
    if(dragged.el.nextSibling){ //
        originPlace = dragged.el.nextSibling;
    } else {
        originPlace = dragged.el.prviousSiling;
        isLast = true;
    }
    obj.before(dragged.el) // 드래그로 옮겨서 놓기
    const droppedIndex = [...obj.parentNode.children].indexOf(obj)
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    // 제일 마지막 요소라면
    isLast ? originPlace.after(obj) : originPlace.before(obj)
})