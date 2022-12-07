import styles from '../styles/components/FeaturedWork.module.css';
import { Link } from 'react-router-dom';
import GithubImg from '../assets/github.svg'; 

const FeaturedWork = ({ image, workTitle, workDescription, technologies, isNotFlipped, isSmallImage, githubLink }) => {
    return (
        <div className={ isNotFlipped ? styles["container"] : styles["flipped-container"] }>
            <div className={ isNotFlipped ? styles["text-container"] : styles["text-container-flipped"]}>
                <h3 className={styles["work-title"]}>
                    {workTitle}
                </h3>
                <p className={styles["work-description"]}>
                    {workDescription}
                </p>
                <p className={styles["technologies-description"]}>
                    {technologies}
                </p>
                <a href={githubLink} target="_blank">
                    <img src={GithubImg} alt="Github Icon" />
                </a>
            </div>
            <div className={styles["image-container"]}>
                <Link to="/">
                    <div className={ isSmallImage ? styles["small-layer"] : styles["large-layer"]}></div>
                </Link>
                <img 
                    src={image} 
                    alt={workTitle} 
                    className={ isSmallImage ? styles["small-work-image"] : styles["large-work-image"]} 
                />
            </div>
        </div>
    );
}

export default FeaturedWork;