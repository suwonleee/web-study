const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
const likeButton = document.querySelector('.like');

//addeventlistener("행동", "함수/기능")
//"keypress" 는 엔터키
todoInput.addEventListener("keypress", function(e){ //' (e) => '  동일 문구
    // console.log(e) -> 엔터 했을 때 키 속성을 볼 수 있다. 엔터했을때 키코드가 '13'이 된다.
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
    span.appendChild(icon1);
    span.appendChild(icon2);
    return span;
}