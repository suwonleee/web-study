//onClick에 매개변수가 필요한 함수는 바로 연결할 수가 없습니다.

// ** Q. 어떤 함수는 매개변수가 필요 없는데 (fun1), 매개변수가 필요한 경우가 있다(fun2)


import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const fun1 = () => {
    console.log("fun1 실행됨");
  };

  //function2 의 경우 매개변수를 활용하고 싶다.
  const fun2 = (a, b) => {
    console.log(`fun2 실행됨 : ${a}, ${b}`);
  };

  return (
    <>
      <button onClick={fun1}>함수1</button>
      
      {/* 매개 변수를 활용하고 싶은 경우 그냥 실행하면 안되고, onClick 안에 함수로 연결 */}
      {/* 만약 그냥 fun2로 받은 경우 undefined */}
      <button onClick={() => fun2(1, 2)}>함수2</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
