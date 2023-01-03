//팝업 열기 와 팝업 닫기 버튼을 누르면 각각 번갈아가며 나오게 만들기
// 그리고 가운데 border 네모도 사라지게

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const border = '10px solid red';
  const [popupVisible, setPopupVisible] = useState(true);
  
  
  return (
    <>
      {/* {popupVisible || <button onClick={() => setPopupVisible(true)}>팝업열기</button>}
      {popupVisible && <button onClick={() => setPopupVisible(false)}>팝업닫기</button>} */}

      {/* 위 두줄을 밑에 한줄로 요약할 수 있다. */}
      <button onClick={() => setPopupVisible(!popupVisible)}>
        팝업{popupVisible ? "닫기" : "열기"}
      </button>
      <hr />
      {`popupVisible : ${popupVisible}`}

      {/* &&의 경우 리액트에서 자주 사용된다 ! 조건을 주고, 그거에 맞춰 변경시키고자 할 때 사용 */}
      {popupVisible && <div style={{width:100,height:100,border}}></div>}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
