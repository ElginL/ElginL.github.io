import styles from '../styles/components/AboutMe.module.css';
import "aos/dist/aos.css";
import { technologies } from '../data/TechStack';

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
                            <div className={styles["tech-container"]} key={index}>
                                <img src={technology["image"]} alt={technology["label"]} />
                                <p>
                                    {technology["label"]}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutMe;