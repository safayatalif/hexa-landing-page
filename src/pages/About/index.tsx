import React from 'react';
import styles from './About.module.scss';
import { Typography } from '../../common';
// import {image} from '../../data/aboutTeam.json';
// import aboutTeam from '../../../src/data/aboutTeam.json';
import image from '../../../src/assets/about-image/hamja-yusuf.png'
import image2 from '../../../src/assets/about-image/arteza-ahmed.png'
import image3 from '../../../src/assets/about-image/asm-tassen.png'
import image4 from '../../../src/assets/about-image/yasir-mohiuddin.png'


export const About: React.FC = () => {
    return (
        <>
            <div className={styles.AboutBanner}>

            </div>
            <div className={styles.AboutHeading}>
                <Typography variant="title-sm-medium">
                    Bringing joy to exam preparation
                </Typography>
            </div>
            <div className={styles.AboutText}>
                <Typography variant="text-md-regular">
                    Hey there!
                </Typography>
                <Typography variant="text-md-regular">
                    If you’re a high-school student, or even a middle-school student, you’re probably like what we were back in the days - super stressed and extremely anxious about the upcoming exams.
                </Typography><br />
                <Typography variant="text-md-regular">
                    Even if you’re not someone very studious, there’s a corner in you that worries about the upcoming O level examinations, or the IGCSEs, or the International and French Baccalaureates.
                </Typography><br />
                <Typography variant="text-md-regular">
                    At Hexa, we aspire to create the next generation educational platform that will adequately equip students to navigate an ever-changing world, which has become more unstable than ever. We aim to build the ultimate generation of problem solvers, capable of shaping the future and beyond, by redefining education fundamentally.
                </Typography><br />
                <Typography variant="text-md-regular">
                    We wish to achieve our mission by democratising and personalising high-quality education for students studying in different curricula, starting off with the International British Curriculum.                </Typography><br />
                <Typography variant="text-md-regular">
                    Okay, but, what does that mean?
                </Typography><br />
                <Typography variant="text-md-regular">
                    With our product, we want to ensure that students learn fast with cinematic bite-sized content and practice smart with carefully engineered study tools. Imagine a place where you could access Netflix-like courses, and study tools, practice papers, and quizzes like those found in CourseHero.
                </Typography><br />
                <Typography variant="text-md-regular">
                    It’s like Outlier, CourseHero and Brilliant combined into one platform, but with a key difference - we are building for secondary school students studying in various curricula.
                </Typography><br />
                <Typography variant="text-md-regular">
                    And yes, we’re starting small. We want to make sure that whatever we make is finely attuned to the needs of our students, and building lean and growing the product in public is the way to go.
                </Typography><br />
                <Typography variant="text-md-regular">
                    If you’re a high-school student, or even a middle-school student, you’re probably like what we were back in the days - super stressed and extremely anxious about the upcoming exams.
                </Typography><br />
                <Typography variant="text-md-regular"><br />
                    It’s a journey that we’re bringing all of you along. Check and use the product in and out. Something doesn’t feel right? Need specific features for your prep? Let us know! We need users like you to enhance this delightful experience.
                </Typography><br />
                <Typography variant="text-md-regular">
                    Let’s build together!
                </Typography>
            </div>
            <div className={styles.AboutTeamHeading}>
                <Typography variant="title-md-semibold">
                    The Dream Team
                </Typography>

            </div>
            <div className={styles.AboutTeamImage}>
                <div>
                    <img src={image} alt="" />


                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image4} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>

            </div>
        </>
    )
};

{/* <img src={image} alt="" /> */ }
{/* 
                    {aboutTeam?.map((item, idx) => (
                        <div key={idx}>
                            <img width={100} height={100} src={item?.image} alt="" />

                        </div>
                    ))} */}
{/* {aboutTeam?.map(member => (
                        <div key={member.id}>

                            <img width={100} height={100} src={member?.url} alt="" />

                        </div>
                    ))} */}