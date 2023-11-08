import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageLink.module.scss';

export interface LinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    childrenClassname?: string;
}

export const PageLink: React.FC<LinkProps> = ({
    to,
    children,
    childrenClassname,
    className,
}) => {
    return (
        <Link
            to={to}
            className={classNames(className, childrenClassname, styles.default)}
        >
            {children}
        </Link>
    );
};
