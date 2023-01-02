//팝업 열기 와 팝업 닫기 버튼을 누르면 각각으로 변하게 만들기
// 그리고 가운데 border 네모도 사라지고 나타나게 만들기

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const border = '10px solid red';
  const [popupVisible, setPopupVisible] = useState(true);
  
  
  return (
    <>
      <button onClick={() => setPopupVisible(!popupVisible)}>
        팝업{popupVisible ? "닫기" : "열기"}
      </button>
      <hr />
      {`popupVisible : ${popupVisible}`}
      {popupVisible && <div style={{width:100,height:100,border}}></div>}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
