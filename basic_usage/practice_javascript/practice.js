//****************************** */
//1. const 와 let

console.clear();

console.log('== let ==');
let age1 = 20;
console.log('age1 : ' + age1);
age1 = 30; // 변경가능
console.log('age1 : ' + age1);

console.log('== const ==');
const age2 = 20;
console.log('age2 : ' + age2);
// age2 = 30; // 불가능
console.log('age2 : ' + age2);

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

console.log("== 객체 엘리먼트에 접근하는 방법 ==");
console.log(obj['age']);
console.log(obj.age);

console.log("== 배열 엘리먼트 개수를 알아내는 방법 ==");
console.log(arr.length);

console.log("== 객체 엘리먼트 개수를 알아내는 방법 ==");
console.log(Object.keys(obj).length);

console.log("== 배열의 모든 요소를 반복하는 방법, 전통적인 for ==");
for ( let i = 0; i < arr.length; i++ ) {
  console.log(arr[i]);
}

console.log("== 배열의 모든 요소를 반복하는 방법, of ==");
for ( const value of arr ) {
  console.log(value);
}

console.log("== 객체의 모든 요소를 반복하는 방법, 키 ==");
for ( const key in obj ) {
  console.log(key);
}

console.log("== 객체의 모든 요소를 반복하는 방법, 값 ==");
for ( const key in obj ) {
  console.log(obj[key]);
}

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