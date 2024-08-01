import React, { useState } from 'react';
import SplinktyImg from '../assets/splinkty-left.png';
import { HashLink as Link } from 'react-router-hash-link';
import GoToArrow from './GoToArrow';
import styles from '../styles/components/MobileProjects.module.css';

const MobileProjects = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={styles["projects-container"]}>
            <Link 
                className={styles["project-container"]}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                to="/splinkty"
            >
                <div>
                    <h2>
                        Splinkty
                    </h2>
                    <p>
                        Mobile application that facilitates bill splitting and tracking money loaned / borrowed from friends.
                    </p>
                    <p className={styles["tech-stack"]}>
                        React Native, Firebase, Google Vision API
                    </p>
                    <div className={styles["go-to-project-container"]} style={{ opacity: hovered ? 1 : 0 }}>
                        <h3>Go to project</h3>
                        <GoToArrow />
                    </div>
                </div>
                <img src={SplinktyImg} className={styles["project-image"]} alt="splinkty" />
            </Link>
        </div>
    );
};

export default MobileProjects;