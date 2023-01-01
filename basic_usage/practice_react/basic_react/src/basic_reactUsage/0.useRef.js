//useRef를 사용해서 dom 조작하기
//입력한 숫자 alert에 표시하기

// 숫자 입력 -> 당신이 입력한 숫자는 {숫자} 입니다.

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const formInputNoRef = useRef(null); //useRef 이렇게 사용해준다.
  const [no, setNo] = useState("");

  const notice = () => {
    formInputNoRef.current.focus(); //입력 행위 후 다시 포커스를 입력 창으로 바꿔주기
    
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
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef}
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
