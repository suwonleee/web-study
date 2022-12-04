// *******************************************************
// DOM 선택하기
// const output = document.getElementById("output");
// const wrapper = document.getElementsByClassName("wrapper");
//위 두줄과 동일한 코드 
const button = document.querySelector('#button');
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll(".item")
const target = document.querySelector(".target")
const title = document.querySelector('h1')
const userID = document.querySelector('userID')
const point = document.querySelector('.point')


// output 버튼 안에 텍스트를 변경하기
// button.innerText = "보내기"
// wrapper.innerText[0] = "html"  //똑같이 바꿔주려면 0번 인덱스이므로 이렇게 바꿔줘야한다.

// 클래스는 하나가 아닌 여러개이기 때문에, Collection으로 출력되게 된다.
// console.log(wrapper);

// target 값 색 바꾸기
target.style.color = "blue";
target.style.fontSize = "25px";
// console.log({ target }) -> target 값 안에 뭐를 활용 가능한지 확인 가능ㅇ

//addEventlistener
// 두개 인자를 받으며, (행동, 결과반응)


title.addEventListener('click', function() {
    title.style.color = "red"
});
userID.addEventListener('input', function(e) {
    target.innerText = this.value
})
button.addEventListener('click', ()=>{
    target.style.width = "50px"
    target.style.height = "50px"
    target.style.backgroundColor = userID.value;
    target.style.borderRadius = "50%"

})

//li 태그는 items로 묶여있기에 foreach 반복문으로 적용
items.forEach(item =>{
    item.addEventListener("click", () => {
        Point.innerHTML = item.innerText //클릭하면 텍스트가 나오게 만들기
    })
})