import { currentSlice } from '../slices/current';
import { AppDispatch } from '../store';

let socketAglomachines: WebSocket | null = null;

export const getAglomachines = () => async (dispatch: AppDispatch) => {
    if (socketAglomachines) {
        return;
    }

    const loc: Location = window.location;

    socketAglomachines = new WebSocket(`ws://${loc.host}/api/aglomachines`);

    let interval: NodeJS.Timer;
    socketAglomachines.onopen = () => {
        socketAglomachines?.send('');

        interval = setInterval(() => {
            if (!socketAglomachines) {
                clearInterval(interval);
                return;
            }
            socketAglomachines?.send('');
        }, 10000);
    };

    socketAglomachines.onmessage = (e) => {
        dispatch(currentSlice.actions.SET_AGLO(JSON.parse(e.data)));
    };
    socketAglomachines.onclose = () => {
        clearInterval(interval);
        socketAglomachines = null;
    };
};
