import { Courses_available } from './constant';
import { Chapter, Course, courses } from './data';
export * from './content';
export * from './data';
export const getCourse = (course?: string): Course | null => {
    console.log(courses);
    if (course && Courses_available.includes(course)) {
        return courses[course];
    } else {
        return null;
    }
};

export const getChapter = (
    course?: string,
    chapter?: string
): Chapter | null => {
    if (course && chapter && Courses_available.includes(course)) {
        const idx = parseInt(chapter) - 1;
        return courses[course].chapters[idx];
    } else {
        return null;
    }
};

export const getSublesson = (
    course?: string,
    chapter?: string,
    lesson?: string,
    sublesson?: string
) => {
    if (
        course &&
        Courses_available.includes(course) &&
        chapter &&
        lesson &&
        sublesson
    ) {
        const chap_idx = parseInt(chapter) - 1;
        const lesson_idx = parseInt(lesson) - 1;
        const sub_idx = parseInt(sublesson) - 1;
        return courses[course].chapters[chap_idx].lessons[lesson_idx]
            .sublessons[sub_idx];
    } else {
        return null;
    }
};
