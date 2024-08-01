import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import styles from '../styles/pages/ShoppingCart.module.css';
import ReactImg from '../assets/TechLogos/react.svg';
import CssImg from '../assets/TechLogos/css.svg';
import OpenProjectButton from '../components/OpenProjectButton';
import LinkToGithub from '../components/LinkToGithub';
import TechDisplay from '../components/TechDisplay';

const ShoppingCart = () => {
    const techStack = [
        { image: ReactImg, label: "React" },
        { image: CssImg, label: "CSS" }
    ]

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
                        {
                            techStack.map((tech, index) => (
                                <TechDisplay
                                    key={index}
                                    image={tech["image"]}
                                    label={tech["label"]}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <OpenProjectButton url="https://elginl.github.io/odin-shopping-cart/" />
                    <LinkToGithub url="https://github.com/ElginL/odin-shopping-cart" />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;