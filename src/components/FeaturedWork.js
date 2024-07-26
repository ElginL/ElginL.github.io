import "aos/dist/aos.css";
import styles from '../styles/components/FeaturedWork.module.css';
import { Link } from 'react-router-dom';
import GithubImg from '../assets/github.svg'; 
import DocumentationImg from '../assets/documentation.svg';
import WebsiteImg from '../assets/website.svg';

const FeaturedWork = ({ 
    image, 
    workTitle, 
    workDescription, 
    technologies, 
    isNotFlipped, 
    isSmallImage, 
    githubLink, 
    detailedPageLink,
    documentationLink,
    websiteLink
}) => {
    return (
        <div className={ isNotFlipped ? styles["container"] : styles["flipped-container"] } data-aos="fade-up">
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
                <div className={ isNotFlipped ? styles["links"] : styles["flipped-links"] }>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <img src={GithubImg} alt="Github Icon" />
                    </a>
                    {
                        documentationLink
                            ? (
                                <a href={documentationLink} target="_blank" rel="noreferrer">
                                    <img src={DocumentationImg} alt="Documentation Icon" />
                                </a>
                            )
                            : null
                    }
                    {
                        websiteLink
                            ? (
                                <a href={websiteLink} target="_blank" rel="noreferrer">
                                    <img src={WebsiteImg} alt="Website Icon" />
                                </a>
                            )
                            : null
                    }
                </div>
            </div>
            <div className={styles["image-container"]}>
                <Link to={detailedPageLink}>
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