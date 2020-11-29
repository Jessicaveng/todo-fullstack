const connection = require('./connection')

// Create
function addTodo (todo, db = connection) {
  return db('todos').insert(todo)
}

// Read
function getTodos (db = connection) {
  return db('todos').select()
}

// Update
function updateTodo (id, newText, completed, db = connection) {
  return db('todos')
    .where({id: id})
    .update({
      text: newText,
      completed: completed
    })
}

// Delete
function deleteTodo (id, db = connection) {
  return db('todos')
    .where('id', id)
    .del()
}

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo
}