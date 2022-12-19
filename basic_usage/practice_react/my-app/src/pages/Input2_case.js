// 만약 다양한 input를 사용해야할 경우 ?
// 리액트에서 상태관리 하는 방법
import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });
  
  const { name, email, tel } = inputs;
  
  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] = value; 로 접근하면 리액트 메모리 문제로 안된다 !!
    // 그러므로 ... spread 방식으로 접근 , 복사 후 새로운걸로 만들어줘야한다.
    setInputs({
      ...inputs,
      [id]: value, //변경이 일어난 아이디부터 입력된다.
    });
  }
  
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="text" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="text" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>
      <p>전화번호 : {tel}</p>
    </div>
  )
}
export default Input2;
