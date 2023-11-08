import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReverseArrowIcon } from '../../../assets';
import { Button, PageLink, Typography } from '../../../common';
import { Navbar, VideoPlayer } from '../../../components';
import { ContentItem, getSublesson, VideoLecture } from '../../../data';
import {
    MCQComponent,
    OBulletsComponent,
    ParagraphComponent,
    TitleComponent,
    UBulletsComponent,
} from './Content';
import styles from './SubLesson.module.scss';

export const SubLesson: React.FC = () => {
    const { course, chapter, lesson, sublesson } = useParams();
    const navigate = useNavigate();
    const currentSubLesson = getSublesson(course, chapter, lesson, sublesson);
    const [content, setContent] = useState<ContentItem[] | undefined>([]);
    useEffect(() => {
        if (!currentSubLesson) {
            navigate('/new');
        } else {
            setContent(currentSubLesson.content);
        }
    }, [currentSubLesson, navigate]);

    const renderVideo = (content?: ContentItem[]) => {
        const video = content?.find(
            (item): item is VideoLecture => item.type === 'video'
        );

        if (video) {
            return (
                <VideoPlayer localClassName={styles.video} url={video.url} />
            );
        }
    };

    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.mainContainer}>
                <p className={styles.title}>{course?.toUpperCase()}</p>
                <Typography
                    variant="title-md-medium"
                    color="grey-gradient"
                    alignment="center"
                >
                    Physical quantities and measurement techniques
                </Typography>
                {renderVideo(content)}
                <div className={styles.contentContainer}>
                    {content?.map((item, idx) => {
                        switch (item.type) {
                            case 'title':
                                return <TitleComponent key={idx} {...item} />;
                            case 'paragraph':
                                return (
                                    <ParagraphComponent key={idx} {...item} />
                                );
                            case 'o_bullets':
                                return (
                                    <OBulletsComponent key={idx} {...item} />
                                );
                            case 'u_bullets':
                                return (
                                    <UBulletsComponent key={idx} {...item} />
                                );
                            case 'mcq':
                                return <MCQComponent key={idx} {...item} />;
                            default:
                                return null;
                        }
                    })}
                </div>
                <div className={styles.endContainer}>
                    <Typography variant="title-md-medium" alignment="center">
                        End to a cool lesson right there!
                    </Typography>
                    <PageLink
                        to={`/learn/${course}/chapters/${chapter}/lessons`}
                    >
                        <Button styleType="secondary" className={styles.button}>
                            <img src={ReverseArrowIcon} alt="go-back"></img>
                            <Typography
                                variant="text-md-semibold"
                                color="black"
                            >
                                Lesson Page
                            </Typography>
                        </Button>
                    </PageLink>
                </div>
            </div>
        </div>
    );
};
