import classNames from 'classnames';
import React from 'react';
import styles from './Typography.module.scss';

export interface TypographyProps {
    variant:
        | 'title-3xl-semibold'
        | 'title-2xl-semibold'
        | 'title-2xl-medium'
        | 'title-xl-semibold'
        | 'title-xl-medium'
        | 'title-md-medium'
        | 'title-md-semibold'
        | 'title-sm-medium'
        | 'title-xs-medium'
        | 'title-xs-regular'
        | 'title-lg-medium'
        | 'text-xl-regular'
        | 'text-xl-semibold'
        | 'text-xl-medium'
        | 'text-lg-regular'
        | 'text-lg-medium'
        | 'text-lg-semibold'
        | 'title-sm-regular'
        | 'text-sm-regular'
        | 'text-sm-semibold'
        | 'text-sm-medium'
        | 'text-md-semibold'
        | 'text-md-regular'
        | 'text-md-medium'
        | 'text-xs-regular';
    children:
        | React.ReactNode
        | string
        | string[]
        | JSX.Element
        | JSX.Element[]
        | number
        | undefined
        | null;
    color?: string; // add style to scss file to apply the color, else default color will be applied
    alignment?: 'center' | 'left' | 'right';
    localClassNames?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    variant,
    children,
    color,
    alignment,
    localClassNames,
}) => {
    return (
        <p
            className={classNames(
                styles[variant],
                color ? styles[color] : undefined,
                alignment ? styles[alignment] : undefined,
                localClassNames
            )}
        >
            {children}
        </p>
    );
};
