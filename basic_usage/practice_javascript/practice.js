//****************************** */
//1. const 와 let

console.clear();

console.log('== let ==');
let age1 = 20;
console.log('age1 : ' + age1);
//"age1 : 20"

age1 = 30; // 변경가능
console.log('age1 : ' + age1);
//"age1 : 30"

console.log('== const ==');
const age2 = 20;
console.log('age2 : ' + age2);
//"age2 : 20"

// age2 = 30; // 불가능
console.log('age2 : ' + age2);
//"age2 : 20"

//****************************** */
//2. 배열과 객체
console.clear();

console.log("== 배열 선언 ==");
const arr = [10, 20, 30, 40, 50];
arr.push(60, 70);
arr[7] = 100;

console.log("== 객체 선언 ==");
const obj = {
  gender:"남자",
  height:178.34
};

obj.age = 12;
obj['name'] = "홍길동";

console.log("== 배열 엘리먼트에 접근하는 방법 ==");
console.log(arr[0]);
// 10

console.log("== 객체 엘리먼트에 접근하는 방법 ==");
console.log(obj['age']);
// 12
console.log(obj.age);
// 12

console.log("== 배열 엘리먼트 개수를 알아내는 방법 ==");
console.log(arr.length);
// 8

console.log("== 객체 엘리먼트 개수를 알아내는 방법 ==");
console.log(Object.keys(obj).length);
// 4

console.log("== 배열의 모든 요소를 반복하는 방법, 전통적인 for ==");
for ( let i = 0; i < arr.length; i++ ) {
  console.log(arr[i]);
}
// 10 20 30 40 50 60 70 100

console.log("== 배열의 모든 요소를 반복하는 방법, of ==");
for ( const value of arr ) {
  console.log(value);
}
// 10 20 30 40 50 60 70 100

console.log("== 객체의 모든 요소를 반복하는 방법, 키 ==");
for ( const key in obj ) {
  console.log(key);
}
//gender height age name

console.log("== 객체의 모든 요소를 반복하는 방법, 값 ==");
for ( const key in obj ) {
  console.log(obj[key]);
}
//"남자" 178.34 12 "홍길동"


// *************************************
// 3. 객체를 만드는 다양한 방법.
console.clear();

const age = 12;

const obj1 = {
  "age":age
};

const obj2 = {
  age:age
};

const obj3 = {
  age
};

const obj4 = {};
obj4['age'] = age;

const obj5 = {};
obj5.age = age;

const obj6 = {
  ...obj5,
  name:"Paul"
};

console.log(obj6);
// "age" : 12
// "name" : "Paul"

// *************************************
// 4. 삼항 연산자.
console.clear();


const ageChecking = 19;

const adultStr = ageChecking >= 20 ? "성년" : "미성년";

console.log(adultStr);
//미성년
// *************************************
// 5. 삼항 연산자.
console.clear();

console.log("== falsy test ==");
console.log(false ? "false is not falsy" : "false is falsy");
//"false is falsy"

console.log(0 ? "0 is not falsy" : "0 is falsy");
//"0 is falsy"

console.log(null ? "null is not falsy" : "null is falsy");
//"null is falsy"

console.log(undefined ? "null is not falsy" : "undefined is falsy");
//"undefined is falsy"

console.log(NaN ? "NaN is not falsy" : "NaN is falsy");
//"NaN is falsy"

console.log('' ? "'' is not falsy" : "'' is falsy");
//"'' is falsy"

console.log('a' ? "'a' is not falsy" : "'a' is falsy");
//"'a' is not falsy"

console.log(1 ? "1 is not falsy" : "1 is falsy");
//"1 is not falsy"

console.log([] ? "[] is not falsy" : "[] is falsy");
//"[] is not falsy"

console.log({} ? "{} is not falsy" : "{} is falsy");
//"{} is not falsy"

console.log("== same test ==");
console.log("0 == false : " + (0 == false));
//"0 == false : true"

console.log("0 === false : " + (0 === false)); // === 는 엄격하게 비교합니다.
//"0 === false : false"

console.log("0 == '' : " + (0 == ''));
//"0 == '' : true"

console.log("0 == null : " + (0 == null));
//"0 == null : false"

console.log("undefined == null : " + (undefined == null));
//"undefined == null : true"

console.log("NaN == false : " + (NaN == false));
//"NaN == false : false"

console.log("NaN == null : " + (NaN == null));
//"NaN == null : false"

console.log("== undefined test ==");
let a;
console.log("a == undefined : " + (a == undefined));
//"a == undefined : true"

console.log("== NaN test ==");
console.log("10 * 'a' : " + (10 * 'a'));
//"10 * 'a' : NaN"

// *************************************
