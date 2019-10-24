import React, { Component } from 'react'
import TodoInput from'./components/TodoInput';
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';

class App extends Component {
  state = {
    id: uuid(),
    tasks: [],
    task: "",
    completeTask: false
  };
  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTask= {
      id: this.state.id,
      value: this.state.task

    }

    const updatedTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: updatedTasks,
      task: "",
      id: uuid(),
      completeTask: false
    })
  };

  handleDelete = (id) => {
    const filteredTasks = this.state.tasks.filter(task => 
      task.id !== id)
      this.setState({
        tasks: filteredTasks
      })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            to do app
          </h3>
          <TodoInput  
            task={this.state.task} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
            <TodoList 
            tasks={this.state.tasks}
            handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
