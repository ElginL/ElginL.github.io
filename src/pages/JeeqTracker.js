import styles from "../styles/pages/JeeqTracker.module.css";
import NavigationBar from "../components/NavigationBar";
import BackButton from "../components/BackButton";
import ProjectCarousel from "../components/ProjectCarousel";
import JavaImage from "../assets/TechLogos/java.svg";
import HomeImage from "../assets/JeeqTrackerImages/home.jpg";
import ViewImage from "../assets/JeeqTrackerImages/view.jpg";
import BuyImage from "../assets/JeeqTrackerImages/buy.jpg";
import RemarkImage from "../assets/JeeqTrackerImages/remark.jpg";
import LinkToGithub from "../components/LinkToGithub";

const JeeqTracker = () => {
    const carouselImages = [
        HomeImage,
        ViewImage,
        BuyImage,
        RemarkImage,
    ];

    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    JeeqTracker
                </h2>
                <p>
                    JeeqTracker is a desktop application for home based business owners to keep track of transactions, built with Java and JavaFX.
                    It is done is a group of 5, following OOP principles and high test coverage.
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
                <ProjectCarousel images={carouselImages} />
                <LinkToGithub url="https://github.com/ElginL/tp" />
            </div>
        </div>
    );
};

export default JeeqTracker;