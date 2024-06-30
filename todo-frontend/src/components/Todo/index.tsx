import React, { useEffect, useState } from "react";
import axios from "../../axios";

import { Container, Heading } from "./styles";
import Form from "../Form";
import TodoList from "../TodoList";


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
      <Heading>My Tasks</Heading>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData} />
    </Container>
  );
};

export default Todo;
