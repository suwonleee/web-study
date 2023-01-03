//useState 구문은 무조건 함수 제일 위쪽에 모아두어야 합니다.

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  // 왠만하면, 함수의 제일 위쪽
  // if문, for문, while 등 제어문 안쪽에 두지 말자.
  const [no, setNo] = useState(0);
  
  return <button>숫자 : {no}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
