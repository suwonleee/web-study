// 한번의 함수실행에서, 여러번 실행된, setState의 결과가 전부 반영되는 방법

// ** Q. useState를 중복하여 사용하고 싶은 경우 어떻게 해야하나 ? 

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);
  
  const [no, setNo] = useState(0);
  
  const increaseNo = () => {
    // 만약 이렇게 그냥 useState를 적용한다면, 세번 실행해도 결과는 5.
    // setNo(no + 5) // no + 5 => 5
    // setNo(no + 5) // no + 5 => 5
    // setNo(no + 5) // no + 5 => 5

    // 인자에 함수를 넣으면 중복하여 사용 가능
    setNo((no) => no + 5); // no + 5 => 5
    setNo((no) => no + 5); // no + 5 => 10 
    setNo((no) => no + 5); // no + 5 => 15
  }

  return <button onClick={increaseNo}>no : {no}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
