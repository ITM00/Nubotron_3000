import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsArrowRepeat } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ArrowDownIcon, InfoIcon, NotificationIcon } from '../../../components/icons';
import { Button, Disclosure, Modal, dateToFullString } from '../../../components/ui';
import { useOnClickOutside } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { currentSlice } from '../../../redux/slices/current';

export const Header = memo(function Header() {
    return (
        <header className={'border-b-1 flex w-full items-center justify-between border-gray-800 bg-white px-8 py-2'}>
            <div className={'flex items-center gap-6'}>
                <Burger />
                <div className={'border-10 h-10 w-1 border-r border-solid border-r-gray-40'} />
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
                'flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-yellow-600 p-2'
            }
        >
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
            <div className={'h-0.5 w-full rounded-lg bg-white'}></div>
        </div>
    );
});

function Logo() {
    return <img src='/img/Logo.png' alt='logo' />;
}

function History() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = useMemo(() => {
        const routes = [];

        if (/\/panel\/machine/.test(location.pathname)) {
            routes.push({
                to: '/panel/machine',
                title: 'Прогнозная аналитика эксгаустеров',
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
        <div className={'ml-10 flex items-center gap-4'}>
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
                        <span className={'mr-4 font-medium'}>/</span> {item.title}
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
            <div className={'relative z-10'}>
                <Button onClick={onOpenClick} theme={'gray'} className={'flex items-center justify-center !p-1'}>
                    <NotificationIcon className={'h-5 w-5 fill-gray-400'} />
                </Button>
                {/* pulse and default */}
                {notify.has_no_checked && (
                    <>
                        <div className={'absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-red-1000'} />
                        <div className={'absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-1000'} />
                    </>
                )}

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
                            'scrollbar absolute right-0 mt-2 flex max-h-96 w-96 origin-top-right flex-col gap-2 overflow-y-auto rounded-md bg-white p-2 shadow-lg ring-1 ring-opacity-5 focus:outline-none'
                        }
                    >
                        {notify.notifies.map((notify) => {
                            return (
                                <Disclosure
                                    key={notify.id}
                                    initOpen
                                    title={`Эксгаузер ${notify.exhausterName}`}
                                    classNameBody={'flex flex-col gap-2'}
                                    classNameTitle={'font-medium'}
                                >
                                    {notify.messages.map((message) => {
                                        return (
                                            <div key={message.id}>
                                                <div className={'mb-2 flex items-center gap-2 text-gray-800'}>
                                                    <div className={'flex items-center rounded bg-gray-40 px-1'}>
                                                        <BsArrowRepeat />
                                                        <div className={'text-sm'}>{message.repeatCount}</div>
                                                    </div>
                                                    <div className={'flex items-center'}>
                                                        <BiTimeFive />
                                                        <div className={'text-sm'}>
                                                            {dateToFullString(message.timeCreate)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'rounded-b-3xl rounded-r-3xl bg-red-400 p-2 text-sm '}>
                                                    {message.message}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Disclosure>
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
                <ArrowDownIcon className={'fill-black h-6 w-6'} />
            </div>
            {isActive && (
                <div
                    className={
                        'ring-black absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none'
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
