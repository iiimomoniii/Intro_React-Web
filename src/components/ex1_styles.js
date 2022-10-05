import React from "react";
//1.3.2 import styles.css เข้ามา
import "./styles.css";
export default function ex1_styles() {
  //1.2.1 ประกาศ styles เเล้วกำหนดคุณสมบัติ
  const styles = { container: { backgroundColor: "#F0F", height: 200 } };
  return (
    //{{ ปีกกา 2 ชั้น
    // { ปีกกาอักเเรกคือการประกาศเพื่อบอกว่าจะเขียนภาษา javascript
    // { ปีกกา 2 คือ object

    //วิธีใช้จะมี 2 เเบบ
    //1.1  กำหนดคุณสมบัติให้ style เลย
    //style={{backgroundColor: "#F0F", height: 200}}
    //1.2  cut มันออกมาภายนอกได้ เเล้้วค่อยเรียกใช้ผ่านตัวเเปร styles
    //style={styles.container}>

    <div>
      {/*1.2.2 เรียกใช้ styles.container*/}
      <div style={styles.container}>
        <h1>Style Example</h1>
      </div>
      {/*1.3.3 ใช้ className เรียก root มาใช้งาน*/}
      <div className="root">
        <h1>Style Example</h1>
      </div>
    </div>
  );
}
