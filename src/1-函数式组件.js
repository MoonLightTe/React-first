// 引入包
import React from "react";
import ReactDOM from "react-dom";
// 函数式组件
function Hello(){
  return <h1>我是函数式组件</h1>
}

const listNodes=(
  <div>
  <Hello></Hello>
  </div>
)

ReactDOM.render(listNodes,document.querySelector('#root'));
