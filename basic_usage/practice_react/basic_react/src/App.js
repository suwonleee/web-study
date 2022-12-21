// import logo from './logo.svg';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

//각 페이지를 그대로 불러와서 import 해주기
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2_case";
import List from "./pages/List";

//App을 실행했을 때
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about"> About</Link> |(" ")
        <Link to="/counter">Counter</Link> |(" ")
        <Link to="/input">Input</Link> |(" ")
        <Link to="/input2">Input2</Link>|(" ")
        <Link to="/List">List</Link>
        {/* 위 Link문은 이것과 같다. <a href="/">Home</a> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
