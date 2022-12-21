// 클릭할 때마다 숫자가 올라가는 예시

// import logo from './logo.svg';
import React,{useState} from 'react'
import './basic.css';

function App2() {
  // react의 중요 개념인 *** State
  // 변수가 업데이트 된건 괜찮아, 하지만 state가 업데이트 됐으면 UI 업데이트를 해주자!

  // 이런 일반 변수는 리액트에선 잠깐 저장해놓는 경우에 사용 ! 
  let count = 0
  // 초기값을 갖고있는 state변수(count2) 와 변수가 바뀔걸 반영해주는 setCount2
  const [count2, setCount2] = useState(0) //useState의 초기값 0
  const increase = () => {
    count = count + 1
    setCount2(count2 + 1)
    console.log(count, "stateCount2", count2) //비동기적이기에, count2 = count - 1
  }
  return (
    <main>
      <div className='box'>{count}
      </div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
}

export default App2;
