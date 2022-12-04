/******************************/
/* 1. 기본적인 활용법 */
/******************************/

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


/******************************/
/* 2. 백틱 활용법 */
/******************************/
console.log(`저의 나이는 ${b}입니다`)



/******************************/
/* 3. 객체와 배열 */
/******************************/
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

/******************************/
/* 4. 정보 접근법 */
/******************************/
let api = {
    "page": 1,
    "total_results": 10000,
    "total_pages": 500,
    "results": [
        {
            "popularity" : 3130.643,
            "vote_count" : 143,
            "video" : false,
            "genre_ids" : [
                18,
                878,
                53
            ],
            "title": "2067",
            "vote_average": 5.8
        }
    ]
}
// vote_count를 꺼내고 싶다면?
console.log(api.results[0].vote_count); //143



/******************************/
/* 5. 반복문  */
/******************************/
// for 문

let arr2 = [1,2,3,4,5,6,7];
for(let i=0; i < arr2.length; i++){
    console.log(i)
    console.log(arr2[i])
}
// 0번째는 1 , 1번째는 2, ... 6번째는 7


// 조건을 만족하는 짝수만 나오게 하기
for(let i=0; i < arr2.length; i++){

    if(arr[i] % 2 == 0){
        console.log(arr2[i])
    }
}
// 2, 4, 6
// 만약 조건을 만족하지 않을 때

// 짝수 & 4의 배수만 나오게 하기
for(let i=0; i < arr2.length; i++){

    if(arr[i] % 2 == 0 && arr2[i] % 4 == 0){
        console.log(arr2[i])
    }
}
// 4
// 만약 조건을 만족하지 않을 때


/******************************/
/* 6. 함수  */
/******************************/
function x(num1, num2){
    return num1 + num2;
}

let y = x(100, 200)
console.log(y) // 300


// 기본 제공 함수

//split
let StrEx = "자바-스크립트";
let StrEx2 = StrEx.split("-");
console.log(StrEx2)
//["자바","스크립트"]

//join
let StrEx3 = StrEx2.join("*");
console.log(StrEx3)
//자바*스크립트

//indexOf
console.log(str.indexOf("바")) // 1 (인덱스 번호)
console.log(str.indexOf("끼")) // -1 (인덱스에 없기 때문에 미포함)

