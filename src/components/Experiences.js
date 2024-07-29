import React, { useState } from 'react';
import styles from '../styles/components/Experiences.module.css';
import "aos/dist/aos.css";
import IlluminaImg from "../assets/Experiences/illumina.png";
import TitansoftImg from "../assets/Experiences/titansoft.png";
import { HashLink as Link } from 'react-router-hash-link';

const Experiences = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <div id="experiences" className={styles["container"]}>
            <h1 className={styles["experiences-header"]} data-aos="fade-up">
                Experience
            </h1>
            <div className={styles["company-list-container"]}>
                <Link 
                    className={styles["company-container"]} 
                    data-aos="fade-up"
                    onMouseEnter={() => setHoveredLink(1)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                        color: hoveredLink !== null && hoveredLink !== 1 ? "grey" : "white"
                    }} 
                >
                    <img 
                        className={hoveredLink !== null && hoveredLink !== 1 ? styles["company-image-shaded"]: styles["company-image"]} 
                        src={IlluminaImg} 
                    />
                    <div className={styles["description-container"]}>
                        <h2>Software Development Intern</h2>
                        <p className={styles["experience-description"]}>
                            During this 6 months internship, I had the opportunity to join a multinational
                            team that is working on the software of sequencing instruments. I actively participated in
                            every agile lifecycle, and made many meaningful contributions that enhanced my understanding of
                            microservices, identity management, push notification system, CI/CD and software testing.
                        </p>
                    </div>
                </Link>
                <Link 
                    className={styles["company-container"]} 
                    data-aos="fade-up"
                    onMouseEnter={() => setHoveredLink(2)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                        color: hoveredLink !== null && hoveredLink !== 2 ? "grey" : "white"
                    }}
                >
                    <img 
                        className={hoveredLink !== null && hoveredLink !== 2 ? styles["company-image-shaded"]: styles["company-image"]}  
                        src={TitansoftImg} 
                    />
                    <div className={styles["description-container"]}>
                        <h2>Software Developer Intern</h2>
                        <p className={styles["experience-description"]}>
                            During this 3 months internship, I collaborated with three other interns and two mentors to build a greenfield cache service 
                            that successfully increased the company's database read capacity by 4 times. We worked well together and spent the
                            remaining time fortifying the company's feature toggle website. 
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Experiences;