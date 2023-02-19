import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAglomachines, State } from './types';

const initialState: State = {
    // aglomachines: {
    //     '1': {
    //         'У-171': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 60.5, state: 'normal' },
    //                     G: { value: 0.27199074625968933, state: 'normal' },
    //                     B: { value: 0.2604166567325592, state: 'normal' },
    //                     O: { value: 0.2430555522441864, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 54.49999237060547, state: 'normal' },
    //                     O: { value: 0.2951388955116272, state: 'normal' },
    //                     G: { value: 0.43440544605255127, state: 'normal' },
    //                     B: { value: 0.5497685074806213, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 43.5, state: 'normal' } },
    //                 '4': { T: { value: 46.0, state: 'normal' } },
    //                 '5': { T: { value: 35.29999542236328, state: 'normal' } },
    //                 '6': { T: { value: 37.80000305175781, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 32.599998474121094, state: 'normal' },
    //                     O: { value: 1.267361044883728, state: 'normal' },
    //                     G: { value: 0.46296295523643494, state: 'normal' },
    //                     B: { value: 1.044732928276062, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 36.29999542236328, state: 'normal' },
    //                     O: { value: 0.9664351344108582, state: 'normal' },
    //                     G: { value: 0.49768519401550293, state: 'normal' },
    //                     B: { value: 0.2604166567325592, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 37.30000305175781, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 23.599998474121094, state: 'normal' },
    //                 before2: { value: 28.5, state: 'normal' },
    //                 after1: { value: 16.29999542236328, state: 'normal' },
    //                 before1: { value: 14.300000190734863, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: null, state: 'normal' },
    //                 URotor: { value: null, state: 'normal' },
    //                 IDvig: { value: 179.7066192626953, state: 'normal' },
    //                 UStater: { value: null, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 76.16754150390625, state: 'normal' },
    //                 pressure: { value: 2.2764365673065186, state: 'normal' },
    //             },
    //             truba: { temperature: 119.59420776367188, vacuum: 742.1875, damper: null },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //         'У-172': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 50.899993896484375, state: 'normal' },
    //                     O: { value: 2.4537036418914795, state: 'normal' },
    //                     G: { value: 1.2094907760620117, state: 'normal' },
    //                     B: { value: 1.7939815521240234, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 60.19999694824219, state: 'normal' },
    //                     O: { value: 1.892361044883728, state: 'normal' },
    //                     G: { value: 1.064814805984497, state: 'normal' },
    //                     B: { value: 1.4814815521240234, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 42.099998474121094, state: 'normal' } },
    //                 '4': { T: { value: 39.600006103515625, state: 'normal' } },
    //                 '5': { T: { value: 29.699996948242188, state: 'normal' } },
    //                 '6': { T: { value: 30.199996948242188, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 29.29999542236328, state: 'normal' },
    //                     O: { value: 0.45717594027519226, state: 'normal' },
    //                     G: { value: 0.5497685074806213, state: 'normal' },
    //                     B: { value: 0.671296238899231, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 31.099998474121094, state: 'normal' },
    //                     O: { value: 1.6493055820465088, state: 'normal' },
    //                     G: { value: 1.359953761100769, state: 'normal' },
    //                     B: { value: 0.7291666269302368, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 34.599998474121094, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 19.900001525878906, state: 'normal' },
    //                 before2: { value: 24.29999542236328, state: 'normal' },
    //                 after1: { value: 14.900001525878906, state: 'normal' },
    //                 before1: { value: 14.099998474121094, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: null, state: 'normal' },
    //                 URotor: { value: null, state: 'normal' },
    //                 IDvig: { value: 165.9991455078125, state: 'normal' },
    //                 UStater: { value: null, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 88.83973693847656, state: 'normal' },
    //                 pressure: { value: 2.2116153240203857, state: 'normal' },
    //             },
    //             truba: { temperature: 121.2942123413086, vacuum: 688.6574096679688, damper: null },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //     },
    //     '2': {
    //         'Ф-171': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 45.099998474121094, state: 'normal' },
    //                     O: { value: 1.0438443422317505, state: 'normal' },
    //                     G: { value: 1.5740740299224854, state: 'normal' },
    //                     B: { value: 1.516203761100769, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 44.900001525878906, state: 'normal' },
    //                     O: { value: 1.4583332538604736, state: 'normal' },
    //                     G: { value: 2.2337963581085205, state: 'normal' },
    //                     B: { value: 1.9444444179534912, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 36.5, state: 'normal' } },
    //                 '4': { T: { value: 40.100006103515625, state: 'normal' } },
    //                 '5': { T: { value: 35.5, state: 'normal' } },
    //                 '6': { T: { value: 33.80000305175781, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 28.699996948242188, state: 'normal' },
    //                     O: { value: 1.9666191339492798, state: 'normal' },
    //                     G: { value: 2.0319905281066895, state: 'normal' },
    //                     B: { value: 1.892361044883728, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 36.29999542236328, state: 'normal' },
    //                     O: { value: 1.0706018209457397, state: 'normal' },
    //                     G: { value: 1.6145832538604736, state: 'normal' },
    //                     B: { value: 2.407407522201538, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 35.69999694824219, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 27.800003051757812, state: 'normal' },
    //                 before2: { value: 31.400001525878906, state: 'warning' },
    //                 after1: { value: 15.599998474121094, state: 'normal' },
    //                 before1: { value: 14.099998474121094, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: 1902.0, state: 'warning' },
    //                 URotor: { value: 0.0, state: 'normal' },
    //                 IDvig: { value: 1952.0, state: 'danger' },
    //                 UStater: { value: 106.0, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 63.20000076293945, state: 'normal' },
    //                 pressure: { value: 0.953000009059906, state: 'normal' },
    //             },
    //             truba: { temperature: 110.84652709960938, vacuum: 758.8252563476562, damper: 10.0 },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //         'Ф-172': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 51.0, state: 'normal' },
    //                     O: { value: 0.5613425970077515, state: 'normal' },
    //                     G: { value: 1.8344907760620117, state: 'normal' },
    //                     B: { value: 1.765046238899231, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 54.0, state: 'normal' },
    //                     O: { value: 1.3715277910232544, state: 'normal' },
    //                     G: { value: 1.655092477798462, state: 'normal' },
    //                     B: { value: 2.349536895751953, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 41.79999542236328, state: 'normal' } },
    //                 '4': { T: { value: 46.100006103515625, state: 'normal' } },
    //                 '5': { T: { value: 41.5, state: 'normal' } },
    //                 '6': { T: { value: 40.100006103515625, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 32.30000305175781, state: 'normal' },
    //                     O: { value: 2.7604165077209473, state: 'normal' },
    //                     G: { value: 1.6493055820465088, state: 'normal' },
    //                     B: { value: 1.516203761100769, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 44.80000305175781, state: 'normal' },
    //                     O: { value: 2.21064829826355, state: 'normal' },
    //                     G: { value: 1.3078702688217163, state: 'normal' },
    //                     B: { value: 0.8333333730697632, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 41.599998474121094, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 36.5, state: 'warning' },
    //                 before2: { value: 32.20000457763672, state: 'warning' },
    //                 after1: { value: 13.700000762939453, state: 'normal' },
    //                 before1: { value: 14.5, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: 1070.0, state: 'warning' },
    //                 URotor: { value: 2.0, state: 'normal' },
    //                 IDvig: { value: 1846.0, state: 'danger' },
    //                 UStater: { value: 106.0, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 69.5999984741211, state: 'normal' },
    //                 pressure: { value: 0.9589999914169312, state: 'normal' },
    //             },
    //             truba: { temperature: 115.3465347290039, vacuum: 756.6550903320312, damper: 10.0 },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //     },
    //     '3': {
    //         'Х-171': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 41.5, state: 'normal' },
    //                     O: { value: 0.8159722089767456, state: 'normal' },
    //                     G: { value: 1.105324149131775, state: 'normal' },
    //                     B: { value: 1.0706018209457397, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 52.19999694824219, state: 'normal' },
    //                     O: { value: 0.7928240895271301, state: 'normal' },
    //                     G: { value: 1.0995370149612427, state: 'normal' },
    //                     B: { value: 1.2557870149612427, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 39.400001525878906, state: 'normal' } },
    //                 '4': { T: { value: 48.900001525878906, state: 'normal' } },
    //                 '5': { T: { value: 45.099998474121094, state: 'normal' } },
    //                 '6': { T: { value: 42.900001525878906, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 32.400001525878906, state: 'normal' },
    //                     O: { value: 2.2685184478759766, state: 'normal' },
    //                     G: { value: 0.9006324410438538, state: 'normal' },
    //                     B: { value: 0.6886574029922485, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 37.29999542236328, state: 'normal' },
    //                     O: { value: 3.5706019401550293, state: 'normal' },
    //                     G: { value: 0.6803501844406128, state: 'normal' },
    //                     B: { value: 0.42824074625968933, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 36.400001525878906, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 31.0, state: 'warning' },
    //                 before2: { value: 30.29999542236328, state: 'warning' },
    //                 after1: { value: -3276.800048828125, state: 'normal' },
    //                 before1: { value: 13.599998474121094, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: 1929.0, state: 'warning' },
    //                 URotor: { value: 458.0, state: 'normal' },
    //                 IDvig: { value: 1844.0, state: 'danger' },
    //                 UStater: { value: 106.0, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 83.0999984741211, state: 'normal' },
    //                 pressure: { value: 0.8790000081062317, state: 'normal' },
    //             },
    //             truba: { temperature: 83.13642120361328, vacuum: 644.53125, damper: 10.0 },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //         'Х-172': {
    //             bearing: {
    //                 '1': {
    //                     T: { value: 52.600006103515625, state: 'normal' },
    //                     O: { value: 0.19675925374031067, state: 'normal' },
    //                     G: { value: 0.7060185074806213, state: 'normal' },
    //                     B: { value: 0.5266203880310059, state: 'normal' },
    //                 },
    //                 '2': {
    //                     T: { value: 47.69999694824219, state: 'normal' },
    //                     O: { value: 0.694444477558136, state: 'normal' },
    //                     G: { value: 0.5787037014961243, state: 'normal' },
    //                     B: { value: 0.5208333134651184, state: 'normal' },
    //                 },
    //                 '3': { T: { value: 47.899993896484375, state: 'normal' } },
    //                 '4': { T: { value: 45.599998474121094, state: 'normal' } },
    //                 '5': { T: { value: 51.0, state: 'normal' } },
    //                 '6': { T: { value: 45.099998474121094, state: 'normal' } },
    //                 '7': {
    //                     T: { value: 38.0, state: 'normal' },
    //                     O: { value: 0.9490740895271301, state: 'normal' },
    //                     G: { value: 0.6192129254341125, state: 'normal' },
    //                     B: { value: 0.5497685074806213, state: 'normal' },
    //                 },
    //                 '8': {
    //                     T: { value: 36.69999694824219, state: 'normal' },
    //                     O: { value: 0.6423611044883728, state: 'normal' },
    //                     G: { value: 0.3761574327945709, state: 'normal' },
    //                     B: { value: 0.3161145746707916, state: 'normal' },
    //                 },
    //                 '9': { T: { value: 35.19999694824219, state: 'normal' } },
    //             },
    //             coolant: {
    //                 after2: { value: 34.79999542236328, state: 'warning' },
    //                 before2: { value: 37.80000305175781, state: 'warning' },
    //                 after1: { value: -3276.800048828125, state: 'normal' },
    //                 before1: { value: 12.300003051757812, state: 'normal' },
    //             },
    //             mainPrivod: {
    //                 I: { value: 2200.0, state: 'warning' },
    //                 URotor: { value: 538.0, state: 'normal' },
    //                 IDvig: { value: 1926.0, state: 'danger' },
    //                 UStater: { value: 108.0, state: 'normal' },
    //             },
    //             masloBack: {
    //                 level: { value: 85.5999984741211, state: 'normal' },
    //                 pressure: { value: 2.0969998836517334, state: 'normal' },
    //             },
    //             truba: { temperature: 87.36226654052734, vacuum: 626.44677734375, damper: 10.0 },
    //             prognozRouter: { days: null, state: null },
    //             status: 'run',
    //         },
    //     },
    //     'moment': '2023-02-19T00:35:25+00:00',
    // },s
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
