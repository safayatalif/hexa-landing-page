import React, { useState } from 'react';
import { Button, Input, Typography } from '../../common';
import Modal from '../Modal/index';
import styles from './About.module.scss';
// import {image} from '../../data/aboutTeam.json';
// import aboutTeam from '../../../src/data/aboutTeam.json';
import image2 from '../../../src/assets/about-image/arteza-ahmed.png';
import image3 from '../../../src/assets/about-image/asm-tassen.png';
import image from '../../../src/assets/about-image/hamja-yusuf.png';
import image4 from '../../../src/assets/about-image/yasir-mohiuddin.png';
import ContactNavbar from '../../components/ContactNavbar';
// import { Navbar } from '../../components';

export const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedImage, setClickedImage] = useState('');

    const openModal = (imageSrc: string, details: string) => {
        setIsModalOpen(true);
        setClickedImage(details);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setClickedImage('');
    };
    return (
        <>
            {/* <Navbar /> */}
            <ContactNavbar></ContactNavbar>
            <div className={styles.AboutBanner}></div>
            <div className={styles.AboutHeading}>
                <Typography variant="title-sm-medium">
                    Bringing joy to exam preparation
                </Typography>
            </div>
            <div className={styles.AboutText}>
                <Typography variant="text-md-regular">Hey there!</Typography>
                <Typography variant="text-md-regular">
                    If you’re a high-school student, or even a middle-school
                    student, you’re probably like what we were back in the days
                    - super stressed and extremely anxious about the upcoming
                    exams.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    Even if you’re not someone very studious, there’s a corner
                    in you that worries about the upcoming O level examinations,
                    or the IGCSEs, or the International and French
                    Baccalaureates.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    At Hexa, we aspire to create the next generation educational
                    platform that will adequately equip students to navigate an
                    ever-changing world, which has become more unstable than
                    ever. We aim to build the ultimate generation of problem
                    solvers, capable of shaping the future and beyond, by
                    redefining education fundamentally.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    We wish to achieve our mission by democratising and
                    personalising high-quality education for students studying
                    in different curricula, starting off with the International
                    British Curriculum.{' '}
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    Okay, but, what does that mean?
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    With our product, we want to ensure that students learn fast
                    with cinematic bite-sized content and practice smart with
                    carefully engineered study tools. Imagine a place where you
                    could access Netflix-like courses, and study tools, practice
                    papers, and quizzes like those found in CourseHero.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    It’s like Outlier, CourseHero and Brilliant combined into
                    one platform, but with a key difference - we are building
                    for secondary school students studying in various curricula.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    And yes, we’re starting small. We want to make sure that
                    whatever we make is finely attuned to the needs of our
                    students, and building lean and growing the product in
                    public is the way to go.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    If you’re a high-school student, or even a middle-school
                    student, you’re probably like what we were back in the days
                    - super stressed and extremely anxious about the upcoming
                    exams.
                </Typography>
                <br />
                <Typography variant="text-md-regular">
                    <br />
                    It’s a journey that we’re bringing all of you along. Check
                    and use the product in and out. Something doesn’t feel
                    right? Need specific features for your prep? Let us know! We
                    need users like you to enhance this delightful experience.
                </Typography>
                <br />
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
                <div
                    onClick={() =>
                        openModal(
                            image,
                            'Hamza Yusuff is Hexa’s Chief Executive & Growth Officer. Hamza, is primary responsible for crafting the companys growth strategies and overall vision. He works across all departments, ensuring Hexa is on the right trajectory. This involves overseeing areas such as product development, engineering, sales, and operations, all while maintaining a high-level perspective to effectively collaborate with the entire team. In addition to his role at Hexa, Hamza is also involved in several other businesses in Canada. He is currently focused on scaling his B2B company, IOCHE, where he assists Canadas top models and influencers in launching their clothing brands. Before this, Hamza worked as a Software Engineer at companies like Samsung, Wealthsimple, and NCR Corporation, where he contributed to various engineering projects.'
                        )
                    }
                >
                    <img className={styles.teamImage} src={image} alt="" />
                </div>
                <div
                    onClick={() =>
                        openModal(
                            image2,
                            'Irteza Ahmed is Hexa’s Chief Financial & Operations Officer.Irtezas expertise overlooks resource management, overseeing the allocation and management of various resources, including human capital and infrastructure. His key responsibility lies in leverage strategies, financial structuring, and amplifying successful endeavours. By closely monitoring key performance indicators and operational metrics, Irteza assesses the performance of Hexas fantastic team and the company as a whole. Lastly, Irteza takes charge of the legal and compliance department, navigating international regulations while reducing costs and ensuring full compliance. His expertise in cost reduction allows him to find innovative ways to save on taxes and legal expenses.'
                        )
                    }
                >
                    <img className={styles.teamImage} src={image2} alt="" />
                </div>
                <div
                    onClick={() =>
                        openModal(
                            image4,
                            'Yasir Mohiuddin is Hexa’s Chief Creative & Product Officer.Apart from having a holistic leadership through the various departments of Hexa, Yasir primarily overlooks every thing related to product and creative.From overseeing end - to - end management of creative and product direction, content development, and branding supervision, Yasir also plays a key role in the continued development of product ideation and strategic user experience.In conjunction with Hexa, Yasir runs a personal creative direction brand based in Hong Kong - working with the likes of Redbull, Penfolds, Pusha T, and S2O. Prior to Hexa, Yasir has also led blockchain-based product design and direction at other companies including Moon Lab and D-Engraver.'
                        )
                    }
                >
                    <img className={styles.teamImage} src={image4} alt="" />
                </div>
                <div
                    onClick={() =>
                        openModal(
                            image3,
                            'A S M Taseen is Hexa’s Chief Technology Officer, as well as overlooking product direction.Taseens primary responsibility is overseeing the entire product development process, including project building, design pattern planning, dev team management, implementation of best practices, and the maintenance of a scalable infrastructure. Moreover, he puts the technical perspective when it comes to scoping new features at Hexa. Overall, he ensures that Hexa experiences a seamless development-to-deployment process.Outside of Hexa, Taseen is an aspiring software engineer with a deep passion for his career. He has gained valuable experience through Software Engineering Internships at several North American startups, including Super, Relay Financial, and TutorOcean. In these roles, he worked on and took ownership of various high-priority projects, solidifying his expertise across a range of technologies and industries.'
                        )
                    }
                >
                    <img className={styles.teamImage} src={image3} alt="" />
                </div>
                {isModalOpen && (
                    <div className={styles.modalPosition}>
                        <Modal
                            imageUrl={clickedImage}
                            closeModal={closeModal}
                        />
                    </div>
                )}
            </div>
            <div className={styles.textJoin}>
                <Typography variant="title-md-semibold">
                    Join the journey
                </Typography>
                <Typography variant="text-lg-regular">
                    Get exclusive updates right into your inbox
                </Typography>
            </div>
            <div className={styles.journeyContainer}>
                <Input
                    inputType="email"
                    required={true}
                    placeholder="Email Address"
                    inputClassname={styles.emailAddress}
                />

                <Button styleType="primary" className={styles.journeyButton}>
                    <Typography variant="text-md-semibold" color="white">
                        Count me in
                    </Typography>
                </Button>
            </div>
        </>
    );
};
