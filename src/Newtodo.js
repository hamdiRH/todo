import React, { useState } from "react";
import { addTodo } from "./action";
import { useDispatch } from "react-redux";
const Newtodo = () => {
  const [newtodo, setNewtodo] = useState("");
  const [inputBorder, setinputBorder] = useState(false);
  const dispatch = useDispatch();
  const handleAddnewTodo = () => {
    if (newtodo) {
      dispatch(
        addTodo({
          isComplete: false,
          todo: newtodo,
          id: Math.random(),
        })
      );
      setNewtodo("");
    } else {
      setinputBorder(true);
    }
  };
  return (
    <div className="container request">
      <div className="col request-content">
        <h1>To-Do App!</h1>
        <p>Add New To-Do</p>
        <input
          type="text"
          style={{ border: inputBorder ? "4px solid red" : "none" }}
          className="form-control input-val"
          placeholder="Enter new task"
          onChange={(e) => {
            setNewtodo(e.target.value);
            setinputBorder(false);
          }}
          value={newtodo}
        />
        <button
          type="button"
          id="add-button"
          className="btn btn-primary"
          onClick={handleAddnewTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Newtodo;
