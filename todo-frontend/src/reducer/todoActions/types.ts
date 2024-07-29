export interface Todo {
    id?: number;
    title: string;
    completed: boolean;
}

// Type for the state of your todo app
export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

// Define action types
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

// Define action interfaces
interface SetTodosAction {
    type: typeof SET_TODOS;
    payload: Todo[];
}

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: number; // id of the todo item
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number; // id of the todo item
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string | null;
}

// Define a union type for all possible actions
export type TodoAction =
    SetTodosAction
    | AddTodoAction
    | ToggleTodoAction
    | DeleteTodoAction
    | SetLoadingAction
    | SetErrorAction;