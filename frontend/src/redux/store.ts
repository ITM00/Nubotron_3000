import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { currentSlice } from './slices/current';
import { notifySlice } from './slices/notify';

export const rootReducer = combineReducers({
    notify: notifySlice.reducer,
    current: currentSlice.reducer,
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
