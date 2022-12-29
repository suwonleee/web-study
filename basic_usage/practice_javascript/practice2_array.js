// *************************************
// 1. function (함수)
console.clear();
// 수정가능지역 시작
//기본
const plus1 = function(a, b) {
  return a + b;
}
console.log(`plus1 : ` + plus1(10, 20));
//"plus1 : 30"

function plus2(a, b) {
  return a + b;
}
console.log(`plus2 : ` + plus2(10, 20));
//"plus2 : 30"

//화살표 (arrow)
const plus3 = (a, b) => {
  return a + b;
}
console.log(`plus3 : ` + plus3(10, 20));
//"plus3 : 30"

const plus4 = (a, b) => a + b;
console.log(`plus4 : ` + plus4(10, 20));
//"plus4 : 30"

const plus5 = (a) => a + 20;
console.log(`plus5 : ` + plus5(10));
//"plus5 : 30"

const plus6 = a => a + 20;
console.log(`plus6 : ` + plus6(10));
//"plus6 : 30"


const plus7 = () => 10 + 20;
console.log(`plus7 : ` + plus7());
//"plus7 : 30"

// 수정가능지역 끝

// *************************************
// 2. map (함수)
console.clear();

/*
// 출력예시
arr 배열안의 숫자들이 모두 제곱된 버전의 새로운 배열은 : 1,9,25,49,81
*/

const arr = [1, 3, 5, 7, 9];

// 수정가능지역 시작
const resultArr = arr.map((el) => el * el);
// 수정가능지역 끝

console.log("arr 배열안의 숫자들이 모두 제곱된 버전의 새로운 배열은 : " + resultArr);
//"arr 배열안의 숫자들이 모두 제곱된 버전의 새로운 배열은 : 1,9,25,49,81"

// *************************************
// 3. filter (함수)

const arr = [1, 4, 7, 10];

// 수정가능지역 시작
const resultArr = arr.filter((item) => item % 2 == 0)
// 수정가능지역 끝

console.log("arr 배열안의 숫자 중 해당 조건에 만족하는것들만 따로 골라낸다면 결과는 : " + resultArr);
//"arr 배열안의 숫자 중 해당 조건에 만족하는것들만 따로 골라낸다면 결과는 : 4,10"
