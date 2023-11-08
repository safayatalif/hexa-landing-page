import { ContentItem } from './content';
import * as courseDataJSON from './courses.json';

export interface Sublesson {
    id: number;
    title: string;
    free?: boolean;
    content?: ContentItem[];
}

export interface Lesson {
    id: number;
    description: string;
    free_available: boolean;
    sublessons: Sublesson[];
}
export interface Chapter {
    id: number;
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface Instructor {
    name: string;
    degree: string;
}

export interface Course {
    id: string;
    curriculum: string;
    heading: string;
    instructor: Instructor;
    chapters: Chapter[];
}

interface Courses {
    [key: string]: Course;
}

export const courses: Courses = courseDataJSON as Courses;
