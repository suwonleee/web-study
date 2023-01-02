// counter 가 늘어날 때마다, 표현 방식 다르게 변경하기

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const [no, setNo] = useState(0);
  const noIsEvenDiv = (
    <>
      <hr/>
      {/* 짝수와 홀수일 때 각각 다른 문장 출력 */}
      {no % 2 == 0 ? <div>짝수입니다.</div> : <div>홀수입니다.</div>}
    </>
  );

  const noIsNot8MultipleDiv = no % 8 == 0 || (
    <>
      <hr />
      {/* 8의 배수가 아닐땐 */}
      <div>8의 배수가 아닙니다.</div>

      {/* 8의 배수일 땐 이렇게 뒤에 아무것도 작성 안해도 된다. */}
    </>
  );

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      {noIsEvenDiv}
      {noIsNot8MultipleDiv}
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));