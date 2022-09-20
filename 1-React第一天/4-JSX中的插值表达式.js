
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
// 1.必须要有根标签可以使用一个闭合空<></> <React.Fragment></React.Fragment>
// 2.单标签必须有闭合标签
// 3.关键字冲突
// class=== > className
// for(lable标签) ===》htmlfor
const liNodes=[<li key='4'>444</li>,<li key='5'>555</li>,<li key='6'>666</li>]
const isLoading = true;
const fn = ()=>{
    return '我是函数'
}
const ulNode1=(<div>
    <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        {liNodes}
        <li> {isLoading ? '加载中》》' : '完成加载'} </li>
        <li> {fn()} </li>
        <li> {isLoading && '加载中》》》'} </li>
    </ul>
</div>)
ReactDOM.render(ulNode1,document.querySelector('#root'))