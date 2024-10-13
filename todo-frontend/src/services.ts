import api from './api';

// Define your API methods
export const getTodos = async () => {
    try {
        const response = await api.get('/todos');
        return response.data;
    } catch (error) {
        console.log("getTodos ~ error:", error)
        throw new Error('Failed to fetch todos');
    }
};

export const createTodo = async (todo: any) => {
    try {
        const response = await api.post('/todos', todo);
        return response.data;
    } catch (error) {
        console.log("createTodo ~ error:", error)
        throw new Error('Failed to create todo');
    }
};

export const updateTodo = async (id: number, updates: any) => {
    try {
        const response = await api.put(`/todos/${id}`, updates);
        return response.data;
    } catch (error) {
        console.log("updateTodo ~ error:", error)
        throw new Error('Failed to update todo');
    }
};

export const deleteTodo = async (id: number) => {
    try {
        await api.delete(`/todos/${id}`);
    } catch (error) {
        console.log("deleteTodo ~ error:", error)
        throw new Error('Failed to delete todo');
    }
};

export const signIn = async (user) => {
    try {
        const response = await api.post('/signin', { user });
        const { user: dbUser } = response.data;
        const id = dbUser._id;
        api.defaults.headers.common['_id'] = id;
        return response.data;
    } catch (error) {
        console.log("signIn ~ error:", error)
        throw new Error('Failed to signin');
    }
}