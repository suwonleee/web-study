//useRef를 사용해서 dom 조작하기
//입력한 숫자 alert에 표시하기

// 숫자 입력 -> 당신이 입력한 숫자는 {숫자} 입니다.

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const formInputNoRef = useRef(null); //useRef 만들기 DOM 조작을 위해서 변수 지정
  const [no, setNo] = useState("");

  const notice = () => {
    formInputNoRef.current.focus(); //Ref로 엘리먼트 컨트롤 해주게 만들어줌.
    
    if (!no) {
      alert("숫자를 입력해주세요.");
      return;
    }

    alert(`당신이 입력한 숫자는 ${no} 입니다.`);
    setNo('');
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //폼이 전송되는 것을 막기.
          notice(); // 버튼을 누르면 커런트 포커스로 이동
        }}
      >
        <input
          ref={formInputNoRef} // 내가 만든 useRef를 장착 시키기. -> 특정 엘리먼트를 DOM 조작해주기 위해서
          type="text"
          placeholder="숫자"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        />
        <button>실행</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
