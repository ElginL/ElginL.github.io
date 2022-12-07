import AboutMe from '../components/AboutMe';
import SelfIntroduction from '../components/SelfIntroduction';
import styles from '../styles/pages/Landing.module.css';
import Portfolio from '../components/Portfolio';

const Landing = () => {
    return (
        <div className={styles["container"]}>
            <SelfIntroduction />
            <AboutMe />
            <Portfolio />
        </div>
    )
}

export default Landing;