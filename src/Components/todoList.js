import React, { Component } from 'react'
import './todoList.css'
import { connect }  from 'react-redux'
import {deleteTodo,toggleTodo,setVisibilityFilter} from '../actions/actionCreator'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionCreator'
import { bindActionCreators } from 'redux'

class ToDoList extends Component {


    render(){
       
        return <div className="table-container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
                    onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>All</li>
                <li className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
                    onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>
                    Completed
                </li>
                <li className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)} >
                    Active</li>
                </ol>
            </nav>
        {this.props.todos.length !== 0 ? (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ToDo</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>

                {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? <i class="fas fa-check"></i> : ""}
                  </td>
                  <td>
                    <span
                      className="fas fa-minus-circle"
                      onClick={() => this.props.deleteTodo(todo.id)}
                    />
                    <span
                      className="fas fa-check-circle"
                      onClick={() => this.props.toggleTodo(todo.id)}
                    />
                  </td>
                </tr>
              ))}
                </tbody>

                </table>
           ) : (
            <div
              style={{ marginTop: "50px" }}
              className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
            >
              <div className="alert alert-danger" role="alert">
                Todo List is empty or Filter results show no results
              </div>
            </div>
          ) }    
    </div>
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error("Unknown filter: " + filter)
    }
  }


  /** mapStateToProps get the state from the Redux Store and inject as Props to the App */
  const mapStateToProps = state => {
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
             visibilityFilter: state.visibilityFilter
   }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        deleteTodo,
        toggleTodo,
        setVisibilityFilter
      },
      dispatch
    )
  }




  


  export default connect(mapStateToProps, mapDispatchToProps) (ToDoList)