import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NotifyMessage {
    id: string;
    timeCreate: Date;
    message: string;
    repeatCount: number;
}

interface Notify {
    id: string;
    exhausterName: string;
    messages: NotifyMessage[];
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
            exhausterName: 'У-171',
            messages: [
                {
                    id: '1',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
                {
                    id: '2',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
                {
                    id: '3',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
            ],
            is_check: true,
        },
        {
            id: '2',
            exhausterName: 'У-172',
            messages: [
                {
                    id: '1',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
                {
                    id: '2',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
                {
                    id: '3',
                    timeCreate: new Date(),
                    message:
                        'Подшипник вентилятора с приводной стороны - локальная проблема подшипника. Проведите ремонтные работы.',
                    repeatCount: 17,
                },
            ],
            is_check: true,
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
