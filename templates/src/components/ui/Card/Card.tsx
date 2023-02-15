import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps) {
    return <div {...props} className={classNames(props.className, 'rounded-lg bg-white')} />;
}
