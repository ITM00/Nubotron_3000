import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export function PanelPage() {
    return (
        <div className={'flex h-screen w-screen flex-col items-stretch'}>
            <Header />
            <Outlet />
        </div>
    );
}
