const fs = require("fs");
const path = require("path");

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
  return Math.floor(Math.random() * 1200);
};
