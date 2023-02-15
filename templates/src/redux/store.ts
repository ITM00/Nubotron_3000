import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { historySlice } from './slices/history';
import { notifySlice } from './slices/notify';

export const rootReducer = combineReducers({
    history: historySlice.reducer,
    notify: notifySlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
