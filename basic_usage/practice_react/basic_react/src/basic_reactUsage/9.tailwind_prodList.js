//제품 사진, 제목, 가격을 반응형 웹사이트로 만들기

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

let AppCallCount = 0;

function ProdListItem({ imgNo, name, price }) { //제품마다 변수를 받아와 다르게 구성
  return (
    <>
      {/* flex-col로 제품의 배열 맞추기  */}
      <div className="flex flex-col gap-[10px]">
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div className="text-center font-bold">{name}</div>
        <div className="after:content-['원'] text-center">{price}</div>
      </div>
    </>
  );
}

function ProdList({ className }) {
  return (
    <>
      <div className={className}>
        {/* 화면의 크기에 따라 제품 배열을 다르게 지정. */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[20px]">
          <li>
            <ProdListItem imgNo={1} name={"PRODUCT 1"} price={"100,000"} />
          </li>
          <li>
            <ProdListItem imgNo={2} name={"PRODUCT 2"} price={"200,000"} />
          </li>
          <li>
            <ProdListItem imgNo={201} name={"PRODUCT 3"} price={"300,000"} />
          </li>
          <li>
            <ProdListItem imgNo={3} name={"PRODUCT 4"} price={"400,000"} />
          </li>
          <li>
            <ProdListItem imgNo={4} name={"PRODUCT 5"} price={"500,000"} />
          </li>
          <li>
            <ProdListItem imgNo={5} name={"PRODUCT 6"} price={"600,000"} />
          </li>
        </ul>
      </div>
    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);

  return (
    <>
      <ProdList className="container mx-auto" />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
