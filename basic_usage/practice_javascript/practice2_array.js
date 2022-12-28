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