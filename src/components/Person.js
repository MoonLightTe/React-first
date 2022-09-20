import React from "react";

export default class Person extends React.Component {
  // id='Person';
  // constructor(name,age){
  //   super()
  //   this.name=name;
  //   this.age=age;
  // }
  state={
    name:"zs",
    count:100
  }
  setState={

  }
  render() {
    return <h1>{this.state.name}今年{this.state.count}岁</h1>;
  }
}
