const express = require('express');

const router = express.Router()

const todosController = require('../controller/todos');
router.get('/',todosController.getIndex)

module.exports = router