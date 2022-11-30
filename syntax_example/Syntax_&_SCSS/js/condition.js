//조건문 

// *******************************************************
// if
const x = "10";

if (x == 10) {
    console.log("x is 10");
}
//출력 된다.

if (x === 10) {
    console.log("x is 10");
} 
//출력되지 않는다. x는 문자열이기 때문에, 상수가 아니라.
//되도록 3개 쓰기 


// *******************************************************
// 코드 깔끔하게 작성하기
const age = 20;
let group = ""
if ( x > 30 ) {
    group = "senior"
} else {
    group = "junior"
}
// 삼항연산자 (조건이 두줄인 경우에 이렇게 쓰면 더 깔끔하다.)
//위 조건문을 이렇게 바꿀 수 있다.
age > 30 ? group = "senior" : group = "junior";

// *******************************************************
// switch

dogs = 'cogi'
switch (dogs) {
    case 'retriever':
        console.log("large");
        break
    case 'jindo':
        console.log("midium");
        break
    case 'cogi':
        console.log("small");
        break
    case 'siba':
        console.log("midium");
        break
    default: // 어떠한 조건에 적용되지 않을때
        console.log("not dogs")
}
// *******************************************************
// function 함수 
function add(a = 0, b = 0){ // 초기값 설정
    return a + b;
}
add()

//깔끔한 버젼 
const sum = function(a,b){ return a+b };

//arrow  화살표 버젼
const sumArrow = (c, d) => { return c+d };
const plusFive = a => a + 5; // 이렇게 변수가 하나라면 괄호도 사라진다.