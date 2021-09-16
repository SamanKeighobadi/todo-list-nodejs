const epxress = require('express');

const route = epxress.Router();

const adminController = require('../controller/admin');

route.post('/add-todo',adminController.addTodo)



module.exports = route