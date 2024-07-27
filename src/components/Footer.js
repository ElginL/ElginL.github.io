import styles from '../styles/components/Footer.module.css';
import telegramImg from '../assets/telegram.png';
import linkedinImg from '../assets/linkedin.png';
import githubImg from '../assets/TechLogos/github.svg';

const Footer = () => {
    return (
        <div id="contact" className={styles["container"]}>
            <h2 className={styles["contact-me-text"]}>
                Contact Me!
            </h2>
            <div className={styles["links"]}>
                <a href="https://www.linkedin.com/in/elgin-lee-81145b149/" target="_blank" rel="noreferrer" className={styles["link"]}>
                    <img src={linkedinImg} alt="LinkedIn" className={styles["contact-icon"]} />
                </a>
                <a href="https://t.me/ElginLee" target="_blank" rel="noreferrer" className={styles["link"]}>
                    <img src={telegramImg} alt="Telegram" className={styles["contact-icon"]} />
                </a>
                <a href="https://github.com/ElginL" target="_blank" rel="noreferrer" className={styles["link"]}>
                    <img src={githubImg} alt="Github" className={styles["contact-icon"]} />
                </a>
            </div>
            <h2 className={styles["created-text"]}>
                Created By Elgin
            </h2>
        </div>
    );
};

export default Footer;