import styles from '../styles/pages/Dashboard.module.css';
import BackButton from '../components/BackButton';
import NavigationBar from '../components/NavigationBar';
import HtmlImage from '../assets/TechLogos/html.svg';
import CssImage from '../assets/TechLogos/css.svg';
import JavasriptImage from '../assets/TechLogos/javascript.svg';
import OpenProjectButton from '../components/OpenProjectButton';
import LinkToGithub from '../components/LinkToGithub';
import TechDisplay from '../components/TechDisplay';

const Dashboard = () => {
    const techStack = [
        { image: HtmlImage, label: "HTML" },
        { image: CssImage, label: "CSS" },
        { image: JavasriptImage, label: "Javascript" }
    ]

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
                        {
                            techStack.map((tech, index) => (
                                <TechDisplay
                                    key={index}
                                    image={tech["image"]}
                                    label={tech["label"]}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <OpenProjectButton url="https://elginl.github.io/odin-dashboard/" />
                    <LinkToGithub url="https://github.com/ElginL/odin-dashboard" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;