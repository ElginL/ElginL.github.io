import styles from '../styles/components/WebProjects.module.css';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { projectDetails } from '../data/WebProjects';
import { HashLink as Link } from 'react-router-hash-link';

const WebProjects = () => {
    return (
        <div className={styles["container"]}>
            {
                projectDetails.map((projectDetail, index) => (
                    <Link key={index}>
                        <div className={styles["project-container"]}>
                            <div className={styles["image-container"]}>
                                <img className={styles["project-image"]} src={projectDetail["displayImage"]} alt={projectDetail["title"]} />
                            </div>
                            <div className={styles["bottom-container"]}>
                                <h3>{projectDetail["title"]}</h3>
                                <div className={styles["description-container"]}>
                                    <p>{projectDetail["description"]}</p>
                                    <DoubleArrowIcon className={styles["go-arrow"]} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default WebProjects;