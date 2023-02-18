import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

import { ArrowDownIcon } from '../../icons';

export interface SelectItem {
    id: string | number;
    title: string;
}

export interface SelectProps {
    items?: SelectItem[];
    value?: SelectItem;
    onChange?: (select: SelectItem) => void;
    placeholder?: string;
}

export function Select(props: SelectProps) {
    return (
        <div className={'relative'}>
            <Listbox value={props.value} onChange={props.onChange}>
                <Listbox.Button
                    className={
                        'relative flex w-full cursor-pointer items-center gap-2 rounded-lg border border-yellow-600 bg-white px-2 py-1 text-left  shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300'
                    }
                >
                    {props.value?.title || props.placeholder}
                    <ArrowDownIcon />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options
                        className={
                            'ring-black absolute z-50 mt-1 max-h-60 w-full cursor-pointer overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm'
                        }
                    >
                        {props.items?.map((item) => {
                            return (
                                <Listbox.Option
                                    className={classNames(
                                        'px-2 py-1',
                                        item.id == props.value?.id
                                            ? 'bg-gray-40 px-2 py-1 hover:bg-gray-80'
                                            : 'bg-white hover:bg-gray-20',
                                    )}
                                    key={item.id}
                                    value={item}
                                >
                                    <div>{item.title}</div>
                                </Listbox.Option>
                            );
                        })}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}
