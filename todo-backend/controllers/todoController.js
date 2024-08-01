const mongoose = require("mongoose");
const Todos = require("../dbTodos");

// Get Todos List
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({ createdAt: -1 });
    console.log("🚀 ~ getTodos ~ allTodos:", allTodos)
    res.status(200).send(allTodos);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Create a new Todo
const createTodo = async (req, res) => {
  const dbTodo = req.body;
  try {
    // const newTodo = new Todos(dbTodo);
    // await newTodo.save();
    const newTodo = await Todos.create(dbTodo);
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a Todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Todo Not Found for id: ${id}`);
        }
        const todoId = { _id: id };
        const update = { completed };
        const updatedTodo = await Todos.findOneAndUpdate(todoId, update);
        if (!updatedTodo) {
            return res.status(404).send(`Todo Not Found for id: ${id}`);
        }
        res.status(200).send(updatedTodo);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

// Delete Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Todo Not Found for id: ${id}`);
        }
        const todoId = { _id: id };
        const deletedTodo = await Todos.findOneAndDelete(todoId);
        res.status(200).send(deletedTodo);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
