import styles from '../styles/components/AboutMe.module.css';
import "aos/dist/aos.css";
import { technologies } from '../data/TechStack';
import TechDisplay from './TechDisplay';

const AboutMe = () => {
    return (
        <div id="about-me" className={styles["container"]}>
            <h1 className={styles["about-header"]} data-aos="fade-up">
                About
            </h1>
            <div className={styles["text-container"]} data-aos="fade-up">
                I am a final year computer science undergraduate at National University of Singapore (NUS).
                I enjoy solving real world problems and software development, and seek to continously upskill by
                doing internships, personal projects, taking on courses and reading extensively.
            </div>
            <div className={styles["tech-stack-container"]} data-aos="fade-up">
                <h3>
                    Here are the few technologies I have worked with
                </h3>
                <div className={styles["tech-images-container"]}>
                    {
                        technologies.map((technology, index) => (
                            <TechDisplay 
                                key={index} 
                                image={technology["image"]} 
                                label={technology["label"]} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutMe;