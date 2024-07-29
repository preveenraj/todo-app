import React, { useEffect, useReducer, useState } from "react";
import axios from "../../axios";

import { Container, Heading } from "./styles";
import Form from "../Form";
import TodoList from "../TodoList";
import todoReducer from "../../reducer/TodoReducer";
import { ADD_TODO, SET_TODOS, TodoState } from "../../reducer/types";

const Todo = () => {
  const [input, setInput] = useState("");

  const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const todos = state.todos;

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/todos");
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
      const { data } = await axios.post("/todos", todoToAdd);
      dispatch({
        type: ADD_TODO,
        payload: todoToAdd,
      });
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Heading>My Tasks</Heading>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData} />
    </Container>
  );
};

export default Todo;
