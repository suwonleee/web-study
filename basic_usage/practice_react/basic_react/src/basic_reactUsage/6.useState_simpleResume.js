console.clear();

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const [num, setNum]  = useState(0);
  let timeoutId = setTimeout(() => setNum(num + 1), 1000);
  
  const pause = () => clearTimeout(timeoutId);

  const resume = () =>{
    timeoutId = setTimeout(() => setNum(num + 1), 1000);
  };

  return <>
    숫자 : {num}
    <hr/>
    <button onClick={pause}>일시정지</button>
    &nbsp;
    <button onClick={resume}>재개</button>
  </>;
};

ReactDOM.render(<App />, document.getElementById("root"));
