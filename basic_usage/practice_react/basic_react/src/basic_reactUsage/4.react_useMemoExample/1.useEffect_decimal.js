// 소수 구하기 (useEffect)
//https://codepen.io/suwonleee/pen/wvxJdrV?editors=0010
// 1부터 입력값까지의 소수 개수를 알려주는 프로그램 구현에 useEffect를 활용

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function isPrimeNumber(no) {
  for ( let i = 2; i < no; i++ ) {
    if ( i * i > no ) {
      break;
    }
    
    if ( no % i == 0 ) {
      return false;
    }
  }
  
  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];
  
  for ( let i = 2; i <= max; i++ ){
    if ( isPrimeNumber(i) ) {
      primeNumbers.push(i);
    }
  }
  
  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);
  
  const [inputedNo, setInputedNo] = useState(0);
  const [no, setNo] = useState(0);
  
  const [primeNumbersCount, setPrimeNumbersCount] = useState(0);
  
  useEffect(() => { //useEffect inputedNo 변경시 사용
    const primeNumbersCount = getPrimeNumbersCount(inputedNo);
    setPrimeNumbersCount(primeNumbersCount);
  }, [inputedNo])
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    form.number.value = form.number.value.trim();
    
    if ( form.number.value.length == 0 ) {
      alert('숫자를 입력해주세요');
      form.number.focus();
      
      return;
    }
    
    const number = form.number.valueAsNumber;
    form.number.focus();
    
    setInputedNo(number);
  }
  
  return <>
    <button onClick={() => setNo(no + 1)}>번호 : {no}</button>
    <hr />
    <form onSubmit={onSubmit}>
      <input type="number" name="number" placeholder="숫자를 입력해주세요." defaultValue="0" />
      <input type="submit" value="확인" />
      <hr />
      <div>MAX : {inputedNo}</div>
      <div>소수의 개수 : {primeNumbersCount}</div>
    </form>
  </>;
}

ReactDOM.render(<App />, document.getElementById("root"));

