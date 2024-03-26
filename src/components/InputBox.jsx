import React, { useState } from "react";

const InputBox = (props) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    props.setList((prevStat) => [...prevStat, 
      {
        id: Math.random(),
        value,
      },
    ]);
    setValue("");
  };

  return (
    <div className="input-box">
      <input type="text" value={value} onChange={inputHandler} />
      <button onClick={submitHandler}>Add</button>
    </div>
  );
};

export default InputBox;
