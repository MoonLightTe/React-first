// 引入包
import React from "react";
import ReactDOM from "react-dom";
// 引入样式
import "./list.css";

// 声明一个变量数组
const list = [
  { id: 1, name: "刘德华", content: "给我一杯忘情水" },
  { id: 2, name: "五月天", content: "不打扰，是我的温柔" },
  { id: 3, name: "毛不易", content: "像我这样优秀的人" },
  null
];

const listArr = list.map((item) => {
  return item ? (
    <li key={item.id} className="li">
      <h3 className="name">评论人：{item.name}</h3>
      <p className="content">评论内容：{item.content}</p>
    </li>
  ) : <div key={item}>暂无数据</div>;
});
const listNodes = <ul>{listArr}</ul>;

ReactDOM.render(listNodes,document.querySelector('#root'));
