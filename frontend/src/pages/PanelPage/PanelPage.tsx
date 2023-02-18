import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { getAglomachines } from '../../redux/actions/current';
import { useAppDispatch } from '../../redux/hooks';
import { Header } from './Header';

export function PanelPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAglomachines());
    }, []);

    return (
        <div className={'flex h-screen w-screen flex-col items-stretch'}>
            <Header />
            <Outlet />
        </div>
    );
}
