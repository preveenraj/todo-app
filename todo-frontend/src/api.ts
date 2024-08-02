import axios from 'axios';

const API_BASE_URL = "http://localhost:8000";

// Create an instance of Axios with the base URL
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Define your API methods
export const getTodos = async () => {
    try {
        const response = await api.get('/todos');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch todos');
    }
};

export const createTodo = async (todo: any) => {
    try {
        const response = await api.post('/todos', todo);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create todo');
    }
};

export const updateTodo = async (id: number, updates: any) => {
    try {
        const response = await api.put(`/todos/${id}`, updates);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update todo');
    }
};

export const deleteTodo = async (id: number) => {
    try {
        await api.delete(`/todos/${id}`);
    } catch (error) {
        throw new Error('Failed to delete todo');
    }
};