import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

import { Container, Heading } from "./styles";
import Form from "../Form";
import TodoList from "../TodoList";
import todoReducer from "../../reducer/todoActions/TodoReducer";
import { ADD_TODO, SET_TODOS } from "../../reducer/todoActions/types";
import { createTodo, getTodos } from "../../api";

const Todo = () => {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(todoReducer, todoReducer.initialState);

  const todos = state.todos;

  const fetchData = async () => {
    try {
      const data = await getTodos();
      dispatch({ type: SET_TODOS, payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const addTodo = async () => {
    try {
      if (input.length === 0) return;

      const todoToAdd = {
        title: input,
        completed: false,
      };
      const todoAdded = await createTodo(todoToAdd);
      dispatch({
        type: ADD_TODO,
        payload: todoAdded,
      });
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <Container>
      <Heading>My Tasks</Heading>
      <button onClick={handleLogOut}>Log Out</button>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData} />
    </Container>
  );
};

export default Todo;
