import React, { useEffect, useState } from 'react';
import styles from './IntroOverlay.module.scss';

const IntroOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [introComplete, setIntroComplete] = useState<boolean>(false);

    useEffect(() => {
        const simulateAsyncProcess = () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        };

        simulateAsyncProcess().then(() => {
            setIntroComplete(true);
            onComplete();
        });
    }, [onComplete]);

    return (
        <div
            className={`${styles.introOverlay} ${
                introComplete ? styles.introComplete : ''
            }`}
        />
    );
};

export default IntroOverlay;
