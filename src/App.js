import React, { useState } from "react";
import "./App.css";

function Text(props) {
  return (
    <div className="box-style">
      <div>{props.text.text}</div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "react를 배워봅시다." },
    { id: 2, text: "react를 배워봅시다." },
    { id: 3, text: "react를 배워봅시다." },
  ]);

  const [text, setText] = useState("");

  const addHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      text: text,
    };
    setTodos([...todos, newTodos]);
    console.log(todos);
  };

  return (
    <div className="App-header">
      <p>TodoList</p>
      <div className="input">
        <input
          className="add-input"
          type="text"
          value={text}
          placeholder="자바스크립트를 배워봅시다."
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="btn" onClick={addHandler}>
          추가하기
        </button>
      </div>
      <div className="box">
        {todos.map((text) => {
          return <Text text={text} key={text.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
