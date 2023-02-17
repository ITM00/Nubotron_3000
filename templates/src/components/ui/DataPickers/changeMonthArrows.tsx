import { memo } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';
import { Button } from '../Button';

export interface ChangeMonthArrowsProps {
    onNext?: () => void;
    onPrev?: () => void;
}

export const ChangeMonthArrows = memo(function ChangeMonthArrows(props: ChangeMonthArrowsProps) {
    return (
        <div className={'flex items-center gap-2'}>
            <Button theme={'text'} className={'h-5 w-5 !p-0'}>
                <ArrowLeftIcon onClick={props.onPrev} className={'h-5 w-5 cursor-pointer text-gray-900'} />
            </Button>
            <Button theme={'text'} className={'h-5 w-5 !p-0'}>
                <ArrowRightIcon onClick={props.onNext} className={'h-5 w-5 cursor-pointer text-gray-900'} />
            </Button>
        </div>
    );
});
