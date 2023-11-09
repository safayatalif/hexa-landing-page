import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    children: React.ReactNode;
    styleType:
        | 'primary'
        | 'secondary'
        | 'correct'
        | 'error'
        | 'success'
        | 'outline';
    childrenClassname?: string;
    className?: string;
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    styleType,
    className,
    childrenClassname,
    disabled = false,
    onClick,
}) => {
    return (
        <button
            className={classNames(
                className,
                childrenClassname,
                styleType ? styles[styleType] : undefined,
                styles.default
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
