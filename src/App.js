


import React, { Component } from 'react'
// import logo from "./logo.svg";
import "./App.css";
//import Post from "./components/Post.js";
import Register from "./components/Register.js";
import Post from "./components/Post.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  state ={list: [
    { title: "The Force Awakens", info: "7" },
    { title: "The Last Jedi", info: "8" },
    { title: "The Rise of Skywalker", info: "AWWWW YEAH!!!!!"}
  ]}
  render() {
    return (
      <div>
              <Register />
      {this.state.list.map((element)=>{
        return <Post title={element.title} info={element.info}/>
      })}
      </div>
    )
  }
}
