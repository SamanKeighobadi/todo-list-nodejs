const Todo = require("../model/todo");

exports.addTodo = (req, res) => {
  if (!req.body.todo) return req.redirect("/");
  const todo = new Todo(Math.floor(Math.random() * 1200), req.body.todo);
  todo.save((err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
