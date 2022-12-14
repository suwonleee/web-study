// useEffect의 의존성배열을 이용해서, 실행민감도 조절
//https://codepen.io/suwonleee/pen/JjBWWpK?editors=0011

// ** Q. 각 버튼을 누르면 문구가 나오게 만들기 -> 주체와 종속의 개념 이해
// App 버튼 , Sub 버튼(no), Sub 버튼(no2) 존재 -> 버튼을 누르면 숫자가 늘어난다.

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;
let SubCallCount = 0;

function Sub({appNo}) {
  //App 버튼 안에 Sub 버튼 때문에 같이 실행된다.
  SubCallCount++;
  console.log(`Sub가 ${SubCallCount}번 실행됨!`);

  //no는 effect3, effect4에 적어놓음.
  const [no, setNo] = useState(0);
  //no2 는 어디에도 변수로 사용되지 않는다.
  const [no2, setNo2] = useState(0);
  
  useEffect(() => {
    console.log('effect 1 : 최초 단 한번 실행');
  }, []);
  
  useEffect(() => {
    console.log('effect 2 : 부모(App)의 appNo가 바뀔때마다 실행');
  }, [appNo]);
  
  useEffect(() => {
    console.log('effect 3 : 나(Sub)의 no가 바뀔때마다 실행');
  }, [no]);
  
  useEffect(() => {
    console.log('effect 4 : appNo 혹은, no가 변경될 때 마다 실행');
  }, [appNo, no]);
  
  useEffect(() => {
    console.log('effect 5 : 매번실행');
  });

  return (
    <>
      <div style={{ border: "10px solid blue", padding: 10 }}>
        App no : {appNo}
        <hr />
        <button onClick={() => setNo(no + 1)}>Sub 버튼(no) : {no}</button>
        <button onClick={() => setNo2(no2 + 1)}>Sub 버튼(no2) : {no2}</button>
      </div>
    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);
  
  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid red", padding: 10 }}>
        <button onClick={() => setNo(no + 1)}>App 버튼 : {no}</button>
        <hr />
        {/* app 버튼 안에 sub 버튼을 넣음 */}
        <Sub appNo={no} />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
