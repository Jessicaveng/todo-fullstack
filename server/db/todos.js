
const connection = require('./connection')


function getTodos (db = connection){
  return db('todo').select()
}

function addTodos (data, db = connection){
  return db('todo').insert(data)
}

function updateDoneOrNot (data, db = connection){
  console.log(data)
  return db('todo')
  .where('id' , data.id)
  .update({completed: data.completed})
}

function deleteTodo (data, db = connection){
  console.log(data)
  return db('todo')
  .where('id' , data.id)
  .del(data)
}

function getCompletedTodos (data, db = connection){
  return db('todo').select().where('completed', data.completed == true)
}



module.exports={
  getTodos,
  addTodos,
  updateDoneOrNot,
  deleteTodo
}