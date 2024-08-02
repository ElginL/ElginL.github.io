import styles from '../styles/components/OpenProjectButton.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const OpenProjectButton = ({ url }) => {
    return (
        <a href={url} className={styles["link-to-project"]} target="_blank" rel="noreferrer">
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
    );
};

export default OpenProjectButton;