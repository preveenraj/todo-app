import React, { useEffect, useState } from "react";
import axios from "../../axios";

import { Container } from "./styles";
import Form from "../Form";
import TodoList from "../TodoList";
import Key from "../Key";
import Author from "../Author";


const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/todos");
      setTodos(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const addTodo = async () => {
    try {
      if (input.length === 0) return;
      await axios.post("/todos", {
        text: input,
        completed: false,
      });
      fetchData();
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
      <h2>List of Todos</h2>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData} />
      <Key />
      <Author/>
    </Container>
  );
};

export default Todo;
