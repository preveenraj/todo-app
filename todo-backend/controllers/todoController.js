const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Todos = require("../dbTodos");

// Get Todos List
const getTodos = async (req, res) => {
  const userId = req.headers._id;
  try {
    const allTodos = await Todos.find({
      userId,
    }).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (error) {
    console.log("🚀 ~ getTodos ~ error:", error)
    res.status(400).send({ message: error.message });
  }
};

// Create a new Todo
const createTodo = async (req, res) => {
  const dbTodo = req.body;
  const userId = req.headers._id;
  try {
    const newTodo = await Todos.create({
      ...dbTodo,
      userId,
    });
    res.status(201).send(newTodo);
  } catch (error) {
    console.log("🚀 ~ createTodo ~ error:", error)
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
