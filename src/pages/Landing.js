import AboutMe from '../components/AboutMe';
import SelfIntroduction from '../components/SelfIntroduction';
import styles from '../styles/pages/Landing.module.css';
import Portfolio from '../components/Portfolio';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Experiences from '../components/Experiences';

const Landing = () => {
    return (
        <div className={styles["container"]}>
            <NavigationBar />
            <SelfIntroduction />
            <AboutMe />
            <Experiences />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Landing;