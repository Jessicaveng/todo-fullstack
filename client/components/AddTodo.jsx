import React from 'react'
import {connect} from 'react-redux'
import { addNewTask } from '../actions'


class AddTodo extends React.Component{

  state={
    newTask: ''
  }

  handleChange = (event)=>{
    console.log(event.target.value)
    this.setState({
      [event.target.task]:event.target.value
    })
  }

  handleSubmit = (event) =>{
    console.log(this.state.newTask)
    event.preventDefault()
    this.props.dispatch(addNewTask(this.state.newTask))
  }

  render(){
    return (
      <>
       <form  onSubmit={this.handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} name='newTask' onChange={this.handleChange}/>
        </form>
      </>
    )


  }

}

function mapStateToProps (globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(AddTodo)
