import { currentSlice } from '../slices/current';
import { AppDispatch } from '../store';

let socketAglomachines: WebSocket | null = null;

export const getAglomachines = () => async (dispatch: AppDispatch) => {
    if (socketAglomachines) {
        socketAglomachines.close(0);
    }

    socketAglomachines = new WebSocket('wss://localhost:8889/api/aglomachines');
    socketAglomachines.onmessage = (e) => {
        dispatch(currentSlice.actions.SET_AGLO(JSON.parse(e.data).aglomachines));
    };
    socketAglomachines.onclose = () => {
        socketAglomachines = null;
    };
};

let schemeAglomachine: WebSocket | null = null;

export const getAglomachineById = (id: string) => async (dispatch: AppDispatch) => {
    if (schemeAglomachine) {
        schemeAglomachine.close(0);
    }

    schemeAglomachine = new WebSocket(`wss://localhost:8889/api/aglomachines/${id}`);
    schemeAglomachine.onmessage = (e) => {
        dispatch(currentSlice.actions.SET_AGLO(JSON.parse(e.data).scheme));
    };
    schemeAglomachine.onclose = () => {
        schemeAglomachine = null;
    };
};
