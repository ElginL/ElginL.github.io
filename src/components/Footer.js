import styles from '../styles/components/Footer.module.css';
import LinkedinImg from '../assets/linkedin.png';
import TelegramImg from '../assets/telegram.png';
import GithubImg from '../assets/TechLogos/github.svg';

const Footer = () => {
    return (
        <div id="contact" className={styles["container"]}>
            <div className={styles["content-container"]}>
                <h2 className={styles["created-text"]}>
                    Developed By Elgin Lee
                </h2>
                <div className={styles["links"]}>
                    <a href="https://www.linkedin.com/in/elgin-lee-81145b149/" target="_blank" rel="noreferrer" className={styles["link"]}>
                        <img src={LinkedinImg} alt="LinkedIn" className={styles["contact-icon"]} />
                    </a>
                    <a href="https://t.me/ElginLee" target="_blank" rel="noreferrer" className={styles["link"]}>
                        <img src={TelegramImg} alt="Telegram" className={styles["contact-icon"]} />
                    </a>
                    <a href="https://github.com/ElginL" target="_blank" rel="noreferrer" className={styles["link"]}>
                        <img src={GithubImg} alt="Github" className={styles["contact-icon"]} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;