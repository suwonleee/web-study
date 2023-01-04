// 입력 받은 숫자를 추가 기록하고, 삭제 +1 -1 로 인덱스도 기록
// example

//기록된 숫자
// 0 : 5 삭제 +1 -1 0
// 1 : 10 삭제 +1 -1 0

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5,
    10,
    15,
    20,
    5,
    25,
    5,
    30,
    5
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };
  
  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  };
  
  const modifyNo = (index, newNo) => {
    const newRecordedNos = recordedNos.map((el, _index) => _index == index ? newNo : el);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //폼이 전송되는 것을 막기.
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

      <h1>기록된 숫자</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index} style={{display:"flex",gap:20}}>
            <span>{index} : </span>
            <span>{el}</span>
            <button onClick={() => removeNo(index)}>삭제</button>
            <button onClick={() => modifyNo(index, el + 1)}>+1</button>
            <button onClick={() => modifyNo(index, el - 1)}>-1</button>
            <button onClick={() => modifyNo(index, 0)}>0</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
