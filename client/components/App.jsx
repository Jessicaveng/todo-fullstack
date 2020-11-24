import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodosList from './TodosList'
import FooterComplete from './Footer'
import ShowAll from './ShowAll'
import { HashRouter as Router } from 'react-router-dom'


import { Link, Route } from 'react-router-dom'

import {getTodos} from '../actions/getTodos'
import {createTodo} from '../actions/addTodo'
import {updateDBTodo} from '../actions/updateTodo'
import {removeTodo} from '../actions/deleteTodo'


class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTodos())
    // this.props.dispatch(createTodo({todo:'clean', completed: 0}))
    // this.props.dispatch(updateDBTodo({id:4, todo:'run', completed: 1}))
    // this.props.dispatch(removeTodo({id:10, todo:'clean', completed: 0}))
  }

  render () {
    console.log(this.props)
    return (

      <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <Route exact path='/' component={TodosList}/>
        <Route exact path='/:status' component={TodosList} />
      </section>
      <footer className="footer">
        {/* <FooterComplete/> */}
        <Route exact path='/:status' component ={FooterComplete} />
        <Route exact path='/' component ={FooterComplete} />
      
      </footer>
    </>
 
    )
  }
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.getTodos
  }
}

export default connect(mapStateToProps)(App)
