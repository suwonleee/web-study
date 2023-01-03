// useState만 이용해서 재사용 방지하고, 한번만 나왔다가 들어가는 팝업 활용

// "팝업 " 한번 나왔다가 들어감 -> 몇초 나왔다가 사라지기 & 최초 한번만.

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import classnames from "https://cdn.skypack.dev/classnames";

let AppCallCount = 0;

function NotifyOnce({ children }) {
  //useState 활용해서 해결하기
  const [visible, setVisible] = useState(false);
  const [workDone, setWorkDone] = useState(false);
  
  //false이면 작동하게 만들기 -> 최초 한번만 그 이후 안 나타나게
  if ( workDone == false ) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000); //3초 뒤 false
    
    setWorkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible  //visible이 아닐 경우 사라지기
        },
        {
          "top-[10px]": visible  //visible일 경우 보이기
        }
      )}
    >
      {children}
    </div>
  );
}

function Alert({ color: color_, children }) { //원래 색깔일 경우 변수 지정
  // 아닐경우 화이트
  const color = color_ ?? "white";

  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <NotifyOnce>
        <Alert>"팝업 " 한번 나왔다가 들어감.</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi
        ducimus, sunt harum laboriosam deserunt aliquam quas architecto odio
        neque voluptas! Voluptatum perferendis quis fugit nobis sunt obcaecati
        corporis tempore!
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));