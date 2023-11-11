import React from 'react';
import topical from '../../../assets/video/topical.mp4';
import { VideoPlayer } from './../../VideoPlayer/index';
import styles from './TopicalVideo.module.scss';

const TopicalVideo: React.FC = () => {
    return (
        <div className={styles.topicalContainer}>
            <div className={styles.topicalVideo}>
                <VideoPlayer overlayText=" " url={topical}></VideoPlayer>
                <div className={styles.topicalText}>
                    <h1 className={styles.heading}>
                        Topical quizzes, both casual and competitive.
                    </h1>

                    <p className={styles.p1}>
                        Compete against others, or hone your own calibre.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopicalVideo;
