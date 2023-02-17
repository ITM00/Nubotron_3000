import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { ArrowRightIcon, DocsIcon, RadioIcon, ThermometerIcon, WaterIcon } from '../../components/icons';
import { PageHeaderLayout } from '../../components/layouts/PageHeaderLayout';
import { Button, Card } from '../../components/ui';
import { Rotor, RotorProps } from './Rotor';

export function MenuPage() {
    return (
        <Card>
            <PageHeaderLayout className={'flex items-center gap-4'}>
                <div className={'rounded-lg bg-yellow-600 p-2 text-white'}>
                    <DocsIcon className={'h-4 w-4 fill-yellow-300'} />
                </div>
                <div className={'text-sm font-medium'}>Главный экран</div>
            </PageHeaderLayout>
            <div className={'p-2'}>
                <Statuses />
                <Machines />
            </div>
        </Card>
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
            icon: <ThermometerIcon className={'fill-black h-5 w-5'} />,
            title: 'Температура',
            letter: 'T',
        },
        {
            icon: <RadioIcon className={'fill-black h-5  w-5'} />,
            title: 'Вибрация',
            letter: 'V',
        },
        {
            icon: <WaterIcon className={'fill-black h-5  w-5'} />,
            title: 'Уровень масла',
            letter: 'L',
        },
        {
            icon: <div className={'h-4 w-4 rounded bg-yellow-700'} />,
            title: 'Предупреждение',
        },
        {
            icon: <div className={'h-4 w-4 rounded bg-red-1000'} />,
            title: 'Опастность',
        },
    ];

    return (
        <div className={'flex items-center justify-end gap-3'}>
            {items.map((item) => {
                return (
                    <div key={item.title} className={'t flex items-center text-sm text-gray-900'}>
                        {item.letter}
                        {item.icon}
                        <div className={'ml-2 font-extralight'}>{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
}

export function Machines() {
    const navigate = useNavigate();

    const items: MachineProps[] = [
        {
            title: 'Агломашина №1',
            aglMachine: [
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
                                title: '№3 п-к',
                                items: [
                                    {
                                        status: 'warning',
                                        type: 'T',
                                    },
                                ],
                            },
                            {
                                title: '№8 п-к',
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
                                title: '№9 п-к',
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
            ],
        },
        {
            title: 'Агломашина №2',
            aglMachine: [
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
                                title: '№3 п-к',
                                items: [
                                    {
                                        status: 'warning',
                                        type: 'T',
                                    },
                                ],
                            },
                            {
                                title: '№8 п-к',
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
                                title: '№9 п-к',
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
            ],
        },
        {
            title: 'Агломашина №3',
            aglMachine: [
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
                                title: '№3 п-к',
                                items: [
                                    {
                                        status: 'warning',
                                        type: 'T',
                                    },
                                ],
                            },
                            {
                                title: '№8 п-к',
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
                                title: '№9 п-к',
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
            ],
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
    aglMachine: ExhausterProps[];
}

export function AglMachine(props: MachineProps) {
    return (
        <div>
            <div className={'w-full rounded-lg bg-gray-40 py-2 px-6 text-gray-700'}>{props.title}</div>
            <div className={'mt-2 grid grid-cols-2 gap-2'}>
                {props.aglMachine.map((item, index) => {
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
        <div className={'mb-2 h-max rounded-lg'}>
            <div className={'flex items-center justify-between rounded-t-lg bg-gray-700 p-2'}>
                <div className={'flex items-center gap-2'}>
                    <div
                        className={classNames(
                            'h-3 w-3 rounded-full',
                            props.status === 'ok' ? 'bg-green-800' : '',
                            props.status === 'danger' ? 'bg-red-1000' : '',
                            props.status === undefined ? 'bg-gray-200' : '',
                        )}
                    />
                    <div className={'font-bold font-medium text-white'}>{props.title}</div>
                </div>
                <Button theme={'gray'} className={'h-8 w-8 !p-0'} onClick={props.onDetailsClick}>
                    <ArrowRightIcon className={'h-5 w-5 fill-gray-400'} />
                </Button>
            </div>
            <div className={'rounded-b-lg border-l-2 border-r-2 border-b-2 border-gray-100 p-2'}>
                {props.rotor && <Rotor {...props.rotor} />}
            </div>
        </div>
    );
}
