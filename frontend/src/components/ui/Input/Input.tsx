import classNames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { fullWidth, className, ...otherProps },
    ref,
) {
    return (
        <input
            {...otherProps}
            ref={ref}
            className={classNames(
                className,
                'cursor-pointer rounded border-2 border-gray-200 px-2 hover:border-gray-600',
                fullWidth ? 'w-full' : '',
            )}
        />
    );
});
