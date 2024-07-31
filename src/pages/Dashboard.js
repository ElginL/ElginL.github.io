import styles from '../styles/pages/Dashboard.module.css';
import BackButton from '../components/BackButton';
import NavigationBar from '../components/NavigationBar';
import HtmlImage from '../assets/TechLogos/html.svg';
import CssImage from '../assets/TechLogos/css.svg';
import JavasriptImage from '../assets/TechLogos/javascript.svg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GithubImg from '../assets/TechLogos/github.svg';

const Dashboard = () => {
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Dashboard
                </h2>
                <p>
                    A simple frontend page with responsive web design, that has several links to
                    other mini projects I built while learning HTML, CSS, and vanilla Javascript.<br/>
                    Be sure to check those out!
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={HtmlImage} />
                            <p>HTML</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={CssImage} />
                            <p>CSS</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={JavasriptImage} />
                            <p>Javascript</p>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="https://elginl.github.io/odin-dashboard/" className={styles["link-to-project"]} target="_blank">
                        <p>
                            <strong>Open project</strong>
                        </p>
                        <div className={styles["arrow-container"]}>
                            <ArrowRightAltIcon 
                                className={styles["first-right-arrow"]}
                            />
                            <ArrowRightAltIcon 
                                className={styles["second-right-arrow"]}
                            />
                        </div>
                    </a>
                    <a href="https://github.com/ElginL/odin-dashboard" className={styles["link-to-project"]} target="_blank">
                        <p>
                            <strong>Github Repository</strong>
                        </p>
                        <img src={GithubImg} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;