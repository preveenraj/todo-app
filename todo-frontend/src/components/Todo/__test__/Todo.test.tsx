import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils';
  
const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

test('renders Heading in Todo component', () => {
    renderWithTheme(<Todo/>);
    const headingElement = screen.getByText("My Tasks");
    expect(headingElement).toBeInTheDocument();
});

const addTask = (tasks: string[], inputElement: HTMLElement, buttonElement: HTMLElement) => {
  tasks.forEach((task: string) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

test('renders tasks in Todo component', async () => {
    renderWithTheme(<Todo/>);
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("add-todo");
    addTask(["task1"], inputElement, buttonElement);
    // const taskElements = screen.getAllByTestId("todo-list-item");
    // expect(taskElements.length).toBe(3);
});