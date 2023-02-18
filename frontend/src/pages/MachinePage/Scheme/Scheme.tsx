import classNames from 'classnames';
import { useEffect } from 'react';

import { getAglomachineById } from '../../../redux/actions/current';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Value } from '../../../redux/slices/types';
import { Full } from './Fill';
import { MasloBak } from './MasloBak';
import { Oxladitel } from './Oxladitel';
import { Privod } from './Privod';

export function Scheme(): JSX.Element {
    const current = useAppSelector((state) => state.current);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (current.name) {
            dispatch(getAglomachineById(current.name));
        }
    }, [current.name]);

    if (!current.scheme) {
        return <></>;
    }

    return (
        <div className={'relative m-4 h-full'}>
            <div className='absolute absolute right-0 top-0 flex gap-2'>
                <div className={'t flex items-center text-sm text-gray-900'}>
                    <div className={'h-4 w-4 rounded bg-yellow-700'} />
                    <div className={'ml-2 font-extralight'}>Предупреждение</div>
                </div>
                <div className={'t flex items-center text-sm text-gray-900'}>
                    <div className={'h-4 w-4 rounded bg-red-1000'} />
                    <div className={'ml-2 font-extralight'}>Опастность</div>
                </div>
            </div>
            <div
                className={'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'}
                style={{
                    width: '1857px',
                    height: '717px',
                }}
            >
                <Full />
                <MasloBak process={current.scheme.masloBack.level} pressure={current.scheme.masloBack.pressure} />
                <Oxladitel
                    after1={current.scheme.coolant.after1}
                    after2={current.scheme.coolant.after2}
                    before2={current.scheme.coolant.before2}
                    before1={current.scheme.coolant.before1}
                />
                <Privod
                    I={current.scheme.mainPrivod.I}
                    IDvig={current.scheme.mainPrivod.IDvig}
                    URoter={current.scheme.mainPrivod.URoter}
                    UStater={current.scheme.mainPrivod.UStater}
                />
                <Truba
                    level={current.scheme.truba.level}
                    vacuum={current.scheme.truba.vacuum}
                    damper={current.scheme.truba.damper}
                    temperature={current.scheme.truba.temperature}
                />

                <PC top={390} name={'9 ПС'} left={270} T={current.scheme.bearing['9'].T} />
                <PC
                    top={480}
                    name={'8 ПС'}
                    left={270}
                    T={current.scheme.bearing['8'].T}
                    B={current.scheme.bearing['8'].B}
                    G={current.scheme.bearing['8'].G}
                    O={current.scheme.bearing['8'].O}
                />
                <PC
                    top={580}
                    name={'7 ПС'}
                    left={715}
                    T={current.scheme.bearing['7'].T}
                    B={current.scheme.bearing['7'].B}
                    G={current.scheme.bearing['7'].G}
                    O={current.scheme.bearing['7'].O}
                />
                <PC top={500} name={'6 ПС'} left={715} T={current.scheme.bearing['6'].T} />
                <PC top={500} name={'5 ПС'} left={895} T={current.scheme.bearing['5'].T} />
                <PC top={240} name={'4 ПС'} left={720} T={current.scheme.bearing['4'].T} />
                <PC top={240} name={'3 ПС'} left={890} T={current.scheme.bearing['3'].T} />
                <PC
                    top={500}
                    name={'2 ПС'}
                    left={1040}
                    T={current.scheme.bearing['2'].T}
                    B={current.scheme.bearing['2'].B}
                    G={current.scheme.bearing['2'].G}
                    O={current.scheme.bearing['2'].O}
                />
                <PC
                    top={500}
                    name={'1 ПС'}
                    left={1370}
                    T={current.scheme.bearing['1'].T}
                    B={current.scheme.bearing['1'].B}
                    G={current.scheme.bearing['1'].G}
                    O={current.scheme.bearing['1'].O}
                />

                <Number top={417} left={430} number={'9'} />
                <Number top={447} left={430} number={'8'} />
                <Number top={447} left={621} number={'7'} />
                <Number top={437} left={812} number={'6'} />
                <Number top={437} left={893} number={'5'} />
                <Number top={350} left={812} number={'4'} />
                <Number top={350} left={893} number={'3'} />
                <Number top={332} left={1086} number={'2'} />
                <Number top={332} left={1417} number={'1'} />
            </div>
        </div>
    );
}

interface PCItem {
    value: number;
    state: 'danger' | 'normal' | 'warning';
}

interface PCProps {
    name: string;
    T: PCItem;
    B?: PCItem;
    G?: PCItem;
    O?: PCItem;
    top: number;
    left: number;
}

function PC(props: PCProps) {
    return (
        <div
            className={'absolute flex w-[120px] flex-col gap-1 rounded bg-gray_green-600 p-2 text-white'}
            style={{
                top: props.top,
                left: props.left,
            }}
        >
            <div className={'border-2 border-gray-400 text-center font-medium'}>{props.name}</div>
            <div
                className={classNames(
                    'flex items-center justify-between gap-1 rounded px-2 text-sm font-medium',
                    props.T.state === 'danger' ? 'bg-red-800' : '',
                    props.T.state === 'warning' ? 'bg-yellow-600' : '',
                    props.T.state === 'normal' ? '' : '',
                )}
            >
                <div>T, °С</div>
                <div>{props.T.value}</div>
            </div>
            {props.B && (
                <div
                    className={classNames(
                        'flex items-center justify-between gap-1 rounded px-2 text-sm font-medium',
                        props.B.state === 'danger' ? 'bg-red-800' : '',
                        props.B.state === 'warning' ? 'bg-yellow-600' : '',
                        props.B.state === 'normal' ? '' : '',
                    )}
                >
                    <div>В, мм/с</div>
                    <div>{props.B.value}</div>
                </div>
            )}
            {props.G && (
                <div
                    className={classNames(
                        'flex items-center justify-between gap-1 rounded px-2 text-sm font-medium',
                        props.G.state === 'danger' ? 'bg-red-800' : '',
                        props.G.state === 'warning' ? 'bg-yellow-600' : '',
                        props.G.state === 'normal' ? '' : '',
                    )}
                >
                    <div>Г, мм/с</div>
                    <div>{props.G.value}</div>
                </div>
            )}
            {props.O && (
                <div
                    className={classNames(
                        'flex items-center justify-between gap-1 rounded px-2 text-sm font-medium',
                        props.O.state === 'danger' ? 'bg-red-800' : '',
                        props.O.state === 'warning' ? 'bg-yellow-600' : '',
                        props.O.state === 'normal' ? '' : '',
                    )}
                >
                    <div>О, мм/с</div>
                    <div>{props.O.value}</div>
                </div>
            )}
        </div>
    );
}

interface NumberProps {
    top: number;
    left: number;
    number: string;
    // type: "danger" | "normal" | "warning"
}

function Number(props: NumberProps) {
    return (
        <div
            className={
                'text-black absolute flex h-6 w-6 items-center justify-center rounded border-2 border-gray_green-600 bg-gray-60 text-sm font-medium '
            }
            style={{
                top: props.top,
                left: props.left,
            }}
        >
            {props.number}
        </div>
    );
}

interface TrubaProps {
    level: Value;
    vacuum: Value;
    damper: number;
    temperature: number;
}

function Truba(props: TrubaProps) {
    return (
        <>
            <div
                className={'flex flex-col items-center text-sm font-light text-gray-1000'}
                style={{
                    position: 'absolute',
                    top: 187,
                    left: 463,
                    width: '145px',
                    height: '30px',
                }}
            >
                <div
                    className={'absolute bg-gray_green-300'}
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        width: `${(props.temperature / 300) * 100}%`,
                    }}
                ></div>
                <div
                    className={'absolute text-sm leading-3'}
                    style={{
                        zIndex: 1,
                        top: 4,
                        left: 12,
                    }}
                >
                    <div className={'font-medium'}>{props.temperature}</div>
                    <div>Температура газа, °C</div>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 230,
                    left: 457,
                    width: '160px',
                    height: '30px',
                }}
            >
                <div className={'flex flex-col gap-1'}>
                    <div className={'flex w-full items-center justify-between'}>
                        <div className={'text-xs font-light text-white'}>Разряжение, мм.в.ст</div>
                        <div
                            className={classNames(
                                'h-5 w-[34px] rounded text-center text-sm text-white',
                                props.level.state === 'danger' ? 'bg-red-800' : '',
                                props.level.state === 'warning' ? 'bg-yellow-600' : '',
                                props.level.state === 'normal' ? 'bg-gray_green-600' : '',
                            )}
                        >
                            {props.vacuum.value}
                        </div>
                    </div>
                    <div className={'flex w-full items-center justify-between'}>
                        <div className={'text-xs font-light text-white'}>Уровень пыли,мг/м3</div>
                        <div
                            className={classNames(
                                'h-5 w-[34px] rounded text-center text-sm text-white',
                                props.level.state === 'danger' ? 'bg-red-800' : '',
                                props.level.state === 'warning' ? 'bg-yellow-600' : '',
                                props.level.state === 'normal' ? 'bg-gray_green-600' : '',
                            )}
                        >
                            {props.level.value}
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 661,
                    left: 580,
                }}
                className={'flex items-center'}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '32%',
                        right: '90%',
                        width: 90 - (props.damper / 100) * 75,
                    }}
                    className={'h-[9px] bg-[#4A8F40]'}
                ></div>
                <DamperSvg />
                <div className={'w-[50px] text-sm text-gray_green-600'}>{props.damper} %</div>
            </div>
        </>
    );
}

function DamperSvg() {
    return (
        <svg width='14' height='33' viewBox='0 0 14 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.37868 9.34779L0.603409 0.0759277H13.8266L9.09465 9.26361V22.8896L13.8258 32.0758L0.602661 32.0758L5.37868 22.8025V9.34779Z'
                fill='#4A8F40'
            />
        </svg>
    );
}
