import classNames from 'classnames';
import React, { useState } from 'react';
import { ChevronIcon } from '../../../assets';
import { PageLink, Typography } from '../../../common';
import { Chapter } from '../../../data';
import styles from './Dropdown.module.scss';

export interface ChapterDropdownProps {
    chapter: Chapter;
}

export const ChapterDropdown: React.FC<ChapterDropdownProps> = ({
    chapter,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.chapterInfo} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.description}>
                <Typography variant="title-xs-medium" color="white">
                    {chapter.title}
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
                <div className={styles.dropdown}>
                    <Typography
                        localClassNames={styles.details}
                        variant="text-lg-regular"
                        color="grey-300"
                    >
                        {chapter.description}
                    </Typography>
                    <PageLink
                        to={`${chapter.id}/lessons`}
                        className={styles.expandChapter}
                    >
                        <Typography variant="text-lg-medium" color="grey-300">
                            Expand Chapter
                        </Typography>
                        <img
                            className={styles.expandIcon}
                            src={ChevronIcon}
                            alt="chevron"
                        ></img>
                    </PageLink>
                </div>
            )}
        </div>
    );
};
