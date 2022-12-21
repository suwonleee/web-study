import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom' //웹 브라우저 라우팅할 때 가장 많이 쓰는
import './index.css';
import App from './App'; //확장자 js 생략
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* 브라우저 라우팅할 때 가장 많이 쓰는 */}
    <BrowserRouter> 
    {/* 앱 실행하기 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
