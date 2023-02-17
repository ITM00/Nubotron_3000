import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export function PageHeaderLayout(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={classNames(
                'gap-4 rounded-t-lg border border-gray-80 bg-gray-20 p-2',
                props.className,
            )}
        />
    );
}
