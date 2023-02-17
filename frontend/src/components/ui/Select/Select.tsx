import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

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
                        'focus-visible:border-indigo-500 relative w-full cursor-pointer cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'
                    }
                >
                    {props.value?.title || props.placeholder}
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options
                        className={
                            'ring-black absolute mt-1 max-h-60 w-full cursor-pointer overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm'
                        }
                    >
                        {props.items?.map((item) => (
                            <Listbox.Option key={item.id} value={item}>
                                {({ selected }) => {
                                    return <div>{item.title}</div>;
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}
