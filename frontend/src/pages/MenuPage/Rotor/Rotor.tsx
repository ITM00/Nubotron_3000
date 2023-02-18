import classNames from 'classnames';
import { memo, useMemo } from 'react';

import { RadioIcon, ThermometerIcon, WaterIcon } from '../../../components/icons';
import { Disclosure } from '../../../components/ui';
import { IBearing, MasloBack, Value } from '../../../redux/slices/types';

interface PartParam {
    status?: 'normal' | 'warning' | 'danger';
    type: 'T' | 'V' | 'L';
}

interface BearingProps {
    title: string;
    items: PartParam[];
}

export interface RotorProps {
    numberRoter: number;
    dateChangeRoter: Date;
    lastChangeRoter: number;
    prediction: {
        state: 'normal' | 'warning' | 'danger';
        days: number;
    };
    bearing: IBearing;
    masloBack: MasloBack;
}

export function Rotor(props: RotorProps) {
    // выводит danger  and warnign
    const filterBearings = useMemo(() => {
        const out: {
            key: string;
            title: string;
            items: PartParam[];
        }[] = [];

        Object.keys(props.bearing).forEach((key) => {
            const items: PartParam[] = [];
            let hasWarning = false;

            // @ts-ignore
            const T: Value = props.bearing[key].T;
            if (T.state === 'danger' || T.state === 'warning') {
                hasWarning = true;
            }

            items.push({
                type: 'T',
                status: T.state,
            });

            {
                // vibro
                let Vstate: 'danger' | 'normal' | 'warning' = 'normal';
                // @ts-ignore
                const B: Value | undefined = props.bearing[key].B;
                if (B && (B.state === 'danger' || B.state === 'warning')) {
                    hasWarning = true;
                    Vstate = B.state;
                }
                // @ts-ignore
                const G: Value | undefined = props.bearing[key].G;
                if (G && (G.state === 'danger' || G.state === 'warning')) {
                    hasWarning = true;
                    if (Vstate !== 'danger') {
                        Vstate = G.state;
                    }
                }
                // @ts-ignore
                const O: Value | undefined = props.bearing[key].O;
                if (O && (O.state === 'danger' || O.state === 'warning')) {
                    hasWarning = true;
                    if (Vstate !== 'danger') {
                        Vstate = O.state;
                    }
                }

                if (B || G || O) {
                    items.push({
                        type: 'V',
                        status: Vstate,
                    });
                }
            }

            if (!hasWarning) {
                return;
            }

            out.push({
                key: key,
                title: `№${key} п-к`,
                items: items,
            });
        });

        if (props.masloBack.level.state === 'danger' || props.masloBack.pressure.state === 'danger') {
            out.push({
                key: 'Масло',
                title: `Уровень масла`,
                items: [
                    {
                        type: 'L',
                        status: 'danger',
                    },
                ],
            });
        } else if (props.masloBack.level.state === 'warning' || props.masloBack.pressure.state === 'warning') {
            out.push({
                key: 'Масло',
                title: `Уровень масла`,
                items: [
                    {
                        type: 'L',
                        status: 'warning',
                    },
                ],
            });
        }

        return out.map((item) => <Bearing {...item} />);
    }, [props.bearing]);

    // не выводит danger  and warnign
    const allBearings = useMemo(() => {
        const out: {
            key: string;
            title: string;
            items: PartParam[];
        }[] = [];

        Object.keys(props.bearing).forEach((key) => {
            let hasWarning = false;

            const items: PartParam[] = [];
            // @ts-ignore
            const T: Value = props.bearing[key].T;
            if (T !== undefined) {
                if (T.state === 'danger' || T.state === 'warning') {
                    hasWarning = true;
                }

                items.push({
                    type: 'T',
                    status: T.state,
                });
            }

            {
                // vibro
                let Vstate: 'danger' | 'normal' | 'warning' = 'normal';
                // @ts-ignore
                const B: Value | undefined = props.bearing[key].B;
                if (B && (B.state === 'danger' || B.state === 'warning')) {
                    hasWarning = true;
                    Vstate = B.state;
                }
                // @ts-ignore
                const G: Value | undefined = props.bearing[key].G;
                if (G && (G.state === 'danger' || G.state === 'warning')) {
                    hasWarning = true;
                    if (Vstate !== 'danger') {
                        Vstate = G.state;
                    }
                }
                // @ts-ignore
                const O: Value | undefined = props.bearing[key].O;
                if (O && (O.state === 'danger' || O.state === 'warning')) {
                    hasWarning = true;
                    if (Vstate !== 'danger') {
                        Vstate = O.state;
                    }
                }

                if (B || G || O) {
                    items.push({
                        type: 'V',
                        status: Vstate,
                    });
                }
            }

            if (hasWarning) {
                return;
            }

            out.push({
                key: key,
                title: `№${key} п-к`,
                items: items,
            });
        });

        if (props.masloBack.level.state === 'normal' || props.masloBack.pressure.state === 'normal') {
            out.push({
                key: 'Масло',
                title: `Уровень масла`,
                items: [
                    {
                        type: 'L',
                        status: 'normal',
                    },
                ],
            });
        }

        return out.map((item) => <Bearing {...item} />);
    }, [props.bearing]);

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-1'}>
                    <div className={'text-black font-medium'}>{`Ротер №${props.numberRoter}`}</div>
                    <div className={'rounded bg-gray-40 px-2 py-1 text-sm'}>{dateToString(props.dateChangeRoter)}</div>
                </div>
            </div>
            <div className={'w-full border border-gray-60'} />
            <div>
                <div className={'ml-3 mb-2 text-sm font-medium text-gray-900'}>Последняя замена ротера</div>
                <div className={'flex items-center gap-2 rounded-lg bg-gray-20 px-4 py-2'}>
                    <div
                        className={
                            'text-black flex items-center justify-center rounded-lg bg-gray-40 px-4 py-2 text-lg font-medium'
                        }
                    >
                        {props.lastChangeRoter} Сут
                    </div>
                    <div className={'flex flex-col'}>
                        <div className={'flex items-center gap-2'}>
                            <div className={'text-sm text-gray-700'}>Прогноз</div>
                            <div
                                className={classNames(
                                    'h-3 w-3 animate-pulse rounded-full',
                                    props.prediction.state === 'normal' ? 'bg-green-300' : '',
                                    props.prediction.state === 'warning' ? 'bg-yellow-600' : '',
                                    props.prediction.state === 'danger' ? 'bg-red-1000' : '',
                                )}
                            />
                        </div>
                        <div className={'font-medium text-gray-800'}>{props.prediction.days} Сут</div>
                    </div>
                </div>
            </div>

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
                param.status === 'normal' ? 'border-gray-400 bg-gray-100 text-gray-500' : '',
            )}
        >
            <span>{param.type}</span>
            {param.type === 'T' ? <ThermometerIcon /> : param.type === 'V' ? <RadioIcon /> : <WaterIcon />}
        </div>
    );
});
