import styles from '../styles/components/SelfIntroduction.module.css';
import portrait from '../assets/portrait.svg';

const SelfIntroduction = () => {
    return (
        <div className={styles["background-img"]}>
            <div className={styles["content-container"]}>
                <div className={styles["left-container"]}>
                    <h1 className={styles["name"]}>
                        Elgin Lee
                    </h1>
                    <h3 className={styles["role"]}>
                        Aspiring Full Stack Software Developer
                    </h3>
                    <p className={styles["text"]}>
                        Year 2 Computer Science Student
                    </p>
                    <p className={styles["text"]}>
                        National University Of Singapore
                    </p>
                    <a href="#" className={styles["view-button"]}>
                        View My Work
                    </a>
                </div>
                <img src={portrait} alt="Personal Portrait" />
            </div>
        </div>
    )
}

export default SelfIntroduction;