// 의존성 배열 인자를 제거하면, 매번 실행은 되지만 타이밍이 늦어진다.

// ** Q. 증가 버튼을 누르면 -> 시작 -> 끝 -> app이 1번 실행됨! && 증가 =+ 1 되게 만들기  

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  console.log('시작');
  
  useEffect(() => {
    AppCallCount++;
    console.log(`App이 ${AppCallCount}번 실행됨!`);
  });
  
  console.log('끝');
  
  const [no, setNo] = useState(0);

  return <button onClick={() => setNo(no + 1)}>증가 : {no}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
