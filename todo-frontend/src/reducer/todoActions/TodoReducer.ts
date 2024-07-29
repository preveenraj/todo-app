import { TodoState, TodoAction, ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_TODOS } from './types';
const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
  };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.payload),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        default:
            return state;
    }
};

todoReducer.initialState = initialState;

export default todoReducer;