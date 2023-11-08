import classNames from 'classnames';
import React from 'react';
import styles from './Input.module.scss';

export interface InputProps {
    inputType: string;
    required: boolean;
    placeholder?: string;
    inputClassname?: string;
    disabled?: boolean;
    containerClassname?: string;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    onChange?: (e: any) => void;
}

export const Input: React.FC<InputProps> = ({
    inputType,
    required,
    placeholder,
    inputClassname,
    onChange,
}) => {
    return (
        <div>
            <input
                type={inputType}
                required={required}
                placeholder={placeholder}
                className={classNames(
                    styles.primaryInputContainer,
                    inputClassname
                )}
                onChange={onChange}
            />
        </div>
    );
};
