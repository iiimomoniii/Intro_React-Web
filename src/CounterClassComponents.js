import React, { Component } from "react";

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    //2. การสร้างตัวเเปรเเบบ state
    //เมื่อมีการเปลี่ยนเเเปลงค่า มันจะทำการ render ค่าที่เกิดการเปลี่ยนเเปลง
    this.state = {
      //เช่น count
      count: 0,
    };
  }

  //1. function render จะถูกเรียกทุกครั้งเมื่อมีการเปลี่ยนเเปลง state เพื่อ  update UI
  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <h1>Counter Class Component</h1>
        {/*3. this.state.count เเสดง ค่า count ที่มาจาก this.state*/}
        {/*5. ค่า count ที่ state เกิดการเปลี่ยนเเปลง function render ก็จะทำการ update ค่า count ที่เเสดงผลใหม่ */}
        <h3>Count : {this.state.count}</h3>
        {/*4. สร้าง button เพื่อทำการเปลี่ยนเเปลงค่า count ที่อยู่ใน this.state โดยทำการเปลี่ยนเเปลงผ่าน function this.setState()*/}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1 ,
            })
          }
        >
          ADD
        </button>
      </div>
    );
  }
}
