// useEffect를 사용하여 함수의 특정부분 재실행 방지
// useEffect는 리랜더링시마다 딱 1번만 실행 되어야하는 경우

// ** Q. 증가 버튼을 누르면 -> 'app이 1번 실행됨!' && 증가 + 1 되게 만들기  

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0; //함수 실행 횟수 메소드 

function App() {
  useEffect(() => { // 안에 변수를 함수로 지정
    AppCallCount++; //리랜더링 될 때 마다 App call 변수를 하나 더해주기
    console.log(`App이 ${AppCallCount}번 실행됨!`);
  }, []);
  // [] 이렇게 코드 적으면, 딱 최초 앱 실행만 !! [] 이 리스트 때문에.
  // & 살짝 타이밍 늦게 실행
  
  const [no, setNo] = useState(0);

  return <button onClick={() => setNo(no + 1)}>증가 : {no}</button>; //useState로 실제로 동작(리랜더링) 시키기 
}

ReactDOM.render(<App />, document.getElementById("root"));
