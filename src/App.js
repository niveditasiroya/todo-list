import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const deleteHandler = (id) => {
    const newArr = list.filter((item) => item.id !== id);
    console.log(id);
    setList(newArr);
  };

  return (    
    <div className="App">
      <h1>React To Do</h1>

      <InputBox setList={setList} />

      <div className="todo-list-box">
        {console.log(list)}
        {list?.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.value}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
