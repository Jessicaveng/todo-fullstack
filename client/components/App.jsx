import React from 'react'
import { connect } from 'react-redux'

import Footer from './Footer'
import AddTodo from './AddTodo'
import ShowToDo from './ShowToDo'
import ShowActive from './ShowActive'
import ShowCompleted from './ShowCompleted'
import {getTodos,checkCompleted, deleteTodo}from '../actions'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getTodos())
  }
 
  getActive = ()=> {
    return this.props.todoList.filter(todo =>todo.completed == false)
  }
 
  getCompleted= ()=>{
    return this.props.todoList.filter(todo =>todo.completed == true)
  }

  renderPage = (page)=>{
    switch(page){
      case 'showAll':
        return <ShowToDo />
      case 'active':
        return <ShowActive getActive={this.getActive}/>
      case 'completed':
        return <ShowCompleted getCompleted={this.getCompleted}/>
    }
  }


  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
          {this.renderPage(this.props.activePage)}
        </section>
        <footer className="footer">
          <Footer/>
        </footer>
 
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
    activePage: globalState.activePage
  }
}
export default connect(mapStateToProps)(App)
