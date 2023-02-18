import { currentSlice } from '../slices/current';
import { AppDispatch } from '../store';

let socketAglomachines: WebSocket | null = null;

export const getAglomachines = () => async (dispatch: AppDispatch) => {
    if (socketAglomachines) {
        return;
    }

    const loc: Location = window.location;

    socketAglomachines = new WebSocket(`wss://${loc.host}/api/aglomachines`);
    socketAglomachines.onmessage = (e) => {
        dispatch(currentSlice.actions.SET_AGLO(JSON.parse(e.data)));
    };
    socketAglomachines.onclose = () => {
        socketAglomachines = null;
    };
};
