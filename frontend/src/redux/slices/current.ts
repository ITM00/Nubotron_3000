import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Aglomachine, IBearing, MasloBack, Scheme, State } from './types';

const bearing: IBearing = {
    1: {
        T: {
            value: 220,
            state: 'normal',
        },
        B: {
            value: 8,
            state: 'danger',
        },
        G: {
            value: 0,
            state: 'normal',
        },
        O: {
            value: 0,
            state: 'danger',
        },
    },
    2: {
        T: {
            value: 220,
            state: 'warning',
        },
        B: {
            value: 8,
            state: 'normal',
        },
        G: {
            value: 0,
            state: 'normal',
        },
        O: {
            value: 0,
            state: 'normal',
        },
    },
    3: {
        T: {
            value: 220,
            state: 'warning',
        },
    },
    4: {
        T: {
            value: 220,
            state: 'normal',
        },
    },
    5: {
        T: {
            value: 220,
            state: 'danger',
        },
    },
    6: {
        T: {
            value: 220,
            state: 'normal',
        },
    },
    7: {
        T: {
            value: 220,
            state: 'normal',
        },
        B: {
            value: 8,
            state: 'normal',
        },
        G: {
            value: 0,
            state: 'normal',
        },
        O: {
            value: 0,
            state: 'normal',
        },
    },
    8: {
        T: {
            value: 220,
            state: 'danger',
        },
        B: {
            value: 8,
            state: 'warning',
        },
        G: {
            value: 0,
            state: 'normal',
        },
        O: {
            value: 0,
            state: 'normal',
        },
    },
    9: {
        T: {
            value: 220,
            state: 'normal',
        },
    },
};

const masloBack: MasloBack = {
    level: {
        value: 30,
        state: 'normal',
    },
    pressure: {
        value: 2,
        state: 'normal',
    },
};

const initialState: State = {
    scheme: {
        bearing: bearing,
        coolant: {
            after1: {
                value: 220,
                state: 'danger',
            },
            before1: {
                value: 220,
                state: 'warning',
            },
            after2: {
                value: 220,
                state: 'normal',
            },
            before2: {
                value: 220,
                state: 'normal',
            },
        },
        mainPrivod: {
            I: {
                value: 0,
                state: 'danger',
            },
            IDvig: {
                value: 0,
                state: 'normal',
            },
            URoter: {
                value: 0,
                state: 'warning',
            },
            UStater: {
                value: 0,
                state: 'normal',
            },
        },
        masloBack: masloBack,
        truba: {
            level: {
                value: 74.3,
                state: 'danger',
            },
            vacuum: {
                value: 15,
                state: 'danger',
            },
            damper: 50,
            temperature: 45,
        },
    },
    aglomachines: [
        {
            name: '1',
            exhausts: [
                {
                    id: 'У-171',
                    status: 'run',
                    numberRoter: 1,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
                {
                    id: 'У-172',
                    status: 'stop',
                    numberRoter: 2,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
            ],
        },
        {
            name: '2',
            exhausts: [
                {
                    id: 'Ф-171',
                    status: 'run',
                    numberRoter: 1,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
                {
                    id: 'Ф-172',
                    status: 'stop',
                    numberRoter: 2,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
            ],
        },
        {
            name: '3',
            exhausts: [
                {
                    id: 'Ф-171',
                    status: 'run',
                    numberRoter: 1,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
                {
                    id: 'Ф-172',
                    status: 'stop',
                    numberRoter: 2,
                    dateChangeRoter: new Date(),
                    lastChangeRoter: 1,
                    prediction: {
                        days: 1,
                        state: 'danger',
                    },
                    bearing: bearing,
                    masloBack: masloBack,
                },
            ],
        },
    ],
};

export const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        SET_SCHEME: (state: State, actions: PayloadAction<Scheme>) => {
            state.scheme = actions.payload;
        },
        CLEAR: (state: State) => {
            state.name = undefined;
            state.scheme = undefined;
        },
        SET_NAME: (state: State, actions: PayloadAction<string>) => {
            state.name = actions.payload;
        },
        SET_AGLO: (state: State, actions: PayloadAction<Aglomachine[]>) => {
            state.aglomachines = actions.payload;
        },
    },
});
