import classNames from 'classnames';

import { Value } from '../../../redux/slices/current';

interface MasloBakProps {
    process: Value;
    pressure: Value;
}

export const MasloBak = ({ process, pressure }: MasloBakProps) => {
    return (
        <>
            <div
                className={'flex flex-col items-center text-sm font-light text-gray-1000'}
                style={{
                    position: 'absolute',
                    top: '231px',
                    left: '1389px',
                    width: '215px',
                    height: '31px',
                }}
            >
                <div
                    className={classNames(
                        'absolute',
                        pressure.state === 'danger' ? 'bg-red-800' : '',
                        pressure.state === 'warning' ? 'bg-yellow-600' : '',
                        pressure.state === 'normal' ? 'bg-green-600' : '',
                    )}
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        width: `${(pressure.value / 6) * 100}%`,
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
                    <div className={'font-medium'}>{pressure.value}</div>
                    <div>Давление масла, кг/см2</div>
                </div>
            </div>
            <div
                className={'flex items-center justify-center bg-gray-20 text-sm font-light text-gray-1000'}
                style={{
                    position: 'absolute',
                    top: '60px',
                    left: '911px',
                    width: '211px',
                    height: '22px',
                }}
            >
                Маслобак
            </div>
            <div
                className={'flex flex-col items-center text-sm font-light text-gray-1000'}
                style={{
                    position: 'absolute',
                    top: '126px',
                    left: '922px',
                    width: '187px',
                    height: '31px',
                }}
            >
                <div
                    className={classNames(
                        'absolute',
                        process.state === 'danger' ? 'bg-red-800' : '',
                        process.state === 'warning' ? 'bg-yellow-600' : '',
                        process.state === 'normal' ? 'bg-green-600' : '',
                    )}
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        width: `${process.value}%`,
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
                    <div className={'font-medium'}>{process.value}</div>
                    <div>УРОВЕНЬ МАСЛА, %</div>
                </div>
            </div>
        </>
    );
};
