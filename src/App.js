import React from "react";
// import logo from "./logo.svg";
import "./App.css";
//import Post from "./components/Post.js";
import Register from "./components/Register.js";
import Post from "./components/Post.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let list = [
    { title: "The Force Awakens", info: "7" },
    { title: "The Last Jedi", info: "8" },
    { title: "The Rise of Skywalker", info: "AWWWW YEAH!!!!!"}
  ];
  return (
    <div className="App">



      <Register />
        <Post list={list[0]} />
        <Post list={list[1]} />
        <Post list={list[2]} />

    </div>
  );
}

export default App;
