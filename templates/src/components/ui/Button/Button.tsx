import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'gray';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: ButtonType;
};

export function Button({ theme = 'primary', ...otherProps }: ButtonProps) {
    return (
        <button
            {...otherProps}
            className={classNames(
                theme === 'primary' ? 'bg-yellow-400 text-black hover:bg-yellow-200 focus-visible:ring-yellow-500' : '',
                theme === 'gray' ? 'bg-gray-200 text-black hover:bg-gray-100 focus-visible:ring-gray-500' : '',
                'inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-bold hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                otherProps.className,
            )}
        />
    );
}
