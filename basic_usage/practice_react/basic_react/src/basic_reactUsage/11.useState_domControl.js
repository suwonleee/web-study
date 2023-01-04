//숫자기록입력상자에 useState 이용하여 dom 조작
// 1.useRef_memory 와 비교해서 보기

// ** Q. 숫자를 입력해서 기록하기
// v1 정답 예시 : 10, 20, 30
// v2 정답 예시 : li로 표기된 10, 20, 30
// v2-2 정답 예시 : li로 표기된 10, 20, 30


import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  const [recordedNos, setRecordedNos] = useState([10, 20, 30]);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();
    
    if ( form.no.value.length == 0 ) {
      alert('숫자를 입력해주세요.');
      form.no.focus();
      return;
    }

    setRecordedNos([...recordedNos, form.no.value]);
    form.no.value = '';
    form.no.focus();
  };

  //const li = [1, 2, 3].map((el, index) => <li key={index}>{el}</li>);
  const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input
          type="number"
          name="no"
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {recordedNos.join(",")}

      <hr />

      <h1>기록된 숫자 v2</h1>
      <ul>{li}</ul>

      <hr />

      <h1>기록된 숫자 v2-2</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
