//setState 함수에 인자로 새 상태를 반환하는 함수를 넘기면 좋은 경우, 첫번째

// ** Q. useState에서 새로운  ? 
// 나이 : [1, 2, 3] -> 클릭 후 -> 나이 : [1, 2, 3, 4, 5, 6]
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";


function App() {
  const [ages, setAges] = useState([1, 2, 3]);
  
  const onClick = () => {
    //만약 이렇게 세번 적었을 경우 하나만 적용됨 ages 값만
    // setAges([...ages, ages.length + 1]);
    // setAges([...ages, ages.length + 1]);
    // setAges([...ages, ages.length + 1]);

    //...ages, 기존의 배열 살리기
    setAges((ages) => [...ages, ages.length + 1]);
    setAges((ages) => [...ages, ages.length + 1]);
    setAges((ages) => [...ages, ages.length + 1]);
  };

  return <button onClick={onClick}>나이 : [{ages.join(', ')}]</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
