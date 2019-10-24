import React, { Component } from 'react'


export default class TodoItem extends Component {
    render() {
        const {value, handleDelete} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex 
            justify-content-between my-4">
                <h6>{value}</h6>
                <div className="todo-icon">
                    <span> 
                        <button className= "btn text-success">
                        <i className="fas fa-check"/>
                        </button>
                    </span>
                    <span> 
                        <button className="btn text-danger" onClick={handleDelete}>
                    <i className="fas fa-trash"/>
                    </button>  
                    </span>
                </div>
            </li>
        );
    }
}
