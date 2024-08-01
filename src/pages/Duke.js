import styles from "../styles/pages/Duke.module.css";
import NavigationBar from "../components/NavigationBar";
import BackButton from "../components/BackButton";
import ProjectCarousel from "../components/ProjectCarousel";
import JavaImage from "../assets/TechLogos/java.svg";
import HomeImage from "../assets/DukeImages/home.jpg";
import TodoImage from "../assets/DukeImages/todo.jpg";
import EventImage from "../assets/DukeImages/event.jpg";
import DeadlineImage from "../assets/DukeImages/deadline.jpg";
import ListImage from "../assets/DukeImages/list.jpg";
import MarkImage from "../assets/DukeImages/mark.jpg";
import UnmarkImage from "../assets/DukeImages/unmark.jpg";
import LoanbookAddImage from "../assets/DukeImages/loanbookAdd.jpg";
import LoanbookListImage from "../assets/DukeImages/loanbookList.jpg";
import GithubImg from "../assets/TechLogos/github.svg";

const Duke = () => {
    const carouselImages = [
        HomeImage,
        TodoImage,
        EventImage,
        DeadlineImage,
        ListImage,
        MarkImage,
        UnmarkImage,
        LoanbookAddImage,
        LoanbookListImage
    ];

    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Duke
                </h2>
                <p>
                    Duke is a personal desktop assistant that helps to keep track of tasks and loans, built with Java and JavaFX.
                    It has robust test cases written in JUnit5.
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={JavaImage} alt="java" />
                            <p>Java</p>
                        </div>
                    </div>
                </div>
                <ProjectCarousel images={carouselImages} carouselWidth="300px" />
                <div>
                    <a href="https://github.com/ElginL/ip" className={styles["link-to-project"]} target="_blank" rel="noreferrer">
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

export default Duke;