import classNames from 'classnames';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowRightIcon, DocsIcon, RadioIcon, ThermometerIcon, WaterIcon } from '../../components/icons';
import { PageHeaderLayout } from '../../components/layouts';
import { Button, Card } from '../../components/ui';
import { getAglomachines } from '../../redux/actions/current';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { currentSlice } from '../../redux/slices/current';
import { Aglomachine, Exhauster as ExhausterProps } from '../../redux/slices/types';
import { Rotor } from './Rotor';

export function MenuPage() {
    return (
        <Card className={'scrollbar m-4 h-full overflow-y-auto'}>
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
    const aglomachines = useAppSelector((state) => state.current.aglomachines);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAglomachines());
    }, []);

    return (
        <div className={'mt-4 grid grid-cols-3 gap-8'}>
            {aglomachines &&
                aglomachines.map((item) => {
                    return <AglMachine key={item.name} {...item} />;
                })}
        </div>
    );
}

export function AglMachine(props: Aglomachine) {
    return (
        <div>
            <div className={'w-full rounded-lg bg-gray-40 py-2 px-6 text-gray-700'}>{`Агломашина №${props.name}`}</div>
            <div className={'mt-2 grid grid-cols-2 gap-2'}>
                {props.exhausts.map((item, index) => {
                    return <Exhauster key={index} {...item} />;
                })}
            </div>
        </div>
    );
}

export function Exhauster(props: ExhausterProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onDetailsClick = useCallback(() => {
        dispatch(currentSlice.actions.SET_NAME(props.id));
        navigate(`/panel/machine/${props.id}`);
    }, [props.id]);

    return (
        <div className={'mb-2 h-max rounded-lg'}>
            <div className={'flex items-center justify-between rounded-t-lg bg-gray-700 p-2'}>
                <div className={'flex items-center gap-2'}>
                    <div
                        className={classNames(
                            'h-3 w-3 rounded-full',
                            props.status === 'run' ? 'bg-green-800' : '',
                            props.status === 'stop' ? 'bg-red-1000' : '',
                        )}
                    />
                    <div className={'font-bold font-medium text-white'}>{`Эксгаустер ${props.id}`}</div>
                </div>
                <Button theme={'gray'} className={'h-8 w-8 !p-0'} onClick={onDetailsClick}>
                    <ArrowRightIcon className={'h-5 w-5 fill-gray-400'} />
                </Button>
            </div>
            <div className={'rounded-b-lg border-l-2 border-r-2 border-b-2 border-gray-100 p-2'}>
                <Rotor {...props} />
            </div>
        </div>
    );
}
