import classNames from 'classnames';
import { ReactNode, useCallback, useState } from 'react';

import { ArrowDownIcon, ArrowRightIcon } from '../../icons';
import { Button } from '../Button';

interface DisclosureButtonProps {
    isActive?: boolean;
    className?: string;
}

export function DisclosureButton(props: DisclosureButtonProps) {
    return (
        <Button theme={'gray'} className={classNames('h-6 w-6 !p-0', props.className)}>
            {props.isActive ? (
                <ArrowRightIcon className={'fill-black m-auto h-4 w-8'} />
            ) : (
                <ArrowDownIcon className={'fill-black m-auto h-4 w-8'} />
            )}
        </Button>
    );
}

export interface DisclosureProps {
    title: string;
    initOpen?: boolean;
    children?: string | ReactNode;
    classNameTitle?: string;
    classNameBody?: string;
}

export function Disclosure(props: DisclosureProps) {
    const [isActive, setIsActive] = useState(props.initOpen);

    const clickHandler = useCallback(() => {
        setIsActive((state) => !state);
    }, []);

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex cursor-pointer items-center gap-1'} onClick={clickHandler}>
                <DisclosureButton isActive={isActive} />
                <div className={props.classNameTitle}>{props.title}</div>
            </div>
            {isActive && <div className={classNames('ml-7', props.classNameBody)}>{props.children}</div>}
        </div>
    );
}
