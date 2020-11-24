// import React from 'react'

import { connect } from 'react-redux'
import React from 'react'

import {getTodos} from '../actions/getTodos'
import {updateDBTodo} from '../actions/updateTodo'
import {removeTodo} from '../actions/deleteTodo'

export default connect(mapStateToProps)(TodosList)



function TodosList(props) {

  function updateCompleted(todo){
    todo.completed = todo.completed ? 0 : 1
    props.dispatch(updateDBTodo(todo))
  }
  function deleteTodo(todo){
    props.dispatch(removeTodo(todo))
  }
  function returnProps(){
    if(props.match.params.status == "completed"){
      return props.todos.filter(todo=>todo.completed == 1)
    }else if(props.match.params.status == "active"){
      return props.todos.filter(todo=>todo.completed == 0)
    }else{
      return props.todos
    }
  }
console.log(props)
    return(
      <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">

        {returnProps().map(todo => {
          return (
            <li className={todo.completed ? "completed" : ""} key={todo.id}>
            <div className="view">
            <input className="toggle" type="checkbox" id={todo.id} checked={todo.completed} onChange={() => updateCompleted (todo)}/>
            <label>{todo.todo}</label>
            <button className="destroy" onClick={()=> deleteTodo(todo)}></button>
          </div>
          </li>
          )}
        )}
      </ul>
      </>
    )
}

function mapStateToProps (globalState){

  return {
    todos: globalState.getTodos
  }
}
