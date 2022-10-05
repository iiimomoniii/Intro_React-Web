import React from "react";

export default function CounterFunctionalComponent() {
  //0. react hook
  //มันคือการเกี่ยวเอาความสามารถของ state มาใช้งาน โดยประการตัว useState

  //1. ประการตัว useState
  //count = ตัวเเปร , setCount = set ค่า count , useState = กำหนดค่าเริมต้นให้กับ count ในที่นี้คือ 0
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Counter Functional Component</h1>
      {/*2. count ที่มาจาก hook => userState*/}
      {/*4. ค่า count ถูกเปลี่ยนเเปลงผ่าน function setCount() เเละ function render ก็จะทำการ update ค่า count เพื่อเเสดงผลใหม่ */}
      <h3>Count : {count}</h3>
      {/*3. สร้าง button เพื่อทำการเปลี่ยนเเปลงค่า count โดยทำการเปลี่ยนเเปลงผ่าน setCount() โดยต้องส่งค่า count เข้าไปใน function ด้วย*/}
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
}
