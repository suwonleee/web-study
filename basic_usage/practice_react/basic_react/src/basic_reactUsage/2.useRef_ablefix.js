//숫자 배열을 기록하기 ex)
// 0 : 5 삭제 +1 -1 0
// 1 : 10 삭제 +1 -1 0


//useRef를 사용하기 위해선 이렇게 입력해준다.
import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    //초기값
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
    if (no === "") { // 빈칸일 때  출력
      alert("숫자를 입력해주세요.");
      return;
    }

    //숫자를 입력 받았을 때
    setRecordedNos([...recordedNos, no]); //기존에 있는 recordedNos 에 no 추가
    setNo("");
    noInputRef.current.focus(); //입력 받은 현재 파트에 포커스 가져오기
  };
  
  const removeNo = (index) => { //삭제 했을 때 동작 규정
    // 삭제시 filter를 사용한다.
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  };
  
  const modifyNo = (index, newNo) => { //수정하고자 할 때 동작 규정
    // 수정시 map을 사용해준다.
    const newRecordedNos = recordedNos.map((el, _index) => _index == index ? newNo : el);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input //input에 ref를 사용하면 이렇게 값에 접근해서 값을 사용할 수 있다.
          type="number"
          ref={noInputRef} //특정 엘리먼트에 심어둘 수 있다.
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
            {/* 몇번째 입력 숫자 */}
            <span>{index} : </span>
            {/* 입력 받은 숫자 */}
            <span>{el}</span>
            {/* 버튼 기능 입력하기 */}
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
