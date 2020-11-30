const express = require('express')
const router = express.Router()

const db = require('../db/db')

function logErr(err) {
  console.log('ERROR FUNCTINO WRKLING')
  console.log(err)
  res.status(500).json({ message: 'Somthing went wrong' })
}

// Create
router.post('/', (req, res) => {
  return db.addTodo(req.body)
    .then((idArr) => res.json({ id: idArr[0] }))
    .catch(err => logErr(err))
})

// Read
router.get('/', (req, res) => {
  return db.getTodos()
    .then((todos) => {
      res.json(todos)
    })
    .catch(err => logErr(err))
})

// Update
router.patch('/', (req, res) => {
  return db.updateTodo(req.body.id, req.body.newText, req.body.completed)
    .then((todos) => {
      res.json(todos)
    })
    .catch(err => logErr(err))
})

// Delete
router.delete('/', (req, res) => {
  return db.deleteTodo(req.body.id)
    .then((response) => {
      res.json(response)
    })
    .catch(err => logErr(err))
})

router.delete('/batchdelete', (req, res) => {
  console.log(req.body);
  console.log(req.body);
  console.log('hi');
  // return db.batchDeleteTodo(req.body)
})

module.exports = router
