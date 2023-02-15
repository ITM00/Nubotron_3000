import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export function PanelPage() {
    return (
        <div className={'max-w-screen max-h-screen'}>
            <Header />
            <div className={'flex h-full p-4'}>
                <div className={'w-full'}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
