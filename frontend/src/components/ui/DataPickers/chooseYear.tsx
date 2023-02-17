import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, useCallback, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks';
import { ArrowDownIcon } from '../../icons';
import { Card } from '../Card';

interface ChooseYearProps {
    current: Date;
    onSelect: (year: number) => void;
}

const possibleYears = [2018, 2019, 2020, 2022, 2023, 2024, 2025];

export function ChooseYear(props: ChooseYearProps) {
    const [isOpen, setIsOpen] = useState(false);
    const refCard = useRef(null);

    useOnClickOutside(refCard, () => {
        setIsOpen(false);
    });

    const onOpenClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onSelectClick = useCallback(
        (year: number) => () => {
            props.onSelect(year);
            setIsOpen(false);
        },
        [props.onSelect],
    );

    return (
        <div className={'relative'}>
            <div className={'flex cursor-pointer items-center gap-1 font-medium'} onClick={onOpenClick}>
                <div>{props.current.getFullYear()}</div>
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
                        'scrollbar absolute left-0 h-24  w-16 overflow-y-auto border border-gray-100 text-center'
                    }
                >
                    {possibleYears.map((item) => {
                        return (
                            <div
                                className={classNames(
                                    'cursor-pointer hover:bg-gray-100',
                                    item === props.current.getFullYear() ? 'bg-gray-200 hover:bg-gray-300' : '',
                                )}
                                onClick={onSelectClick(item)}
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
