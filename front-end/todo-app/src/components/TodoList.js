import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        const {tasks, handleDelete} = this.props;
        return (
            <ul className="list-group my-4">
                <h3 className="text-capitalize text-center">
                    Task List
                </h3>
                {tasks.map(task => {
                    return (
                        <TodoItem key={task.id} 
                        value={task.value} 
                        handleDelete={() => handleDelete(task.id)}
                        />
                        )
                    })
                }
                
            </ul>
        );
    }
}
