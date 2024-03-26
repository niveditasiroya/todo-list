import React, { useState } from "react";

const TodoItem = (props) => {
  const [todoValue, setTodoValue] = useState(props.name);
  const [isUpdate, setIsUpdate] = useState(false);
  const [ishecked, setIshecked] = useState(false);

  const updateHandler = () => {
    setIsUpdate(!isUpdate);
  };

  const updateInputHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const handleCheck = () => {
    setIshecked(!ishecked);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={handleCheck}
        style={{ margineRight: "8px" }}
      />
      {!isUpdate ? (
        <span
          style={{ textDecoration: ishecked ? "line-through" : "none" }}
          onClick={handleCheck}
        >
          {todoValue}
        </span>
      ) : (
        <input value={todoValue} onChange={updateInputHandler} />
      )}
      <button onClick={updateHandler} style={{ background: "#F39C12" }}>
        update
      </button>
      <button
        onClick={() => props.deleteHandler(props.id)}
        style={{ background: "#C94529 " }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
