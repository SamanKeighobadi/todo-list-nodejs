const epxress = require('express');

const router = epxress.Router();

const adminController = require('../controller/admin');

router.post('/add-todo',adminController.addTodo)

router.get('/delete-todo/:id',adminController.deleteTodo)

module.exports = router