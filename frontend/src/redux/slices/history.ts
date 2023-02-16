import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HistoryRoute {
    title: string;
    to: string;
}

interface State {
    routes: HistoryRoute[];
}

const initialState: State = {
    routes: [],
};

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        PUSH: (state: State, action: PayloadAction<HistoryRoute>) => {
            state.routes.push(action.payload);
        },
        REPLACE: (state: State, action: PayloadAction<HistoryRoute[]>) => {
            state.routes = action.payload;
        },
        SLICE: (state: State, action: PayloadAction<number>) => {
            state.routes = state.routes.slice(action.payload);
        },
    },
});
