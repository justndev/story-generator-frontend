import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentSize: 'large',
        currentPage: 'home',
    },
    reducers: {
        changeSize: (state, action) => {
            if (action.payload < 1000) {
                state.currentSize = 'small';
            }
            else if (action.payload < 1500) {
                state.currentSize = 'medium';
            }
            else state.currentSize = 'large';

        },
        changePage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const { changeSize, changePage } = appSlice.actions;
export default appSlice.reducer;
