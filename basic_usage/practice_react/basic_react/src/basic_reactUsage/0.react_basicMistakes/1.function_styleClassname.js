// 직접만든 컴포넌트에는 className, style 등이 작동하지 않습니다, 전달을 꼭 해줘야 한다 !!

// ** Q. 첫번째 박스와는 다르게, 두번째 박스에는 스타일을 적용하고 싶은 경우

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Box({ className }) {
  return <div style={{width:100, height:100, backgroundColor:'red'}} className={className}></div>
}

//이렇게도 적용 가능합니다.
// function Box({ props }) {
//   const className = props.className;
//   return <div style={{width:100, height:100, backgroundColor:'blue'}} className= {className}></div>
// }

function App() {
  return <>
  {/* 첫번째는 그냥 박스 */}
    <Box />
    <hr />
  {/* 두번째는 클래스가 적용된 박스 */}
  {/* 이렇게 바로 클래스 네임을 적용하고 싶은 경우. */}
    <Box className="border" />
  </>;
}

ReactDOM.render(<App />, document.getElementById("root"));
