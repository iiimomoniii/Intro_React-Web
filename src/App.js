import React from "react";

export default () => {
  const var1 = 0;
  const var2 = "Hello";
  const var3 = true;

  return (
    <div>
      {/*การเรียกใช้ตัวเเปร*/}
      <h1>codemobile {var1}</h1>
      <h1>codemobile {var2}</h1>
      {/*การเรียกใช้ตัวเเปรเเบบมีเงื่อนไข*/}
      <h1>codemobile {var3 && "Yes"}</h1>
      {var3 ? <h1>codemobile</h1> : <h1>NO</h1>}
    </div>
  );
};
