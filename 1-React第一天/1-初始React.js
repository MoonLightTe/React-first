
// 1.导入react包
import React from "react";
import  ReactDOM  from "react-dom";

// c通过react创建元素
// 创建虚拟dom
const title=React.createElement('button',{id:'btn'},'hello world')


// 3.渲染标签
// react对象，需要挂载的根标签
ReactDOM.render(title,document.querySelector('#root'))