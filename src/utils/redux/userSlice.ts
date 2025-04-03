import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    jwt: string;
    currentVideoId: string;
}

interface UserState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        setCurrentVideoId: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.currentVideoId = action.payload;
            }
        }

    }
});

export const { login, logout, setCurrentVideoId } = userSlice.actions;
export default userSlice.reducer;
