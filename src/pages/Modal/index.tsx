import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    imageUrl: string;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal }) => {
    return (
        <div className={styles.ModalOverlay} onClick={closeModal}>
            <button onClick={closeModal}>x</button>
            <div className={styles.ModalContent}>
                <h1>{imageUrl}</h1>
            </div>
        </div>
    );
};

export default Modal;
