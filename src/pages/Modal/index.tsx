import React from 'react';
import styles from './Modal.module.scss';
import { Typography } from '../../common';

interface ModalProps {
    imageUrl: string;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal }) => {
    return (
        <div className={styles.ModalOverlay}>
            <p className={styles.closeButton} onClick={closeModal}>x</p>
            <div className={styles.ModalContent}>

                <Typography variant="text-md-regular" alignment="center">
                    {imageUrl}
                </Typography>

            </div>
        </div>
    );
};

export default Modal;
