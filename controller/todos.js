const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");

exports.getIndex = (req, res) => {
  todoUtils.getCompletedTodo((completedTodos) => {
    todoUtils.getRemainingTodos((remainingTodos) => {
      Todo.fetchAll((todos) => {
        res.render("index", {
          title: "Todo List",
          todos,
          completedTodos,
          remainingTodos,
        });
      });
    });
  });
};
