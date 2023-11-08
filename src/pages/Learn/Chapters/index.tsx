import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '../../../common';
import { Navbar } from '../../../components';
import { Chapter, Course, getCourse } from '../../../data';
import { ChapterDropdown } from './ChapterDropdown';
import styles from './Chapters.module.scss';

export const Chapters: React.FC = () => {
    const navigate = useNavigate();
    const { course } = useParams();
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const currentCourse: Course | null = getCourse(course);
    console.log(currentCourse);
    useEffect(() => {
        if (!currentCourse) {
            navigate('/new');
        } else {
            setChapters(currentCourse['chapters']);
        }
    }, [currentCourse, navigate]);
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.mainContainer}>
                <p className={styles.title}>CHAPTERS</p>
                <Typography variant="title-2xl-medium" color="grey-gradient">
                    Physics
                </Typography>
                <Typography
                    variant="title-xs-regular"
                    color="grey-gradient"
                    localClassNames={styles.curriculum}
                >
                    CIE O Level
                </Typography>
                {chapters.map((chapter, idx) => (
                    <ChapterDropdown key={idx} chapter={chapter} />
                ))}
            </div>
        </div>
    );
};
