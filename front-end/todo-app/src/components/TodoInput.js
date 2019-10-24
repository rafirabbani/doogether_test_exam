import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {task, handleChange, handleSubmit} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <input type="text" className="form-control text-capitalize" 
                    placeholder="add a new task" value={task} onChange={handleChange}/>
                        <div className="input-group-append">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                    </div>    
                    <button type="submit" className="btn btn-block btn-primary mt-3">
                        Add Task
                    </button>          
                </form>
            </div>
        )
    }
}
