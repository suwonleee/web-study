// form을 이용해서 dom 조작하기
// ** Q. 이름을 입력해주세요. / 비밀번호를 입력해주세요 / 전송 

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const onSubmit = (e) => {
    e.preventDefault(); //폼이 전송되는 것을 막기.
    const form = e.target; //submit에 관한 이벤트 
    
    
    form.name.value = form.name.value.trim(); //양쪽 공백 없애기
    
    //이름 입력이 안 된 경우
    if ( form.name.value.length == 0 ) {
      alert('이름을 입력해주세요.');
      form.name.focus(); //alert 확인 후 입력창에 포커스
      return;
    }
    
    form.age.value = form.age.value.trim();
    
    //나이 입력이 안 된 경우
    if ( form.age.value.length == 0 ) {
      alert('나이를 입력해주세요.');
      form.age.focus(); //alert 확인 후 입력창에 포커스
      return;
    }
    

    //입력을 잘 한 경우
    const name = form.name.value;
    const age = form.age.valueAsNumber;
    
    alert(`이름 : ${name}, 나이 : ${age}`);
    
    form.name.value = '';
    form.age.value = '';
    
    form.name.focus();
  }
  
  return <>
    <form onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="이름을 입력해주세요." autoComplete="off" />
      <br />
      <input name="age" type="number" placeholder="나이를 입력해주세요." defaultValue="20" />
      <br />
      <input type="submit" value="전송" />
    </form>
  </>;
}

ReactDOM.render(<App />, document.getElementById("root"));
