import { AuthAction, AuthState } from './types';

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                user: {
                    _id: action.payload._id,
                    name: action.payload.displayName,
                    email: action.payload.email,
                    firebaseUserId: action.payload.uid,
                },
                loading: false,
                error: null,
            };
        case 'AUTH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

authReducer.initialState = initialState;

export default authReducer;