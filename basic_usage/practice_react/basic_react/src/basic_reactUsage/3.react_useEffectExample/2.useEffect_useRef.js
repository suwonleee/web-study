// 타이팅이 늦어져야 하는 경우, useRef, useEffect 조합
// ** Q. 최초에는 이름에 포커스가 되어있고 -> 증가 버튼을 누르면 -> 숫자가 증가 되면서 나이에 포커스가 잡히게 만들기

import React, {
  useState,
  useEffect,
  useRef
} from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const [no, setNo] = useState(0);
  
  useEffect(() => {
    inputNameRef.current.focus(); //Ref로 엘리먼트 컨트롤 해주게 만들어줌.
  }, []);
  // 최초 앱 실행에 inputNameRef 포커스 Effect -> 이후엔 나이에 포커스
  // [] 리스트를 작성하면 딱 한번만 앱이 실행된다. & 살짝 타이밍 늦게 실행 

  // });
  // 만약 [] 리스트 없이 실행한다면 ? -> inputNameRef 계속 포커스

  // 원래 우리가 Ref 사용해서 늦게 실행되게 만들던 방식
  // setTimeout(() => inputNameRef.current.focus(), 1000);

  return (
    <>
      <input ref={inputNameRef} type="text" placeholder="이름" /> 
      {/* 내가 만든 useRef를 장착 시키기. -> 특정 엘리먼트를 DOM 조작해주기 위해서 */}
      <hr />
      <input ref={inputAgeRef} type="number" placeholder="나이" />
      {/* 내가 만든 useRef를 장착 시키기. -> 특정 엘리먼트를 DOM 조작해주기 위해서 */}
      <hr />
      <button
        onClick={() => {
          setNo(no + 1);
          inputAgeRef.current.focus(); //Ref로 엘리먼트 컨트롤 해주게 만들어줌.
        }}
      >
        증가 : {no}
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
