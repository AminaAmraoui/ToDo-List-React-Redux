import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import './todo.css'

class ToDo extends Component { 

  /**** Constructor  ***/

    constructor(props){
      super(props)
        this.state = {
            todotext: '',
        }
    }
   /*** OnChange Method ***/
   onChangeTodoText(e){
    this.setState({
        todotext: e.target.value
    })
}


    /****************** Render Method *********************/

  render() {
    return (
    <form className="form-inline">
        <input type="text" 
                onChange={(event) =>this.onChangeTodoText(event)}
                value={this.state.todotext}
                className="form-control mt-2 ml-2 mr-sm-2" id="todo" 
                placeholder="ToDo..."></input>
        <input type="button" value="Add" 
               onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } }
               className="btn btn-primary ml-2 mt-2"/>  
        <input type="button" value="Cancel" className="btn btn-danger ml-2 mt-2" 
               onClick={ () => this.setState({ todotext: '' }) }/>      
    </form>
    )
  }    
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addTodo
  }, dispatch)
}



export default connect(null, mapDispatchToProps)(ToDo)