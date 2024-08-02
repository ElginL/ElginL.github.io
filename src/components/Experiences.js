import React, { useState } from 'react';
import styles from '../styles/components/Experiences.module.css';
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';
import { experienceData } from '../data/Experience';

const Experiences = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <div id="experiences" className={styles["container"]}>
            <h1 className={styles["experiences-header"]} data-aos="fade-up">
                Experience
            </h1>
            <div className={styles["company-list-container"]}>
                {
                    experienceData.map((data, index) => (
                        <Link
                            key={index}
                            className={styles["company-container"]} 
                            to={data["linkToPage"]}
                            data-aos="fade-up"
                            onMouseEnter={() => setHoveredLink(index)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                color: hoveredLink !== null && hoveredLink !== index ? "grey" : "white"
                            }} 
                        >
                            <img 
                                className={hoveredLink !== null && hoveredLink !== index ? styles["company-image-shaded"]: styles["company-image"]} 
                                src={data["companyImage"]} 
                                alt={data["jobTitle"]}
                            />
                            <div className={styles["description-container"]}>
                                <h2>
                                    {data["jobTitle"]}
                                </h2>
                                <p className={styles["experience-description"]}>
                                    {data["description"]}
                                </p>      
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences;