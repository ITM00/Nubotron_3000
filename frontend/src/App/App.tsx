import './App.scss';

import React, { StrictMode, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from '../redux/store';

const PanelPage = lazy(() => import('../pages/PanelPage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <Link to={'/panel/machine'}>/panel/machine</Link>
            </div>
        ),
    },
    {
        path: '/panel',
        element: (
            <Suspense fallback={<div>loading</div>}>
                <PanelPage />
            </Suspense>
        ),
        children: [
            {
                path: 'machine',
                element: (
                    <Suspense fallback={<div>loading</div>}>
                        <MenuPage />
                    </Suspense>
                ),
            },
            {
                path: 'machine/:id',
                element: (
                    <Suspense fallback={<div>loading</div>}>
                        <div>machine/:id</div>
                    </Suspense>
                ),
            },
        ],
    },
]);

export const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    );
};
