import React, { useRef, useState } from 'react';
import topical from '../../../assets/video/topical.mp4';
import { Typography } from '../../../common';
import styles from './TopicalVideo.module.scss';

const TopicalVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayToggle = () => {
        if (videoRef.current) {
            if (isPlaying) {
                // videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.topicalContainer}>
            <div
                className={styles.topicalVideoBox}
                onMouseOver={handlePlayToggle}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload"
                    className={styles.topicalVideo}
                >
                    <source src={topical} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.topicalText}>
                    <Typography variant="text-sm-semibold" color="white">
                        Practice
                    </Typography>
                    <Typography variant="title-lg-medium" color="white">
                        Topical quizzes, both casual and competitive.
                    </Typography>

                    <Typography variant="title-xs-medium" color="white">
                        Compete against others, or hone your own calibre.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default TopicalVideo;
