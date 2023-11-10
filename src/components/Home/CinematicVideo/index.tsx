import React from 'react';
import cinematic from '../../../assets/video/cinematic.mp4';
import { Typography } from '../../../common';
import { VideoPlayer } from './../../VideoPlayer/index';
import styles from './CinematicVideo.module.scss';

const CinematicVideo: React.FC = () => {
    return (
        <div className="cinematicContainer">
            <div className={styles.cinematicVideo}>
                <VideoPlayer overlayText=" " url={cinematic}></VideoPlayer>
                <div className={styles.cinematicText}>
                    <Typography variant="title-md-semibold">
                        Cinematic <br /> masterclasses for <br /> each topic.
                    </Typography>
                    <Typography variant="text-xs-regular">
                        <p className={styles.p1}>
                            Short, cinematic, topical videos - with each <br />
                            video lasting no more than 10 minutes.
                        </p>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default CinematicVideo;
