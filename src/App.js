import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponents";
import CounterFunctionalComponent from "./CounterFunctionalComponent";
export default () => {
  let var1 = 0;
  const var2 = "Hello";
  const var3 = true;
  //count คือคัวเเปร ส่วน setCount คือ function ในการเปลี่ยนเเปลงค่า count
  //useState(0) => คือการประกาศ let count = 0
  const [count, setCount] = useState(0);
  return (
    <div>
      {/*การเรียกใช้ตัวเเปร*/}
      <h1>codemobile {var1}</h1>
      <h1>codemobile {var2}</h1>
      {/*การเรียกใช้ตัวเเปรเเบบมีเงื่อนไข*/}
      <h1>codemobile {var3 && "Yes"}</h1>
      {var3 ? <h1>codemobile</h1> : <h1>NO</h1>}
      {/*เแสดงค่า count จากเริ่มต้นเเละที่เกิดการเปลี่ยนเเปลงจาก function setCount*/}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          var1 = var1 + 1;
          //function setCount รับค่า count เข้าไป +1
          setCount(count + 1);
          console.log(var1);
        }}
      >
        ADD
      </button>
      {/* ถ้าเป็นการประกาศComponent เเบบ class มันจะเปลือง memory มากกว่าแบบ Functional เพราะ class มันไป extend เพื่อเอาคุณสมบัติของ component ใน react มาซึ่งบางครั้งเราไม่จำเป็นต้องใช้*/}
      <CounterClassComponent />
      <CounterFunctionalComponent />
    </div>
  );
};
