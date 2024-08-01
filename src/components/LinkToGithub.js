import styles from '../styles/components/LinkToProject.module.css';
import GithubImg from '../assets/TechLogos/github.svg';

const LinkToGithub = ({ url }) => {
    return (
        <div>
            <a href={url} className={styles["link-to-project"]} target="_blank" rel="noreferrer">
                <p>
                    <strong>Github Repository</strong>
                </p>
                <img src={GithubImg} alt="github" />
            </a>
        </div>
    )
}

export default LinkToGithub;