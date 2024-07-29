import styles from '../styles/pages/IlluminaExperience.module.css';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';

const IlluminaExperience = () => {
    return (
        <div className={styles["container"]}>
            <NavigationBar />
            <BackButton />
            hello!
        </div>
    )
}

export default IlluminaExperience; 