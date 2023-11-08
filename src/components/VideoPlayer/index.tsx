import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { PlayIcon } from '../../assets';
import { Typography } from '../../common';
import styles from './VideoPlayer.module.scss';
interface VideoProps {
    url?: string;
    localClassName?: string;
    overlayText?: string;
}

export const VideoPlayer: React.FC<VideoProps> = ({
    url,
    localClassName,
    overlayText = 'Play Video',
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayToggle = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <div className={classNames(styles.mainContainer, localClassName)}>
            <video
                ref={videoRef}
                controls
                controlsList="nodownload"
                className={styles.video}
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <div className={styles.overlay}>
                    <img
                        src={PlayIcon}
                        alt="play"
                        onClick={handlePlayToggle}
                    ></img>
                    <Typography variant="text-lg-medium" color="grey-300">
                        {overlayText}
                    </Typography>
                </div>
            )}
        </div>
    );
};
