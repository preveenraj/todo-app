import React from "react";
import axios from "../../axios";

import { ListContainer, Row, Text, DeleteIcon } from "./styles";

interface TodoListProps {
  todos: any[];
  fetchData: () => void;
}

const TodoList = ({ todos, fetchData }: TodoListProps) => {
  const updateTodo = async (id: number, prevState: Boolean) => {
    try {
      await axios.put(`/todos/${id}`, {
        completed: !prevState,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`/todos/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text
              onClick={() => updateTodo(todo._id, todo.completed)}
              isCompleted={todo.completed}
            >
              {todo.text}
            </Text>
            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
};

export default TodoList;
