import React from "react";

import { FormContainer, Input, Button } from "./styles";

interface FormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}

const Form = ({ input, setInput, addTodo }: FormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        data-testid="input"
        autoFocus
        type="text"
        value={input}
        role="input"
        onChange={handleChange}
      />
      <Button type="submit" data-testid="add-todo">Add</Button>
    </FormContainer>
  );
};

export default Form;
