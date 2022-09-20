
// 1.导入react包
import React from "react";
import  ReactDOM  from "react-dom";

// class 关键字
// const divNode = React.createElement('div',{className:'box',id:'box'},'这是有box类名的create虚拟dom')

// const liNode = React.createElement('li',null,'香蕉')
// const liNode2 = React.createElement('li',null,'苹果')
// const liNode3= React.createElement('li',null,'orange')
// const liNode4 = React.createElement('li',null,'006F86F6.png')
// const ulNode=React.createElement('ul',null,liNode,liNode2,liNode3,liNode4)
const ulNode1=<div>
    <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
    </ul>
</div>
ReactDOM.render(ulNode1,document.querySelector('#root'))