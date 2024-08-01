import styles from '../styles/components/DesktopProjects.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DukeImg from "../assets/DukeImages/ip.png";
import JeeqTrackerImg from "../assets/JeeqTrackerImages/tp.png";

const DesktopProjects = () => {
    return (
        <div className={styles["container"]}>
            <Link to="/duke">
                <div className={styles["project-container"]}>
                    <div className={styles["image-container"]}>
                        <img className={`${styles["project-image"]} ${styles["duke-image"]}`} src={DukeImg} alt="duke" />
                    </div>
                    <div className={styles["bottom-container"]}>
                        <h3>Duke</h3>
                        <div className={styles["description-container"]}>
                            <p>Personal Desktop Assistant</p>
                            <DoubleArrowIcon className={styles["go-arrow"]} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/jeeqtracker">
                <div className={styles["project-container"]}>
                    <div className={styles["image-container"]}>
                        <img className={styles["project-image"]} src={JeeqTrackerImg} alt="jeeqtracker" />
                    </div>
                    <div className={styles["bottom-container"]}>
                        <h3>JeeqTracker</h3>
                        <div className={styles["description-container"]}>
                            <p>Home-based business owner assistant</p>
                            <DoubleArrowIcon className={styles["go-arrow"]} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DesktopProjects;