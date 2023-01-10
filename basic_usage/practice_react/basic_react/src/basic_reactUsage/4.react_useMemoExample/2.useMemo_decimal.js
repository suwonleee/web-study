// 소수 구하기 (useMemo)
//https://codepen.io/suwonleee/pen/wvxJdrV?editors=0010
// 1부터 입력값까지의 소수 개수를 알려주는 프로그램 구현에 useMemo 활용

import React, { useState, useMemo } from "https://cdn.skypack.dev/react";
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
  
  //useState 변수 적용
  const [inputedNo, setInputedNo] = useState(0);
  const [no, setNo] = useState(0);
  

  //useMemo 적용 파트
  //inputedNo 변수의 값이 바뀌지 않는 한 실제 계산은 반복되지 않는다.
  const primeNumbersCount = useMemo(() => getPrimeNumbersCount(inputedNo), [inputedNo]);
  
  const onSubmit = (e) => {
    e.preventDefault(); //폼이 전송되는 것을 막기.
    
    //입력 받은 수를 form 변수에 넣기
    const form = e.target;
    
    //빈칸 없애기
    form.number.value = form.number.value.trim();
    
    //숫자 미입력시
    if ( form.number.value.length == 0 ) {
      alert('숫자를 입력해주세요');
      form.number.focus(); //숫자에 포커스 해주기
      
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
