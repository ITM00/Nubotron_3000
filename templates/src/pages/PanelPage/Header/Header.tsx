import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { ImNotification } from 'react-icons/im';
import { MdNotificationsNone, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button, Modal } from '../../../components/ui';
import { useOnClickOutside } from '../../../hooks';
import { useAppSelector } from '../../../redux/hooks';

export const Header = memo(function Header() {
    return (
        <header className={'flex w-full items-center justify-between bg-white px-8 py-2 shadow-md'}>
            <div className={'flex items-center gap-6'}>
                <Burger />
                <div className={'border-10 h-10 w-1 border-r border-solid border-r-gray-200'} />
                <Logo />
                <History />
            </div>
            <div className={'flex items-center gap-6'}>
                <Handbook />
                <Notify />
                <div className={'border-10 h-10 w-1 border-r border-solid border-r-gray-200'} />
                <Profile />
            </div>
        </header>
    );
});

const Handbook = memo(function Handbook() {
    const [isActive, setIsActive] = useState(false);

    const onOpen = useCallback(() => {
        setIsActive(true);
    }, []);

    const onClose = useCallback(() => {
        setIsActive(false);
    }, []);

    return (
        <>
            <Button onClick={onOpen}>Справочник</Button>
            <Modal isOpen={isActive} onClose={onClose}>
                Справочник
            </Modal>
        </>
    );
});

const Burger = memo(function Burger() {
    return (
        <div
            className={
                'flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-amber-400 p-2'
            }
        >
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
        </div>
    );
});

function Logo() {
    return <div className={'flex h-12 w-40 items-center justify-center bg-gray-100'}>Евраза</div>;
}

function History() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = useMemo(() => {
        const routes = [];

        if (/\/panel\/machine/.test(location.pathname)) {
            routes.push({
                to: '/panel/machine',
                title: 'Прогнозная аналитика',
            });
        }
        const machine_id = /\/panel\/machine\/(.*)/.exec(decodeURIComponent(location.pathname));
        if (machine_id) {
            routes.push({
                to: `/panel/machine/${machine_id[1]}`,
                title: `Состояние эксгаузера ${machine_id[1]}`,
            });
        }
        return routes;
    }, [location]);

    return (
        <div className={'flex items-center gap-4'}>
            {items.map((item, index) => {
                return (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={classNames(index === items.length - 1 ? 'text-black' : 'text-gray-300', 'font-bold')}
                        onClick={() => {
                            navigate(item.to);
                        }}
                    >
                        <span className={'mr-4'}>/</span> {item.title}
                    </Link>
                );
            })}
        </div>
    );
}

const Notify = memo(function Notify() {
    const [isActive, setIsActive] = useState(false);
    const notify = useAppSelector((state) => state.notify);
    const menuRef = useRef(null);

    const onOpenClick = useCallback(() => {
        setIsActive(true);
    }, []);

    const onNotifyClick = useCallback(() => {
        setIsActive(false);
    }, []);

    const onOutsideClick = useCallback(() => {
        setIsActive(false);
    }, []);

    useOnClickOutside(menuRef, onOutsideClick);

    return (
        <div>
            <div className={'relative'}>
                <Button
                    onClick={onOpenClick}
                    theme={'gray'}
                    className={'flex h-10 w-10 items-center justify-center !p-0'}
                >
                    <MdNotificationsNone className={'h-6 w-6 text-gray-400'} />
                </Button>
                <div
                    className={classNames(
                        notify.has_no_checked ? 'opacity-70' : 'opacity-0',
                        'absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-600',
                    )}
                />
                <Transition
                    show={isActive}
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                >
                    <div
                        ref={menuRef}
                        className={
                            'absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        }
                    >
                        {notify.notifies.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={'flex cursor-pointer items-center justify-between p-4 hover:bg-gray-100'}
                                    onClick={onNotifyClick}
                                >
                                    <div className={''}>{item.title}</div>
                                    {item.is_check && (
                                        <ImNotification className={'h-4 w-4 rounded-full text-yellow-500 '} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Transition>
            </div>
        </div>
    );
});

function Profile() {
    const [isActive, setIsActive] = useState(false);

    const clickHandle = useCallback(() => {
        setIsActive((state) => !state);
    }, []);

    return (
        <div className={'relative'}>
            <div className={'inline-block flex cursor-pointer items-center text-left'} onClick={clickHandle}>
                <Button theme='gray' className={'h-10 w-10'}>
                    <span>DN</span>
                </Button>
                <MdOutlineKeyboardArrowDown className={'h-6 w-6'} />
            </div>
            {isActive && (
                <div
                    className={
                        'absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    }
                >
                    <div className={'cursor-pointer p-4 hover:bg-gray-100'} onClick={clickHandle}>
                        some items
                    </div>
                    <div className={'cursor-pointer p-4 hover:bg-gray-100'} onClick={clickHandle}>
                        some items
                    </div>
                    <div className={'cursor-pointer p-4 hover:bg-gray-100'} onClick={clickHandle}>
                        some items
                    </div>
                </div>
            )}
        </div>
    );
}
