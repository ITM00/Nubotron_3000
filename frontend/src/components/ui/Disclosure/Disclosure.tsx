import { ReactNode, useCallback, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

import { Button } from '../Button';

export interface DisclosureProps {
    title: string;
    initOpen?: boolean;
    children?: string | ReactNode;
}

export function Disclosure(props: DisclosureProps) {
    const [isActive, setIsActive] = useState(props.initOpen);

    const clickHandler = useCallback(() => {
        setIsActive((state) => !state);
    }, []);

    return (
        <div className={'flex flex-col gap-2 '}>
            <div className={'flex cursor-pointer items-center gap-2'} onClick={clickHandler}>
                <Button theme={'gray'} className={'h-6 w-6 !p-0'}>
                    {isActive ? (
                        <MdKeyboardArrowRight className={'m-auto h-4  w-8'} />
                    ) : (
                        <MdKeyboardArrowDown className={'m-auto h-4  w-8'} />
                    )}
                </Button>
                <div className={'text-sm font-bold'}>{props.title}</div>
            </div>
            {isActive && <div className={'ml-6'}>{props.children}</div>}
        </div>
    );
}
