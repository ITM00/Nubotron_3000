import classNames from 'classnames';

import { Value } from '../../../redux/slices/current';

interface PrivodProps {
    I: Value;
    IDvig: Value;
    URoter: Value;
    UStater: Value;
}

export function Privod(props: PrivodProps) {
    return (
        <div
            style={{
                top: 295,
                left: 1155,
            }}
            className={'absolute flex w-[212px] flex-col gap-1'}
        >
            <div className={'w-full bg-gray-20 py-1 text-center text-sm font-light'}>Главный привод</div>
            <div className={'flex flex-col gap-1 text-sm font-light'}>
                <div className={'flex w-full justify-between'}>
                    <div className={'font-medium'}>Ток, А</div>
                    <div
                        className={classNames(
                            'h-5 w-[34px] rounded text-center text-white',
                            props.I.state === 'danger' ? 'bg-red-800' : '',
                            props.I.state === 'warning' ? 'bg-yellow-600' : '',
                            props.I.state === 'normal' ? 'bg-gray_green-600' : '',
                        )}
                    >
                        {props.I.value}
                    </div>
                </div>
                <div className={'flex w-full justify-between'}>
                    <div className={'font-medium'}>Ток двигателя, А</div>
                    <div
                        className={classNames(
                            'h-5 w-[34px] rounded text-center text-white',
                            props.IDvig.state === 'danger' ? 'bg-red-800' : '',
                            props.IDvig.state === 'warning' ? 'bg-yellow-600' : '',
                            props.IDvig.state === 'normal' ? 'bg-gray_green-600' : '',
                        )}
                    >
                        {props.IDvig.value}
                    </div>
                </div>
                <div className={'flex w-full justify-between'}>
                    <div className={'font-medium'}>Напряжение ротера, кВт</div>
                    <div
                        className={classNames(
                            'h-5 w-[34px] rounded text-center text-white',
                            props.URoter.state === 'danger' ? 'bg-red-800' : '',
                            props.URoter.state === 'warning' ? 'bg-yellow-600' : '',
                            props.URoter.state === 'normal' ? 'bg-gray_green-600' : '',
                        )}
                    >
                        {props.URoter.value}
                    </div>
                </div>
                <div className={'flex w-full justify-between'}>
                    <div className={'font-medium'}>Напряжение статера, кВт</div>
                    <div
                        className={classNames(
                            'h-5 w-[34px] rounded text-center text-white',
                            props.UStater.state === 'danger' ? 'bg-red-800' : '',
                            props.UStater.state === 'warning' ? 'bg-yellow-600' : '',
                            props.UStater.state === 'normal' ? 'bg-gray_green-600' : '',
                        )}
                    >
                        {props.UStater.value}
                    </div>
                </div>
            </div>
        </div>
    );
}
