import styles from '../styles/components/Experiences.module.css';
import "aos/dist/aos.css";
import IlluminaImg from "../assets/Experiences/illumina.png";
import TitansoftImg from "../assets/Experiences/titansoft.png";

const Experiences = () => {
    return (
        <div id="experiences" className={styles["container"]}>
            <h1 className={styles["experiences-header"]} data-aos="fade-up">
                Experience
            </h1>
            <div className={styles["company-list-container"]}>
                <div className={styles["company-container"]}>
                    <img className={styles["company-image"]} src={IlluminaImg} />
                    <div className={styles["description-container"]}>
                        <h2>Software Development Intern</h2>
                        <p className={styles["experience-description"]}>
                            During this 6 months internship, I had the opportunity to join a multinational
                            team that is working on the software of sequencing instruments. I actively participated in
                            every agile lifecycle, and made many meaningful contributions that enhanced my understanding of
                            microservices, identity management, push notification system, CI/CD and software testing.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["company-list-container"]}>
                <div className={styles["company-container"]}>
                    <img className={styles["company-image"]} src={TitansoftImg} />
                    <div className={styles["description-container"]}>
                        <h2>Software Developer Intern</h2>
                        <p className={styles["experience-description"]}>
                            During this 3 months internship, I collaborated with three other interns and two mentors to build a greenfield cache service 
                            that successfully increased the company's database read capacity by 4 times. We worked well together and spent the
                            remaining time fortifying the company's feature toggle website. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;