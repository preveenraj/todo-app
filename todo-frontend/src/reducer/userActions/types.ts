export interface User {
    _id: string;
    firebaseUserId: string;
    name: string;
    email: string;
}

// Type for the state of your todo app
export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

// Define action types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Define action interfaces
interface AuthLoadingAction {
    type: typeof AUTH_LOADING;
}

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
    payload: any;
}

interface AuthErrorAction {
    type: typeof AUTH_ERROR;
    payload: string;
}

interface AuthLogoutAction {
    type: typeof AUTH_LOGOUT;
}

// Define a union type for all possible actions
export type AuthAction =
    AuthLoadingAction
    | AuthSuccessAction
    | AuthErrorAction
    | AuthLogoutAction;
