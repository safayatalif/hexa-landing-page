export interface Title {
    type: 'title';
    text?: string;
}

export interface VideoLecture {
    type: 'video';
    url?: string;
}

export interface Paragraph {
    type: 'paragraph';
    text?: string;
}

export interface UBullets {
    type: 'u_bullets';
    items?: string[];
}

export interface OBullets {
    type: 'o_bullets';
    items?: string[];
}

interface MCQOption {
    id: number;
    text?: string;
}

export interface MCQ {
    type: 'mcq';
    question?: string;
    options?: MCQOption[];
    answer?: 1 | 2 | 3 | 4;
    solution?: string;
}

export type ContentItem =
    | Title
    | Paragraph
    | OBullets
    | UBullets
    | MCQ
    | VideoLecture;
