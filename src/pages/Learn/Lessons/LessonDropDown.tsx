import classNames from 'classnames';
import React, { useState } from 'react';
import { ChevronIcon, LockIcon, PlayIcon } from '../../../assets';
import { Button, PageLink, Typography } from '../../../common';
import { Lesson } from '../../../data';
import styles from './Dropdown.module.scss';

export interface LessonDropdownProps {
    lesson: Lesson;
}

export const LessonDropdown: React.FC<LessonDropdownProps> = ({ lesson }) => {
    console.log(lesson);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.lessonInfo}>
            <div
                className={styles.description}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Typography variant="title-xs-medium" color="white">
                    {lesson.description}
                </Typography>
                <img
                    className={classNames(
                        styles.dropdownIcon,
                        isOpen && styles.iconUp
                    )}
                    src={ChevronIcon}
                    alt="chevron"
                ></img>
            </div>
            {isOpen && (
                <div className={styles.dropdowns}>
                    {lesson?.sublessons.map((sublesson, idx) => (
                        <div key={idx} className={styles.dropdown}>
                            <Typography
                                variant="text-xl-medium"
                                color="grey-900"
                            >
                                {`${idx + 1}. ${sublesson.title}`}
                            </Typography>
                            <PageLink
                                to={`${lesson.id}/sub-lessons/${sublesson.id}`}
                            >
                                <Button
                                    styleType={
                                        sublesson.free ? 'success' : 'primary'
                                    }
                                    className={styles.button}
                                >
                                    <img
                                        src={
                                            sublesson.free ? PlayIcon : LockIcon
                                        }
                                        alt="play"
                                    ></img>
                                    <Typography
                                        variant="text-md-semibold"
                                        color="white"
                                    >
                                        {sublesson.free ? 'Free' : 'Start'}
                                    </Typography>
                                </Button>
                            </PageLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
