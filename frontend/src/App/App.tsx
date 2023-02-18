import './App.scss';

import React, { StrictMode, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Loader } from '../components/ui';
import { MainPage } from '../pages/MainPage';
import { store } from '../redux/store';

const PanelPage = lazy(() => import('../pages/PanelPage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));
const MachinePage = lazy(() => import('../pages/MachinePage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/panel',
        element: (
            <Suspense fallback={<Loader />}>
                <PanelPage />
            </Suspense>
        ),
        children: [
            {
                path: 'machine',
                element: (
                    <Suspense fallback={<Loader />}>
                        <MenuPage />
                    </Suspense>
                ),
            },
            {
                path: 'machine/:id',
                element: (
                    <Suspense fallback={<Loader />}>
                        <MachinePage />
                    </Suspense>
                ),
            },
        ],
    },
]);

export const App = () => {
    return (
        // <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        // </StrictMode>
    );
};
