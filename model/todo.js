const todoUtils = require("../utils/todos");
class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.getTodos((todos) => {
      todos.push(this);
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    todoUtils.getTodos((todos) => {
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const filteredTodo = todos.filter((todo) => todo.id != id);
      todoUtils.saveTodos(filteredTodo, (err) => {
        callback(err);
      });
    });
  }

  static completeTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const todoIndex = todos.findIndex((todo) => todo.id == id);

      const todo = todos[todoIndex];
      todo.completed = true;
      todos[todoIndex] = todo;
      todoUtils.saveTodos(todos,err => {
        callback(err)
      })
    });
  }
}

module.exports = Todo;
