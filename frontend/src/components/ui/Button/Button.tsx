import classNames from 'classnames';
import { ButtonHTMLAttributes, memo } from 'react';

import { ProgressIcon } from '../../icons';

export type ButtonType = 'contained' | 'outlined' | 'text' | 'gray';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: ButtonType;
    isProgress?: boolean;
    iconLeft?: JSX.Element;
    containerClassName?: string;
};

export const Button = memo(function Button({
    theme = 'contained',
    isProgress,
    children,
    containerClassName,
    ...otherProps
}: ButtonProps) {
    return (
        <button
            {...otherProps}
            className={classNames(
                theme === 'contained'
                    ? 'text-black bg-yellow-600 hover:bg-yellow-700 focus-visible:ring-yellow-500'
                    : '',
                theme === 'outlined'
                    ? 'text-black border border-yellow-600 bg-white hover:bg-yellow-200 focus-visible:ring-yellow-300'
                    : '',
                theme === 'text' ? 'bg-transparent text-yellow-600 hover:bg-gray-20 focus-visible:ring-yellow-500' : '',
                theme === 'gray'
                    ? 'border border-gray-80 bg-gray-20 text-gray-700 hover:bg-gray-80 focus-visible:ring-gray-500'
                    : '',
                'relative rounded-md px-4 py-1 text-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                otherProps.className,
            )}
        >
            {isProgress && (
                <ProgressIcon
                    className={classNames(
                        't-2/4 l-2/4 absolute animate-spin',
                        theme === 'contained' ? 'text-white' : '',
                        theme === 'outlined' ? 'text-yellow-500' : '',
                        theme === 'text' ? 'text-gray-500' : '',
                        theme === 'gray' ? 'text-gray-60' : '',
                    )}
                />
            )}
            <div
                className={classNames(
                    'flex items-center justify-center',
                    isProgress ? 'opacity-0' : '',
                    containerClassName,
                )}
            >
                {children}
            </div>
        </button>
    );
});
