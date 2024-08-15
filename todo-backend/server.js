const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controllers/todoController');

const {
    signIn,
    logout,
} = require('./controllers/userController');

// App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

// Middlewares
app.use(express.json());

app.use(Cors());

// DB Config
mongoose.connect(connectionURL)
.then(() => {
    console.log('MongoDB Connected')
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });
})
.catch(err => console.log(err));

// API Endpoints

// get todos list
app.get('/todos', getTodos);

//  create a new todo
app.post('/todos', createTodo);

// update a todo
app.put('/todos/:id', updateTodo);

// delete a todo
app.delete('/todos/:id', deleteTodo);

// login
app.post('/signin', signIn);

