import React, { useRef, useState } from 'react';
import cinematic from '../../../assets/video/cinematic.mp4';
import { Typography } from '../../../common';
import styles from './CinematicVideo.module.scss';

const CinematicVideo: React.FC = () => {
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
        <div className={styles.cinematicContainer}>
            <div
                className={styles.cinematicVideoBox}
                onMouseOver={handlePlayToggle}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload"
                    className={styles.cinematicVideo}
                >
                    <source src={cinematic} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.cinematicText}>
                    <Typography variant="text-sm-semibold" color="white">
                        Learn
                    </Typography>
                    <Typography variant="title-lg-medium" color="white">
                        Cinematic <br /> masterclasses for <br /> each topic.
                    </Typography>

                    <Typography variant="title-xs-medium" color="white">
                        Short, cinematic, topical videos - with each <br />
                        video lasting no more than 10 minutes.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default CinematicVideo;
