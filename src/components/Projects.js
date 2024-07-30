import React, { useState } from 'react';
import styles from '../styles/components/Projects.module.css';
import "aos/dist/aos.css";
import MobileProjects from '../components/MobileProjects';
import WebProjects from '../components/WebProjects';

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState("web")

    return (
        <div id="projects" className={styles["container"]}>
            <h1 className={styles["projects-header"]} data-aos="fade-up">
                Projects
            </h1>
            <div className={styles["filter-container"]} data-aos="fade-up">
                <b>Filter by</b>
                <div className={styles["buttons-container"]}>
                    <button 
                        onClick={() => setSelectedFilter("web")}
                        style={{ color: selectedFilter == "web" ? '#54d8ef' : 'white' }}
                    >
                        Web
                    </button>
                    <span> / </span>
                    <button 
                        onClick={() => setSelectedFilter("mobile")}
                        style={{ color: selectedFilter == "mobile" ? "#54d8ef" : 'white' }}
                    >
                        Mobile
                    </button>
                </div>
            </div>
            {
                selectedFilter == 'web'
                    ? <WebProjects />
                    : <MobileProjects />
            }
        </div>
    )
}

export default Projects;