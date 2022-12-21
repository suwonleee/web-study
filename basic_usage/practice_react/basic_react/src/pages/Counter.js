import React, {useState} from 'react';

const Counter = () => {
  //setNumber는 초기값 num에 대한 setting 변수
  const [num, setNumber] = useState(0);
  const increase = () => {
    setNumber(num + 1);
    // num = num + 1 와 동일
  }

  const decrease = () => {
    setNumber(num - 1);
  }

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p className='countNum'>{num}</p>
    </div>
  )
}

export default Counter;
