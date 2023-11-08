import classNames from 'classnames';
import React, { useState } from 'react';
import { BulbIcon, ReverseArrowIcon } from '../../../../assets';
import { Button, Typography } from '../../../../common';
import { MCQ, OBullets, Paragraph, Title, UBullets } from '../../../../data';
import styles from './Content.module.scss';

// Title Component
export const TitleComponent: React.FC<Title> = ({ text }) => (
    <Typography
        localClassNames={styles.textContainer}
        variant="title-sm-medium"
        color="grey-900"
    >
        {text}
    </Typography>
);

// Paragraph Component
export const ParagraphComponent: React.FC<Paragraph> = ({ text }) => (
    <Typography
        localClassNames={styles.textContainer}
        variant="text-xl-regular"
        color="grey-900"
    >
        {text}
    </Typography>
);

// Bullets Component
export const OBulletsComponent: React.FC<OBullets> = ({ items }) => (
    <ol className={styles.list}>
        {items?.map((item, index) => (
            <li className={styles.listitem} key={index}>
                {item}
            </li>
        ))}
    </ol>
);

export const UBulletsComponent: React.FC<UBullets> = ({ items }) => (
    <ul className={styles.list}>
        {items?.map((item, index) => (
            <li className={styles.listitem} key={index}>
                {item}
            </li>
        ))}
    </ul>
);

// MCQ Component

export const MCQComponent: React.FC<MCQ> = ({
    question,
    options,
    answer,
    solution,
}) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showSolution, setShowSolution] = useState<boolean>(false);
    return (
        <div className={styles.mcqContainer}>
            <div className={styles.questionContainer}>
                <Typography variant="title-sm-medium" color="white">
                    {question}
                </Typography>
            </div>
            <div className={styles.answerContainer}>
                {showSolution ? (
                    <Typography variant="title-xs-medium" color="grey-900">
                        {solution}
                    </Typography>
                ) : (
                    <div className={styles.options}>
                        {options?.map((option, idx) => (
                            <div key={idx} className={styles.option}>
                                <div
                                    className={classNames(
                                        styles.checkbox,
                                        selected == idx + 1 &&
                                            styles.checkbox_active
                                    )}
                                    onClick={
                                        !isSubmitted
                                            ? () => setSelected(idx + 1)
                                            : undefined
                                    }
                                />
                                <Typography
                                    variant="title-xs-medium"
                                    color="grey-900"
                                >
                                    {option.text}
                                </Typography>
                            </div>
                        ))}
                    </div>
                )}

                <div className={styles.buttons}>
                    {!showSolution && (
                        <Button
                            styleType={
                                !isSubmitted
                                    ? 'primary'
                                    : selected == answer
                                    ? 'correct'
                                    : 'error'
                            }
                            className={styles.button}
                            disabled={isSubmitted || !selected}
                            onClick={() => setIsSubmitted(true)}
                        >
                            <Typography
                                variant="text-md-semibold"
                                color="white"
                            >
                                {!isSubmitted
                                    ? 'Submit'
                                    : selected == answer
                                    ? 'Correct!'
                                    : 'Wrong'}
                            </Typography>
                        </Button>
                    )}
                    <Button
                        styleType="secondary"
                        className={classNames(styles.button, styles.sol_button)}
                        onClick={() => setShowSolution(!showSolution)}
                    >
                        {showSolution ? (
                            <img src={ReverseArrowIcon} alt="go-back"></img>
                        ) : (
                            <img src={BulbIcon} alt="bulb"></img>
                        )}
                        <Typography variant="text-md-semibold" color="black">
                            {showSolution
                                ? 'Go back to question'
                                : !isSubmitted
                                ? 'Solution'
                                : 'Explanation'}
                        </Typography>
                    </Button>
                </div>
            </div>
        </div>
    );
};
