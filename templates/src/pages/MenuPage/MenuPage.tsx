import classNames from 'classnames';
import { FiThermometer, GiVibratingBall, MdOutlineHome, RiDropLine } from 'react-icons/all';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Button, Card } from '../../components/ui';
import { Rotor, RotorProps } from './Rotor';

export function MenuPage() {
    return (
        <Card>
            <Header />
            <div className={'p-2'}>
                <Statuses />
                <Machines />
            </div>
        </Card>
    );
}

export function Header() {
    return (
        <header className={'flex items-center gap-4 rounded-t-lg bg-gray-100 p-2'}>
            <div className={'rounded-lg bg-yellow-400 p-2 text-white'}>
                <MdOutlineHome className={'h-4 w-4'} />
            </div>
            <div className={'font-bold'}>Главный экран</div>
        </header>
    );
}

interface StatusItem {
    title: string;
    icon: JSX.Element;
    letter?: string;
}

export function Statuses() {
    const items: StatusItem[] = [
        {
            icon: <FiThermometer />,
            title: 'Температура',
            letter: 'T',
        },
        {
            icon: <GiVibratingBall />,
            title: 'Вибрация',
            letter: 'V',
        },
        {
            icon: <RiDropLine />,
            title: 'Уровень масла',
            letter: 'L',
        },
        {
            icon: <div className={'h-3 w-3 bg-yellow-500'} />,
            title: 'Предупреждение',
        },
        {
            icon: <div className={'h-3 w-3 bg-red-500'} />,
            title: 'Опастность',
        },
    ];

    return (
        <div className={'flex items-center justify-end gap-3'}>
            {items.map((item) => {
                return (
                    <div key={item.title} className={'flex items-center'}>
                        {item.letter}
                        {item.icon}
                        <div className={'ml-2 text-sm text-gray-400'}>{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
}

export function Machines() {
    const items: MachineProps[] = [
        {
            title: 'Агломашина №1',
        },
        {
            title: 'Агломашина №2',
        },
        {
            title: 'Агломашина №3',
        },
    ];

    return (
        <div className={'mt-4 grid grid-cols-3 gap-8'}>
            {items.map((item) => {
                return <AglMachine key={item.title} {...item} />;
            })}
        </div>
    );
}

interface MachineProps {
    title: string;
}

export function AglMachine(props: MachineProps) {
    const navigate = useNavigate();

    const items: ExhausterProps[] = [
        {
            status: 'danger',
            id: 'У-171',
            title: 'Эксгаузер У-171',
            onDetailsClick: () => {
                navigate(`/panel/machine/${'У-171'}`);
            },
            rotor: {
                title: 'Ротор № 37',
                date: new Date(),
                lastChange: {
                    days: 6,
                    prediction: {
                        status: 'danger',
                        days: 12,
                    },
                },
                bearings: [
                    {
                        title: '№3',
                        suffix: 'п-к',
                        items: [
                            {
                                status: 'warning',
                                type: 'T',
                            },
                        ],
                    },
                    {
                        title: '№8',
                        suffix: 'п-к',
                        items: [
                            {
                                status: 'ok',
                                type: 'L',
                            },
                            {
                                type: 'V',
                                status: 'danger',
                            },
                        ],
                    },
                    {
                        title: '№9',
                        suffix: 'п-к',
                        items: [
                            {
                                status: 'ok',
                                type: 'T',
                            },
                            {
                                status: 'ok',
                                type: 'V',
                            },
                        ],
                    },
                ],
            },
        },
        {
            status: 'ok',
            id: 'У-172',
            onDetailsClick: () => {
                navigate(`/panel/machine/${'У-172'}`);
            },
            title: 'Эксгаузер У-172',
            rotor: {
                title: 'Ротор № 47',
                date: new Date(),
                lastChange: {
                    days: 20,
                    prediction: {
                        status: 'warning',
                        days: 25,
                    },
                },
            },
        },
    ];

    return (
        <div>
            <div className={'w-full rounded-lg bg-gray-200 py-2 px-6 text-gray-600'}>{props.title}</div>
            <div className={'mt-2 grid grid-cols-2 gap-2'}>
                {items.map((item, index) => {
                    return <Exhauster key={index} {...item} />;
                })}
            </div>
        </div>
    );
}

interface ExhausterProps {
    status?: 'ok' | 'warning' | 'danger';
    title: string;
    id: string;
    onDetailsClick?: () => void;
    rotor?: RotorProps;
}

export function Exhauster(props: ExhausterProps) {
    return (
        <div className={'mb-2 h-max rounded-lg border border-solid border-zinc-400'}>
            <div className={'flex items-center justify-between rounded-t-lg bg-zinc-400 p-2'}>
                <div className={'flex items-center gap-2'}>
                    <div
                        className={classNames(
                            'h-3 w-3 rounded-full',
                            props.status === 'ok' ? 'bg-green-300' : '',
                            props.status === 'warning' ? 'bg-yellow-500' : '',
                            props.status === 'danger' ? 'bg-red-500' : '',
                            props.status === undefined ? 'bg-gray-200' : '',
                        )}
                    />
                    <div className={'font-bold text-white'}>{props.title}</div>
                </div>
                <Button
                    theme={'gray'}
                    className={'flex h-8 w-8 items-center justify-center !p-0'}
                    onClick={props.onDetailsClick}
                >
                    <MdOutlineKeyboardArrowRight className={'h-5 w-5 text-gray-400'} />
                </Button>
            </div>
            <div className={'p-2'}>{props.rotor && <Rotor {...props.rotor} />}</div>
        </div>
    );
}
