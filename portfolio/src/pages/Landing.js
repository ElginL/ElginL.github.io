import AboutMe from '../components/AboutMe';
import SelfIntroduction from '../components/SelfIntroduction';
import styles from '../styles/pages/Landing.module.css';

const Landing = () => {
    return (
        <div className={styles["container"]}>
            <SelfIntroduction />
            <AboutMe />
        </div>
    )
}

export default Landing;