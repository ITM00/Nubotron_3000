import classNames from 'classnames';
import { HTMLAttributes, forwardRef } from 'react';
import { FiCheck } from 'react-icons/fi';

export type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
    children?: JSX.Element | string;
    classNameLabel?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, ref) {
    const { children, classNameLabel, ...otherProps } = props;

    return (
        <label className={classNames('flex h-5 cursor-pointer items-center gap-1', classNameLabel)}>
            <div className={'relative h-full'}>
                <input
                    {...otherProps}
                    className={classNames(
                        'border-yellow-gray-200 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all checked:border-yellow-500 checked:bg-yellow-500',
                        props.className,
                    )}
                    type='checkbox'
                    ref={ref}
                />
                <div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
                    <FiCheck className={'text-white'} />
                </div>
            </div>
            {children}
        </label>
    );
});
