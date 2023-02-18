import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAglomachines, State } from './types';

const initialState: State = {
    aglomachines: {
        '1': {
            'У-171': {
                bearing: {
                    '1': {
                        T: { value: 60.399993896484375, state: 'normal' },
                        G: { value: 0.2604166567325592, state: 'normal' },
                        B: { value: 0.2604166567325592, state: 'normal' },
                        O: { value: 0.2430555522441864, state: 'normal' },
                    },
                    '2': {
                        T: { value: 54.99999237060547, state: 'normal' },
                        O: { value: 0.35879629850387573, state: 'normal' },
                        G: { value: 0.41607901453971863, state: 'normal' },
                        B: { value: 0.5497685074806213, state: 'normal' },
                    },
                    '3': { T: { value: 43.69999694824219, state: 'normal' } },
                    '4': { T: { value: 46.0, state: 'normal' } },
                    '5': { T: { value: 35.29999542236328, state: 'normal' } },
                    '6': { T: { value: 37.599998474121094, state: 'normal' } },
                    '7': {
                        T: { value: 32.5, state: 'normal' },
                        O: { value: 1.2442129850387573, state: 'normal' },
                        G: { value: 0.46296295523643494, state: 'normal' },
                        B: { value: 1.0282161235809326, state: 'normal' },
                    },
                    '8': {
                        T: { value: 36.5, state: 'normal' },
                        O: { value: 0.9027777910232544, state: 'normal' },
                        G: { value: 0.49768519401550293, state: 'normal' },
                        B: { value: 0.2604166567325592, state: 'normal' },
                    },
                    '9': { T: { value: 37.599998474121094, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 23.5, state: 'normal' },
                    before2: { value: 28.5, state: 'normal' },
                    after1: { value: 16.199996948242188, state: 'normal' },
                    before1: { value: 14.100000381469727, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: null, state: 'normal' },
                    URotor: { value: null, state: 'normal' },
                    IDvig: { value: 184.2838897705078, state: 'normal' },
                    UStater: { value: null, state: 'normal' },
                },
                masloBack: {
                    level: { value: 76.2347412109375, state: 'normal' },
                    pressure: { value: 2.2784509658813477, state: 'danger' },
                },
                truba: { temperature: 116.46829223632812, vacuum: 771.1226196289062, damper: null },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
            'У-172': {
                bearing: {
                    '1': {
                        T: { value: 50.80000305175781, state: 'normal' },
                        O: { value: 2.430555582046509, state: 'normal' },
                        G: { value: 1.2152777910232544, state: 'normal' },
                        B: { value: 1.7881944179534912, state: 'normal' },
                    },
                    '2': {
                        T: { value: 60.69999694824219, state: 'normal' },
                        O: { value: 1.875, state: 'normal' },
                        G: { value: 1.0706018209457397, state: 'normal' },
                        B: { value: 1.4872684478759766, state: 'normal' },
                    },
                    '3': { T: { value: 42.099998474121094, state: 'normal' } },
                    '4': { T: { value: 39.600006103515625, state: 'normal' } },
                    '5': { T: { value: 29.599998474121094, state: 'normal' } },
                    '6': { T: { value: 30.099998474121094, state: 'normal' } },
                    '7': {
                        T: { value: 29.099998474121094, state: 'normal' },
                        O: { value: 0.4861111044883728, state: 'normal' },
                        G: { value: 0.5555555820465088, state: 'normal' },
                        B: { value: 0.7175925970077515, state: 'normal' },
                    },
                    '8': {
                        T: { value: 30.400001525878906, state: 'normal' },
                        O: { value: 1.5740740299224854, state: 'normal' },
                        G: { value: 1.3368055820465088, state: 'normal' },
                        B: { value: 0.6770833730697632, state: 'normal' },
                    },
                    '9': { T: { value: 31.900001525878906, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 20.0, state: 'normal' },
                    before2: { value: 24.400001525878906, state: 'normal' },
                    after1: { value: 14.900001525878906, state: 'normal' },
                    before1: { value: 14.0, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: null, state: 'normal' },
                    URotor: { value: null, state: 'normal' },
                    IDvig: { value: 169.11558532714844, state: 'normal' },
                    UStater: { value: null, state: 'normal' },
                },
                masloBack: {
                    level: { value: 88.76134490966797, state: 'normal' },
                    pressure: { value: 2.215949058532715, state: 'danger' },
                },
                truba: { temperature: 118.66828918457031, vacuum: 717.5925903320312, damper: null },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
        },
        '2': {
            'Ф-171': {
                bearing: {
                    '1': {
                        T: { value: 45.0, state: 'normal' },
                        O: { value: 1.0762591361999512, state: 'normal' },
                        G: { value: 1.6493055820465088, state: 'normal' },
                        B: { value: 1.5567129850387573, state: 'normal' },
                    },
                    '2': {
                        T: { value: 44.70000457763672, state: 'normal' },
                        O: { value: 1.516203761100769, state: 'normal' },
                        G: { value: 2.2627315521240234, state: 'normal' },
                        B: { value: 1.9444444179534912, state: 'normal' },
                    },
                    '3': { T: { value: 36.19999694824219, state: 'normal' } },
                    '4': { T: { value: 40.0, state: 'normal' } },
                    '5': { T: { value: 35.5, state: 'normal' } },
                    '6': { T: { value: 33.600006103515625, state: 'normal' } },
                    '7': {
                        T: { value: 28.79999542236328, state: 'normal' },
                        O: { value: 1.9446123838424683, state: 'normal' },
                        G: { value: 1.979341745376587, state: 'normal' },
                        B: { value: 1.9155092239379883, state: 'normal' },
                    },
                    '8': {
                        T: { value: 34.5, state: 'normal' },
                        O: { value: 1.0706018209457397, state: 'normal' },
                        G: { value: 1.6030092239379883, state: 'normal' },
                        B: { value: 2.337963104248047, state: 'normal' },
                    },
                    '9': { T: { value: 34.0, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 27.600006103515625, state: 'normal' },
                    before2: { value: 31.0, state: 'warning' },
                    after1: { value: 15.5, state: 'normal' },
                    before1: { value: 14.099998474121094, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: 1934.0, state: 'warning' },
                    URotor: { value: -2.0, state: 'normal' },
                    IDvig: { value: 1949.0, state: 'danger' },
                    UStater: { value: 106.0, state: 'normal' },
                },
                masloBack: {
                    level: { value: 61.599998474121094, state: 'normal' },
                    pressure: { value: 0.9589999914169312, state: 'danger' },
                },
                truba: { temperature: 104.26273345947266, vacuum: 793.5474853515625, damper: 10.0 },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
            'Ф-172': {
                bearing: {
                    '1': {
                        T: { value: 50.80000305175781, state: 'normal' },
                        O: { value: 0.5497685074806213, state: 'normal' },
                        G: { value: 1.8807870149612427, state: 'normal' },
                        B: { value: 1.7881944179534912, state: 'normal' },
                    },
                    '2': {
                        T: { value: 54.0, state: 'normal' },
                        O: { value: 1.313657522201538, state: 'normal' },
                        G: { value: 1.6319444179534912, state: 'normal' },
                        B: { value: 2.3263888359069824, state: 'normal' },
                    },
                    '3': { T: { value: 41.5, state: 'normal' } },
                    '4': { T: { value: 46.100006103515625, state: 'normal' } },
                    '5': { T: { value: 42.5, state: 'normal' } },
                    '6': { T: { value: 40.100006103515625, state: 'normal' } },
                    '7': {
                        T: { value: 32.70000457763672, state: 'normal' },
                        O: { value: 2.6041665077209473, state: 'normal' },
                        G: { value: 1.655092477798462, state: 'normal' },
                        B: { value: 1.4467592239379883, state: 'normal' },
                    },
                    '8': {
                        T: { value: 42.599998474121094, state: 'normal' },
                        O: { value: 2.5810184478759766, state: 'normal' },
                        G: { value: 1.296296238899231, state: 'normal' },
                        B: { value: 0.9375, state: 'normal' },
                    },
                    '9': { T: { value: 41.19999694824219, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 36.5, state: 'warning' },
                    before2: { value: 32.400001525878906, state: 'warning' },
                    after1: { value: 13.800003051757812, state: 'normal' },
                    before1: { value: 14.400001525878906, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: 992.0, state: 'warning' },
                    URotor: { value: 2.0, state: 'normal' },
                    IDvig: { value: 1823.0, state: 'danger' },
                    UStater: { value: 107.0, state: 'normal' },
                },
                masloBack: {
                    level: { value: 69.9000015258789, state: 'normal' },
                    pressure: { value: 0.9700000286102295, state: 'danger' },
                },
                truba: { temperature: 108.76273345947266, vacuum: 792.1007080078125, damper: 10.0 },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
        },
        '3': {
            'Х-171': {
                bearing: {
                    '1': {
                        T: { value: 41.399993896484375, state: 'normal' },
                        O: { value: 0.8159722089767456, state: 'normal' },
                        G: { value: 1.082175850868225, state: 'normal' },
                        B: { value: 0.9780092239379883, state: 'normal' },
                    },
                    '2': {
                        T: { value: 52.400001525878906, state: 'normal' },
                        O: { value: 0.6886574029922485, state: 'normal' },
                        G: { value: 1.0127315521240234, state: 'normal' },
                        B: { value: 1.082175850868225, state: 'normal' },
                    },
                    '3': { T: { value: 39.20000457763672, state: 'normal' } },
                    '4': { T: { value: 48.900001525878906, state: 'normal' } },
                    '5': { T: { value: 45.099998474121094, state: 'normal' } },
                    '6': { T: { value: 42.900001525878906, state: 'normal' } },
                    '7': {
                        T: { value: 32.80000305175781, state: 'normal' },
                        O: { value: 2.1412036418914795, state: 'normal' },
                        G: { value: 0.8678413033485413, state: 'normal' },
                        B: { value: 0.6365740895271301, state: 'normal' },
                    },
                    '8': {
                        T: { value: 37.19999694824219, state: 'normal' },
                        O: { value: 1.0069444179534912, state: 'normal' },
                        G: { value: 0.5670862197875977, state: 'normal' },
                        B: { value: 0.32407405972480774, state: 'normal' },
                    },
                    '9': { T: { value: 36.400001525878906, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 30.699996948242188, state: 'warning' },
                    before2: { value: 30.599998474121094, state: 'warning' },
                    after1: { value: -3276.800048828125, state: 'normal' },
                    before1: { value: 13.5, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: 2140.0, state: 'warning' },
                    URotor: { value: 467.0, state: 'normal' },
                    IDvig: { value: 1802.0, state: 'danger' },
                    UStater: { value: 107.0, state: 'normal' },
                },
                masloBack: {
                    level: { value: 83.69999694824219, state: 'normal' },
                    pressure: { value: 0.878000020980835, state: 'danger' },
                },
                truba: { temperature: 89.45198822021484, vacuum: 656.1053466796875, damper: 10.0 },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
            'Х-172': {
                bearing: {
                    '1': {
                        T: { value: 52.600006103515625, state: 'normal' },
                        O: { value: 0.21412037312984467, state: 'normal' },
                        G: { value: 0.671296238899231, state: 'normal' },
                        B: { value: 0.5324074029922485, state: 'normal' },
                    },
                    '2': {
                        T: { value: 47.69999694824219, state: 'normal' },
                        O: { value: 0.6770833730697632, state: 'normal' },
                        G: { value: 0.5613425970077515, state: 'normal' },
                        B: { value: 0.5150462985038757, state: 'normal' },
                    },
                    '3': { T: { value: 47.899993896484375, state: 'normal' } },
                    '4': { T: { value: 45.599998474121094, state: 'normal' } },
                    '5': { T: { value: 50.899993896484375, state: 'normal' } },
                    '6': { T: { value: 45.099998474121094, state: 'normal' } },
                    '7': {
                        T: { value: 38.30000305175781, state: 'normal' },
                        O: { value: 0.9606481194496155, state: 'normal' },
                        G: { value: 0.6018518805503845, state: 'normal' },
                        B: { value: 0.5497685074806213, state: 'normal' },
                    },
                    '8': {
                        T: { value: 36.29999542236328, state: 'normal' },
                        O: { value: 0.6597222089767456, state: 'normal' },
                        G: { value: 0.37037038803100586, state: 'normal' },
                        B: { value: 0.31174248456954956, state: 'normal' },
                    },
                    '9': { T: { value: 34.899993896484375, state: 'normal' } },
                },
                coolant: {
                    after2: { value: 34.69999694824219, state: 'warning' },
                    before2: { value: 37.599998474121094, state: 'warning' },
                    after1: { value: -3276.800048828125, state: 'normal' },
                    before1: { value: 12.099998474121094, state: 'normal' },
                },
                mainPrivod: {
                    I: { value: 2339.0, state: 'warning' },
                    URotor: { value: 540.0, state: 'normal' },
                    IDvig: { value: 1876.0, state: 'danger' },
                    UStater: { value: 108.0, state: 'normal' },
                },
                masloBack: {
                    level: { value: 85.30000305175781, state: 'normal' },
                    pressure: { value: 2.0820000171661377, state: 'danger' },
                },
                truba: { temperature: 94.27847290039062, vacuum: 640.1909790039062, damper: 10.0 },
                prognozRouter: { days: null, state: null },
                status: 'run',
            },
        },
    },
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
