//setState 함수에 인자로 새 상태를 반환하는 함수를 넘기면 좋은 경우, 두번째


import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function Sub({ setAges }) {
  const onClick = () => {
    //...ages, 기존의 배열 살리기
    setAges((ages) => [...ages, 10, 20, 30]);
    setAges((ages) => [...ages, 40, 50, 60]);
  };

  return (
    <div style={{border:'10px solid red'}}>
      <button onClick={onClick}>현재나이</button>
    </div>
  );
}

function App() {
  const [ages, setAges] = useState([]);

  return (
    <div>
      <Sub setAges={setAges} />
      <div>나이들 : {ages.join(", ")}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
