//console에 어떤게 있는지 확인할 수 있다.
// console.log(console)

// *******************************************************
// var, let, const
// var는 객체를 건드릴수도 있어서 조심 & 전역 변수
// const는 변하지 않는 상수를 설정할 때 사용 -> 값을 재정의 할 필요 없는 경우 사용
// let 나머지 경우에 사용해주면 그나마 적합

// ** example 1
const firstName = "Lee"
{
    const name = "soo"
    console.log(firstName)
}
//안에서 지정된 변수를 밖에서 사용할 수 없다.
console.log(name)


// *******************************************************
// String, Number, Boolean, null, undefined
const fullName = 'Son Heungmin';
const age = 35;
const weight = 86.3;
const isMale = true;
const money = null;
const girlFriend = undefined;

console.log(typeof girlFriend)
console.log(`My name is ${fullName}. Age is ${age}`);
//문자열을 0부터 3까지 자르기.
console.log(fullName.substring(0,4));
//문자열을 대문자로 .
console.log(fullName.toUpperCase());
//문자열 하나 하나 리스트로 저장하기 .
console.log(firstName.split(""));


// *******************************************************
// 간단하게 배열 갖고 놀기 
const hobbies = ["game", "codding", "tv", "youtube"];

//요소 다 합치기
console.log(hobbies.join())
//합쳐진거 다시 , 로 나누기 
console.log(hobbies.join().split(","))
// 첫번째 게임만 불러오기
console.log(hobbies[0]) 



//값을 아무것도 지정 안 해주면 undefined로 나온다.
let boyFriend;
console.log(boyFriend)