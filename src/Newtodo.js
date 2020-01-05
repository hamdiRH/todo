import React from "react";
import { addTodo } from "./action";
import { connect } from "react-redux";

class Newtodo extends React.Component {
  state = {
    newtodo: ""
  };
  render() {
    return (
      <div className="container request">
        <div className="col request-content">
          <h1>To-Do App!</h1>
          <p>Add New To-Do</p>
          <input
            type="text"
            className="form-control input-val"
            placeholder="Enter new task"
            onChange={e => this.setState({ newtodo: e.target.value })}
            value={this.state.newtodo}
          />
          <button
            type="button"
            id="add-button"
            className="btn btn-primary"
            onClick={()=>{this.props.addTodo({isComplete:false,todo:this.state.newtodo,id:Math.random()});this.setState({newtodo:""})}}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(Newtodo);
