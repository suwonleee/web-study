//초가 지날 때마다, 1씩 늘어나는 타이머
//pause 나 resume 누르면 잠깐 멈췄다가, 다시 재개되게 만들기.

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const [num, setNum]  = useState(0);
  let timeoutId = setTimeout(() => setNum(num + 1), 1000);
  
  const pause = () => clearTimeout(timeoutId);

  const resume = () =>{
    //timeoutId에 다시 담아주어, 재개 했을 때 시간 초를 이어간다. -> 그대로 적으면 1초씩 추가되는 에러남.
    //let을 안 써주는 이유 -> 아예 새로운 변수가 되어버려서 오류남.
    timeoutId = setTimeout(() => setNum(num + 1), 1000);
  };

  return <>
    숫자 : {num}
    <hr/>
    <button onClick={pause}>일시정지</button>
    &nbsp;
    <button onClick={resume}>재개</button>
  </>;
};

ReactDOM.render(<App />, document.getElementById("root"));
