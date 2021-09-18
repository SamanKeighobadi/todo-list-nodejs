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

exports.generateRandomId = () => {
  return Math.floor(Math.random() * 1200);
};
