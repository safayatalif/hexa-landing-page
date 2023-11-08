import classNames from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';

export interface DividerProps {
    width?: string;
    height?: string;
    color?: 'black' | 'light-grey';
    margin?: string;
    localClassName?: string;
}

export const Divider: React.FC<DividerProps> = ({
    width = '100%',
    height = '1px',
    color = 'black',
    margin = '0',
    localClassName,
}) => {
    const dividerInLineStyle: React.CSSProperties = {
        width,
        height,
        margin,
    };
    return (
        <div
            className={classNames(localClassName, color && styles[color])}
            style={dividerInLineStyle}
        ></div>
    );
};
