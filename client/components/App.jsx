import React from 'react'
import{Route} from 'react-router-dom'

import AddTodo from './AddTodo'

import Active from './Active'
import Completed from './Completed'
import Home from './Home'
import Footer from './Footer'


class App extends React.Component {
  
  


  render () {
    return (
      <>
        
        <AddTodo />
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/active' component={Active}/>
        <Route exact path ='/completed' component={Completed}/>
        <Footer/>

        
   
  
      </>
    )
  }
}

export default App