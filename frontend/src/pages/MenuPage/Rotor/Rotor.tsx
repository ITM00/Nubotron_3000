import classNames from 'classnames';
import { memo, useMemo } from 'react';
import { FiThermometer, GiVibratingBall, RiDropLine } from 'react-icons/all';

import { Button, Disclosure } from '../../../components/ui';

interface PartParam {
    status?: 'ok' | 'warning' | 'danger';
    type: 'T' | 'V' | 'L';
}

interface BearingProps {
    title: string;
    suffix?: string;
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
    onChangeClick?: () => void;
    onSendMessageClick?: () => void;
}

export function Rotor(props: RotorProps) {
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

    const allBearings = useMemo(() => {
        return props.bearings?.map((item, index) => {
            return <Bearing key={index} {...item} />;
        });
    }, [props.bearings]);

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-1'}>
                    <div className={'text-sm font-bold text-black'}>{props.title}</div>
                    <div className={'rounded-lg bg-gray-200 p-1 text-xs'}>{dateToString(props.date)}</div>
                </div>
                <button
                    className={'cursor-pointer text-sm text-purple-600 hover:underline'}
                    onClick={props.onChangeClick}
                >
                    Изменить
                </button>
            </div>
            <div className={'w-full border border-solid border-b-gray-100'} />
            {props.lastChange && (
                <div>
                    <div className={'ml-3 mb-2 text-sm font-bold text-black'}>Последняя замена ротера</div>
                    <div className={'flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2'}>
                        <div className={'flex h-10 w-20 items-center justify-center rounded-lg bg-gray-200 font-bold'}>
                            {props.lastChange.days} Сут
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex items-center gap-2'}>
                                <div className={'text-sm text-gray-500'}>Прогноз</div>
                                <div
                                    className={classNames(
                                        'h-2 w-2 rounded-full',
                                        props.lastChange.prediction.status === 'ok' ? 'bg-green-300' : '',
                                        props.lastChange.prediction.status === 'warning' ? 'bg-yellow-500' : '',
                                        props.lastChange.prediction.status === 'danger' ? 'bg-red-500' : '',
                                    )}
                                />
                            </div>
                            <div className={'text-sm font-bold text-gray-600'}>
                                {props.lastChange.prediction.days} Сут
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={'h-24 w-full rounded-lg border-2 border-solid border-gray-300 bg-gray-200'} />
            <Disclosure initOpen={true} title={'Предупреждение'}>
                <div className={'flex flex-col gap-2'}>{filterBearings}</div>
            </Disclosure>
            <Disclosure title={'Все подшипники'}>
                <div className={'flex flex-col gap-2'}>{allBearings}</div>
            </Disclosure>
            <Button
                onClick={props.onSendMessageClick}
                theme={'gray'}
                className={
                    'w-max border border-solid !border-gray-300 !bg-gray-100 !p-1 !text-sm font-normal !text-gray-500'
                }
            >
                Отправить сообщение в SAP
            </Button>
        </div>
    );
}

const Bearing = memo(function Bearing(props: BearingProps) {
    return (
        <div key={props.title} className={'flex items-center justify-between rounded bg-gray-100 px-4 py-2'}>
            <div className={'text-sm'}>
                {props.title} <span className={'text-xs'}>{props.suffix}</span>
            </div>
            <div className={'flex items-center gap-2'}>
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
                'inline-flex items-center justify-center rounded border border-solid px-2 ',
                param.status === 'warning' ? 'border-yellow-400 bg-yellow-100 text-yellow-500' : '',
                param.status === 'danger' ? 'border-red-400 bg-red-100 text-red-500' : '',
                param.status === 'ok' ? 'border-gray-400 bg-gray-100 text-gray-500' : '',
            )}
        >
            <span>{param.type}</span>
            {param.type === 'T' ? <FiThermometer /> : param.type === 'V' ? <GiVibratingBall /> : <RiDropLine />}
        </div>
    );
});
