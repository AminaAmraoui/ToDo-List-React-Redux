import React from 'react';
import './App.css';
import ToDo from './Components/todo'
import ToDoList from './Components/todoList'
import store from './Store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="div-container">
      <div className="card text-center">
        <div className="card-header">
          ToDo List
        </div>
        <div className="card-body">
        <p className="card-text">You can add, remove and mark as completed ToDo items.</p>
        </div>
      </div>
      <div className="todo-container">
        <ToDo/>
        <ToDoList/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
