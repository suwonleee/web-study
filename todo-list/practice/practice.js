
/* 1. 기본적인 활용법 */
// 변수 지정할 경우
// 변수에는 숫자, 문자, boolean(참, 거짓) 이라는 변수 지정

let a = "사과" 
let ba = 100 
let c = true
let d = false


let a2 = "은 뭘까요"
let a3 = a + a2

console.log(a3);
// = 값은 뭘까요?


let ab = a + ba;
console.log(ab);
// 값100  -> 두개가 합쳐지면 결국 문자형으로 된다.


let c2 = 10 > 5;
console.log(c2);
// true

let b = 100;
let b2 = 200;
console.log(b - b2); // -100
console.log(b * b2); // 20000
console.log(b / b2); // 0.5
console.log(b % b2); // 100 %는 나머지

/* 2. 백틱 활용법 */
console.log(`저의 나이는 ${b}입니다`)


/* 3. 객체와 배열 */
let arr = [1,2,3,4,'문자',true,false]

// 문자가 담겨있는걸 꺼내려면
console.log(arr[4]); // 100 %는 나머지

//배열 맨 뒤에 값 추가하기
arr.push("값")
// [1,2,3,4,'문자',true,false,"값"]


//딕셔너리 활용
let obj = {
	"key":"value",
	"key2":"value2"
}

console.log(obj)

//dic 예시
let dic = {
	"a":"apple",
	"b":"banana",
	"c":"carrot"
}

// list [] 안에 dictionary {} 를 넣을수도 있다.
let dic2 = [
	{"a":"apple"},
	{"b":"banana"},
	{"c":"carrot"}
]
console.log(obj)