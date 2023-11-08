import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '../../../common';
import { Navbar } from '../../../components';
import { getChapter, Lesson } from '../../../data';
import { LessonDropdown } from './LessonDropDown';
import styles from './Lessons.module.scss';

export const Lessons: React.FC = () => {
    const navigate = useNavigate();
    const { course, chapter } = useParams();
    const currentChapter = getChapter(course, chapter);
    console.log(currentChapter);
    const [lessons, setLessons] = useState<Lesson[]>([]);

    useEffect(() => {
        if (!currentChapter) {
            navigate('/new');
        } else {
            setLessons(currentChapter.lessons);
        }
    }, [currentChapter, navigate]);
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.mainContainer}>
                <p className={styles.title}>LESSONS</p>
                <Typography variant="title-2xl-medium" color="grey-gradient">
                    {course &&
                        course?.charAt(0).toUpperCase() + course?.slice(1)}
                </Typography>
                <Typography
                    variant="title-xs-regular"
                    color="grey-gradient"
                    localClassNames={styles.curriculum}
                >
                    CIE O Level
                </Typography>
                <div className={styles.chapterInfo}>
                    <Typography variant="title-md-medium" color="grey-900">
                        {currentChapter?.title}
                    </Typography>
                    <Typography variant="text-lg-regular" color="grey-900">
                        {currentChapter?.description}
                    </Typography>
                </div>
                {lessons.map((lesson, idx) => (
                    <LessonDropdown key={idx} lesson={lesson} />
                ))}
            </div>
        </div>
    );
};
