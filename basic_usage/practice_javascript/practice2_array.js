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

const arr1 = [1, 3, 5, 7, 9];

// 수정가능지역 시작
const resultArr1 = arr1.map((el) => el * el);
// 수정가능지역 끝

console.log("arr 배열안의 숫자들이 모두 제곱된 버전의 새로운 배열은 : " + resultArr1);
//"arr 배열안의 숫자들이 모두 제곱된 버전의 새로운 배열은 : 1,9,25,49,81"

// *************************************
// 3. filter (함수)

const arr2 = [1, 4, 7, 10];

// 수정가능지역 시작
const resultArr2 = arr2.filter((item) => item % 2 == 0)
// 수정가능지역 끝

console.log("arr 배열안의 숫자 중 해당 조건에 만족하는것들만 따로 골라낸다면 결과는 : " + resultArr2);
//"arr 배열안의 숫자 중 해당 조건에 만족하는것들만 따로 골라낸다면 결과는 : 4,10"

// *************************************
// 4. indexOf (함수)

/*
// 출력예시
가장 앞에있는 `60`의 위치는 5 입니다.
*/

const arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 60, 70];

// 수정가능지역 시작
const index = arr3.indexOf(60);
// 수정가능지역 끝

console.log(`가장 앞에있는 \`60\`의 위치는 ${index} 입니다.`);
//"가장 앞에있는 `60`의 위치는 5 입니다."
// 인덱스 번호를 알려준다.

// *************************************
// 5. forEach (함수)

const arr4 = ['시과', '당근', '포도'];

// 수정가능지역 시작
arr4.forEach((item) => {
  console.log(`제가 좋아하는 과일은 '${item}' 입니다.`);
});
// 수정가능지역 끝
//"제가 좋아하는 과일은 '시과' 입니다."
// "제가 좋아하는 과일은 '당근' 입니다."
// "제가 좋아하는 과일은 '포도' 입니다."

// *************************************
// 6. Slice (함수)
// 출력예시
[40,50,60,70]


const arr5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// 수정가능지역 시작
const arr6 = arr5.slice(3, 7);
// 수정가능지역 끝

console.log(arr6);