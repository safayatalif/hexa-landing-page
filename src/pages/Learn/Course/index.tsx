import React from 'react';
import { useParams } from 'react-router-dom';
import { PageLink } from '../../../common';
import { getCourse } from '../../../data';

export const Course: React.FC = () => {
    const { course } = useParams();
    console.log(course, typeof course);
    if (course == 'physics') {
        console.log(getCourse(course));
    }
    return (
        <div>
            <PageLink to={`chapters/${1}/lessons`}>Chapter 1</PageLink>
        </div>
    );
};
