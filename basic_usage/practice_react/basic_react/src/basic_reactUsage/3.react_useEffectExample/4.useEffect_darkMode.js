// 리액트로 다크모드 적용 

//https://codepen.io/suwonleee/pen/XWBMMZJ?editors=0010

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);
  
  //useState no는 숫자 증가 테스트
  const [no, setNo] = useState(0);
  
  //Dark를 상황에 따라 적용해주게 useState
  const [isDark, setIsDark] = useState(false);
  
  //useEffect 함수로 담아주기
  useEffect(() => {
    //html 변수에 담아주기
    const html = document.getElementsByTagName('html')[0];
      
    if ( isDark ) {
      html.classList.add('dark');
    }
    else {
      html.classList.remove('dark');
    }
  }, [isDark]); //isDark가 바뀔 때 재실행

  return (
    <>
      <div>
        <button onClick={() => setNo(no + 1)}>숫자 증가 : {no}</button>
        <button onClick={() => setIsDark(!isDark)}>테마토글</button>
      </div>
      
      <hr />

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        tempore similique quaerat, rerum sunt alias repellat aliquid! Nesciunt
        fugit maiores quia obcaecati sed! A veniam eos earum porro eaque
        commodi?
      </div>

      <h1 class="color-primary">하하 호호</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
