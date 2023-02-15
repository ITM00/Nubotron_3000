import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Notify {
    id: string;
    title: string;
    is_check: boolean;
}

interface State {
    notifies: Notify[];
    has_no_checked: boolean;
}

const initialState: State = {
    notifies: [
        {
            id: '1',
            title: 'Какое-то активноое уведомление',
            is_check: true,
        },
        {
            id: '2',
            title: 'Какое-то неактивное уведомление',
            is_check: false,
        },
    ],
    has_no_checked: true,
};

export const notifySlice = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        PUSH: (state: State, action: PayloadAction<Notify>) => {
            state.notifies.push(action.payload);
        },
    },
});
