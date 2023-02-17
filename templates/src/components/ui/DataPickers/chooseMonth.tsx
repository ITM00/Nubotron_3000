import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, useCallback, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks';
import { ArrowDownIcon } from '../../icons';
import { Card } from '../Card';

const possibleMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

interface ChooseMonthProps {
    current: Date;
    onSelect: (month: number) => void;
}

export function ChooseMonth(props: ChooseMonthProps) {
    const [isOpen, setIsOpen] = useState(false);
    const refCard = useRef(null);

    const onOpenClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onSelectClick = useCallback(
        (month: number) => () => {
            props.onSelect(month);
            setIsOpen(false);
        },
        [props.onSelect],
    );

    useOnClickOutside(refCard, () => {
        setIsOpen(false);
    });

    return (
        <div className={'absolute left-2/4 -translate-x-2/4'}>
            <div
                className={'flex w-24 cursor-pointer items-center justify-center gap-1 font-medium'}
                onClick={onOpenClick}
            >
                <div>{possibleMonths[props.current.getMonth()]}</div>
                <ArrowDownIcon className={'h-4 w-4 text-gray-700'} />
            </div>
            <Transition
                show={isOpen}
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <Card
                    ref={refCard}
                    className={
                        'scrollbar absolute left-0 h-24  w-24 overflow-y-auto border border-gray-100 text-center'
                    }
                >
                    {possibleMonths.map((item, index) => {
                        return (
                            <div
                                className={classNames(
                                    'cursor-pointer hover:bg-gray-100',
                                    index === props.current.getMonth() ? 'bg-gray-200 hover:bg-gray-300' : '',
                                )}
                                onClick={onSelectClick(index)}
                                key={item}
                            >
                                {item}
                            </div>
                        );
                    })}
                </Card>
            </Transition>
        </div>
    );
}
