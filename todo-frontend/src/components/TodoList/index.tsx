import React from "react";
import axios from "../../axios";

import { ListContainer, Row, Text, DeleteButton } from "./styles";

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
            <DeleteButton onClick={() => deleteTodo(todo._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(167,167,167,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
            </DeleteButton>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
};

export default TodoList;
