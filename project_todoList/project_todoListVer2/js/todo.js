const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

//addeventlistener("행동", "함수/기능")
//"keypress" 는 엔터키
todoInput.addEventListener("keypress", function(e){ //' (e) => '  동일 문구
    // console.log(e) -> 엔터 했을 때 키 속성을 볼 수 있다. 엔터 했을 때 키코드가 '13'이 된다.
    if (e.keyCode === 13) { //엔터키를 한다면
        generateTodo(todoInput.value) //함수로 안에 값 불러오기
        todoInput.value = "" //입력 받고난 뒤 빈값으로 바꾸기
    }
})

const generateTodo = (todo)=>{
    const li = document.createElement("li");
    const likeSpan = generateLike(); // 좋아요 불러와주는 함수 불러오기
    li.appendChild(likeSpan);
    const itemSpan = generateItem(todo); // 아이템 불러와주는 함수 불러오기
    li.appendChild(itemSpan);
    const manageSpan = generateManage(); // 관리창 불러와주는 함수 불러오기
    li.appendChild(manageSpan);
    todoList.appendChild(li);
}
//좋아요 불러와주는 함수
const generateLike = ()=>{
    const span = document.createElement("span");
    span.classList.add("todo-like")
    const icon = document.createElement("m")
    icon.classList.add("material-icons")
    icon.classList.add("like")
    icon.innerText = "favorite_border"
    span.appendChild(icon);
    // 좋아요 아이콘 색 변화 조건문 만들기
    icon.addEventListener("click", () => {
        // 삼항 연산자. ver
        icon.innerText === 'favorite_border' ?
            icon.innerText = "favorite" : icon.innerText = "favorite_border"
        // 일반 조건문. ver
        // if (icon.innerText === 'favorite_border') {
        //     icon.innerText = "favorite"
        // } else {
        //     icon.innerText = "favorite_border"
        // }
    })

    console.log(span)
    return span;
}
// 아이템 불러와주는 함수
const generateItem = (todo)=>{
    const span = document.createElement('span');
    span.classList.add("todo-item")
    span.innerText = todo;
    return span;
}
// 관리창 불러와주는 함수
const generateManage = ()=>{
    const span = document.createElement("span");
    span.classList.add("todo-manage")
    const icon1 = document.createElement("i")
    const icon2 = document.createElement("i")
    icon1.classList.add("material-icons")
    icon1.classList.add("check")
    icon1.innerText = "check"
    icon2.classList.add("material-icons")
    icon2.classList.add("clear")
    icon2.innerText = "clear"

    // manage 에 관리 기능 넣어주기
    icon1.addEventListener("click",(e) => {
        //icon 안에 span 안에 li 를 선택
        const li = e.target.parentNode.parentNode; 
        li.classList.add('done')
        console.log(li)
    })

    // 삭제하는 기능 넣어주기
    icon2.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        todoList.removeChild(li)
    })
    span.appendChild(icon1);
    span.appendChild(icon2);
    return span;
}