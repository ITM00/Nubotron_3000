import classNames from 'classnames';
import { memo, useMemo } from 'react';
import { FiThermometer, GiVibratingBall, RiDropLine } from 'react-icons/all';

import { RadioIcon, ThermometerIcon, WaterIcon } from '../../../components/icons';
import { Button, Disclosure } from '../../../components/ui';

interface PartParam {
    status?: 'ok' | 'warning' | 'danger';
    type: 'T' | 'V' | 'L';
}

interface BearingProps {
    title: string;
    items: PartParam[];
}

export interface RotorProps {
    title: string;
    date: Date;
    lastChange?: {
        days: number;
        prediction: {
            status?: 'ok' | 'warning' | 'danger';
            days: number;
        };
    };
    bearings?: BearingProps[];
    onSendMessageClick?: () => void;
}

export function Rotor(props: RotorProps) {
    // выводит danger  and warnign
    const filterBearings = useMemo(() => {
        return props.bearings
            ?.filter((item) => {
                for (let i = 0; i < item.items.length; i++) {
                    if (item.items[i].status !== 'ok') {
                        return true;
                    }
                }
                return false;
            })
            .map((item, index) => {
                return <Bearing key={index} {...item} />;
            });
    }, [props.bearings]);

    // не выводит danger  and warnign
    const allBearings = useMemo(() => {
        return props.bearings
            ?.filter((item) => {
                for (let i = 0; i < item.items.length; i++) {
                    if (item.items[i].status !== 'ok') {
                        return false;
                    }
                }
                return true;
            })
            .map((item, index) => {
                return <Bearing key={index} {...item} />;
            });
    }, [props.bearings]);

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-1'}>
                    <div className={'text-black font-medium'}>{props.title}</div>
                    <div className={'rounded bg-gray-40 px-2 py-1 text-sm'}>{dateToString(props.date)}</div>
                </div>
            </div>
            <div className={'w-full border border-gray-60'} />
            {props.lastChange && (
                <div>
                    <div className={'ml-3 mb-2 text-sm font-medium text-gray-900'}>Последняя замена ротера</div>
                    <div className={'flex items-center gap-2 rounded-lg bg-gray-20 px-4 py-2'}>
                        <div
                            className={
                                'text-black flex items-center justify-center rounded-lg bg-gray-40 px-4 py-2 text-lg font-medium'
                            }
                        >
                            {props.lastChange.days} Сут
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex items-center gap-2'}>
                                <div className={'text-sm text-gray-700'}>Прогноз</div>
                                <div
                                    className={classNames(
                                        'h-3 w-3 animate-pulse rounded-full',
                                        props.lastChange.prediction.status === 'ok' ? 'bg-green-300' : '',
                                        props.lastChange.prediction.status === 'warning' ? 'bg-yellow-600' : '',
                                        props.lastChange.prediction.status === 'danger' ? 'bg-red-1000' : '',
                                    )}
                                />
                            </div>
                            <div className={'font-medium text-gray-800'}>{props.lastChange.prediction.days} Сут</div>
                        </div>
                    </div>
                </div>
            )}
            <img
                src='/img/rotor_intro.png'
                alt='rotor_intro'
                className={'h-auto w-full rounded-lg border-2 border-solid border-blue-200 bg-blue-100 p-2'}
            />
            <Disclosure classNameTitle={'font-medium text-sm text-gray-900'} initOpen={true} title={'Предупреждение'}>
                <div className={'flex flex-col gap-2'}>{filterBearings}</div>
            </Disclosure>
            <Disclosure classNameTitle={'font-medium text-sm text-gray-900'} title={'Все подшипники'}>
                <div className={'flex flex-col gap-2'}>{allBearings}</div>
            </Disclosure>
            <Button onClick={props.onSendMessageClick} theme={'gray'} className={'w-max'}>
                Отправить сообщение в SAP
            </Button>
        </div>
    );
}

const Bearing = memo(function Bearing(props: BearingProps) {
    return (
        <div key={props.title} className={'flex items-center justify-between rounded bg-gray-20 px-4 py-1'}>
            <div className={'text-sm text-gray-1000'}>{props.title}</div>
            <div className={'flex items-center gap-1'}>
                {props.items.map((item, index) => {
                    return <Part key={index} {...item} />;
                })}
            </div>
        </div>
    );
});

function dateToString(date: Date): string {
    return (
        String(date.getDay() < 10 ? '0' + date.getDay() : date.getDay()) +
        '.' +
        String(date.getMonth() + 1 < 10 ? '0' + (date.getDay() + 1) : date.getDay() + 1) +
        '.' +
        String(date.getFullYear())
    );
}

const Part = memo(function Part(param: PartParam) {
    return (
        <div
            className={classNames(
                'inline-flex items-center justify-center rounded border border-solid px-2',
                param.status === 'warning' ? 'border-yellow-400 bg-yellow-100 text-yellow-500' : '',
                param.status === 'danger' ? 'border-red-1000 bg-red-200 text-red-1000' : '',
                param.status === 'ok' ? 'border-gray-400 bg-gray-100 text-gray-500' : '',
            )}
        >
            <span>{param.type}</span>
            {param.type === 'T' ? <ThermometerIcon /> : param.type === 'V' ? <RadioIcon /> : <WaterIcon />}
        </div>
    );
});
