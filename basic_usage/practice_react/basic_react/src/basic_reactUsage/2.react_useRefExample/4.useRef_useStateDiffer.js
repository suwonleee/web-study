// useRef 와 useState 의 차이점을 확인하기 !

//useRef는 리로드 되더라도 값의 변화만 가져간다 (저장 기억)
//그리고 완전히 리로드 될 때 그 변화를 리로드 된 화면에 담는다.

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);
  
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const no3Ref = useRef(0); //useRef 지정.

  return <>
    <button onClick={() => setNo1(no1 + 1)}>숫자1 증가 : {no1}</button>
    <hr />
    <button onClick={() => setNo2(no2 + 2)}>숫자2 증가 : {no2}</button>
    <hr />
    {/* useRef는 값이 증가하긴 하는데, 버튼을 눌러도 증가하지 않고, 나중에 no1, no2 눌러주면 그때 증가한다. */}
    <button onClick={() => no3Ref.current++}>숫자3 증가 : {no3Ref.current}</button>
  </>;
}

ReactDOM.render(<App />, document.getElementById("root"));
