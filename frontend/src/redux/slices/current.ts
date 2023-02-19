import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAglomachines, State } from './types';

const initialState: State = {
};

export const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        CLEAR: (state: State) => {
            state.name = undefined;
        },
        SET_NAME: (
            state: State,
            actions: PayloadAction<{
                nameAglo: string;
                nameExh: string;
            }>,
        ) => {
            state.name = actions.payload;
        },
        SET_AGLO: (state: State, actions: PayloadAction<IAglomachines>) => {
            state.aglomachines = actions.payload;
        },
    },
});
