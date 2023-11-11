import React from 'react';
import cinematic from '../../../assets/video/cinematic.mp4';
import { VideoPlayer } from './../../VideoPlayer/index';
import styles from './CinematicVideo.module.scss';

const CinematicVideo: React.FC = () => {
    return (
        <div className={styles.cinematicContainer}>
            <div className={styles.cinematicVideo}>
                <VideoPlayer overlayText=" " url={cinematic}></VideoPlayer>
                <div className={styles.cinematicText}>
                    <h1 className={styles.heading}>
                        Cinematic <br /> masterclasses for <br /> each topic.
                    </h1>

                    <p className={styles.p1}>
                        Short, cinematic, topical videos - with each <br />
                        video lasting no more than 10 minutes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CinematicVideo;
