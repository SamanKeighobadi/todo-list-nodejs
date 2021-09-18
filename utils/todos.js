const fs = require("fs");
const path = require("path");

const {v4: uuidv4} = require('uuid');

const rootDir = require("./path");
const filePath = path.join(rootDir, "data", "todos.json");

exports.getTodos = (callback) => {
  fs.readFile(filePath, (err, fileContect) => {
    if (err) return callback([]);
    callback(JSON.parse(fileContect));
  });
};

exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    callback(err);
  });
};

exports.getCompletedTodo = (callback) =>{
  this.getTodos(todos => {
    const filteredTodo = todos.filter( todo => todo.completed=== true)
    callback(filteredTodo.length)
  })
}

exports.getRemainingTodos = (callback) => {
  this.getTodos(todos => {
    const filteredTodo = todos.filter(todo => todo.completed !== true)
    callback(filteredTodo.length)
  })
}

exports.generateRandomId = () => {
  return uuidv4()
};
