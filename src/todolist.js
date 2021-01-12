import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  completeTodo,
  updateTodoRequest,
} from "./action";
const Todolist = (props) => {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state);

  return (
    <div className="container response-content">
      <div className="response-title">
        <h3>Lets get some work done!</h3>
        <hr style={{ width: "100px" }} />
      </div>
      {todolist.map((el, i) => (
        <div className="response" key={i}>
          <div className="d-flex w-100 pt-3">
            <button
              className="btn btn-outline-primary mr-3"
              onClick={() => {
                dispatch(completeTodo(el.id));
              }}
            >
              {el.isComplete ? "Undo" : "Complete"}
            </button>
            <button
              className="btn btn-outline-primary mx-3"
              onClick={() => {
                dispatch(deleteTodo(el.id));
              }}
            >
              Remove
            </button>
            <button
              className="btn btn-outline-primary mx-3"
              onClick={() => {
                dispatch(updateTodoRequest(el.id));
              }}
            >
              Update
            </button>
            {el.request ? (
              <input
                type="text"
                onKeyUp={(e) =>
                  e.key === "Enter" &&
                  dispatch(updateTodo({ ...el, todo: e.target.value }))
                }
              />
            ) : (
              <h4
                style={{ textDecoration: el.isComplete ? "line-through" : "" }}
              >
                {el.todo}
              </h4>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
