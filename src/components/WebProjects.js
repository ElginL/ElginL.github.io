import styles from '../styles/components/WebProjects.module.css';
import DashboardImg from '../assets/dashboard.jpg';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { HashLink as Link } from 'react-router-hash-link';

const WebProjects = () => {
    return (
        <div className={styles["container"]}>
            <Link>
                <div className={styles["project-container"]}>
                    <div className={styles["image-container"]}>
                        <img className={styles["project-image"]} src={DashboardImg} alt="dashboard" />
                    </div>
                    <div className={styles["bottom-container"]}>
                        <h3>Dashboard</h3>
                        <div className={styles["description-container"]}>
                            <p>Frontend project</p>
                            <DoubleArrowIcon className={styles["go-arrow"]} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default WebProjects;