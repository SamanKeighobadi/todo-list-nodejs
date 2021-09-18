const epxress = require('express');

const router = epxress.Router();

const adminController = require('../controller/admin');

router.post('/add-todo',adminController.addTodo)

router.get('/delete-todo/:id',adminController.deleteTodo)
router.get('/complete-todo/:id',adminController.completeTodo)

module.exports = router