import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import styles from '../styles/pages/ShoppingCart.module.css';
import ReactImg from '../assets/TechLogos/react.svg';
import CssImg from '../assets/TechLogos/css.svg';
import GithubImg from '../assets/TechLogos/github.svg';
import OpenProjectButton from '../components/OpenProjectButton';

const ShoppingCart = () => {
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Shopping Cart
                </h2>
                <p>
                    Simple frontend project with responsive web design that mimics an e-commerce shopping cart
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={ReactImg} alt="react" />
                            <p>React</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={CssImg} alt="css" />
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <OpenProjectButton url="https://elginl.github.io/odin-shopping-cart/" />
                    <a href="https://github.com/ElginL/odin-shopping-cart" className={styles["link-to-project"]} target="_blank">
                        <p>
                            <strong>Github Repository</strong>
                        </p>
                        <img src={GithubImg} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;