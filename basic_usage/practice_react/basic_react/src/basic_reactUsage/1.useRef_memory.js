//숫자기록입력상자에 useRef를 이용하여 dom 조작
// 숫자를 입력해서 기록하기
// v1 정답 예시 : 10, 20, 30
// v2 정답 예시 : li로 표기된 10, 20, 30
// v2-2 정답 예시 : li로 표기된 10, 20, 30

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([10, 20, 30]);

  const saveNo = () => {
    if (no === "") { //비어있을 경우
      alert("숫자를 입력해주세요.");
      return;
    }
    //setRecordedNos에 복사 해주기
    setRecordedNos([...recordedNos, no]); //기존 recordedNos에 no 추가 
    setNo("");
    noInputRef.current.focus(); //입력 행위 후 다시 포커스를 입력 창으로 바꿔주기
  };

  //const li = [1, 2, 3].map((el, index) => <li key={index}>{el}</li>);
  const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {/* 새로운 숫자 추가해주는 방법 1 */}
      {recordedNos.join(",")} 

      <hr />

      <h1>기록된 숫자 v2</h1>
      {/* 새로운 숫자 추가해주는 방법 2 */}
      <ul>{li}</ul>

      <hr />

      <h1>기록된 숫자 v2-2</h1>
      {/* 새로운 숫자 추가해주는 방법 3 */}
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
