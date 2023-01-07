
import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  useEffect(() => {
    AppCallCount++;
    console.log(`App이 ${AppCallCount}번 실행됨!`);
  }, []);
  
  const [no, setNo] = useState(0);

  return <button onClick={() => setNo(no + 1)}>증가 : {no}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
