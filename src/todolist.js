import React from "react";
import { deleteTodo, updateTodo, completeTodo,updateTodoRequest } from "./action";
import { connect } from "react-redux";

const todolist = props => {
  return (
    <div className="container response-content">
      <div className="response-title">
        <h3>Lets get some work done!</h3>
        <hr style={{ width: "100px" }} />
      </div>
      {props.todolist.map((el, i) => (
        <div className="response" key={i}>
          <div className="d-flex w-100 pt-3">
            <button
              className="btn btn-outline-primary mr-3"
              onClick={() => {
                props.completeTodo(el.id);
              }}
            >
              {el.isComplete ? "Undo" : "Complete"}
            </button>
            <button
              className="btn btn-outline-primary mx-3"
              onClick={() => {
                props.deleteTodo(el.id);
              }}
            >
              Remove
            </button>
            <button className="btn btn-outline-primary mx-3" onClick={() => {props.updateTodoRequest(el.id)}}>
              Update
            </button>
            {
              el.request? 
              <input type="text" onKeyUp={e=>e.key==="Enter" &&props.updateTodo({...el,todo:e.target.value})}/>: 
              <h4 style={{ textDecoration: el.isComplete ? "line-through" : "" }}>
              {el.todo}
            </h4>
            }
           
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => ({ todolist: state });
export default connect(mapStateToProps, {
  deleteTodo,
  updateTodo,
  completeTodo,
  updateTodoRequest
})(todolist);
