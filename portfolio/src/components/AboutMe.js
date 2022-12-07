import styles from '../styles/components/AboutMe.module.css';
import "aos/dist/aos.css";
import TechStack from './TechStack';
import MyFace from '../assets/MyFace.jpg';
import HtmlImg from '../assets/html.svg';
import CssImg from '../assets/css.svg';
import JavascriptImg from '../assets/javascript.svg';
import ReactImg from '../assets/react.svg';
import ExpressImg from '../assets/express.svg';
import MongodbImg from '../assets/mongodb.svg';
import ReactNativeImg from '../assets/react-native.svg';
import FirebaseImg from '../assets/firebase.svg';
import JavaImg from '../assets/java.svg';

const AboutMe = () => {
    return (
        <div className={styles["container"]}>
            <h1 className={styles["about-header"]} data-aos="fade-up">
                About
            </h1>
            <div className={styles["content-container"]}>
                <div className={styles["text-container"]} data-aos="fade-up">
                    <h2>
                        Who am I?
                    </h2>
                    <p>
                        I'm a person with strong interest in Web Development and Mobile Development because I have a clear view of the things I have built,
                        which ignites my motivation to do much more. 
                    </p>
                    <p>
                        Today, I am looking for an internship as a Software Developer from <em>8 May 2023 to 20 Oct 2023</em> or <em>8 May 2023 to 8 July 2023</em>.
                        I hope to gain the invaluable experience of working with others and learning more things.
                    </p>
                </div>
                <div className={styles["image-container"]} data-aos="fade-up">
                    <img src={MyFace} alt="My Portrait" className={styles["my-face"]} />
                </div>
            </div>
            <div className={styles["tech-stack-container"]} data-aos="fade-up">
                <h3>
                    Here are the few technologies I have worked with recently
                </h3>
                <div className={styles["tech-images-container"]}>
                    <TechStack image={HtmlImg} label="HTML" />
                    <TechStack image={CssImg} label="CSS" />
                    <TechStack image={JavascriptImg} label="JavaScript" />
                    <TechStack image={ReactImg} label="React" />
                    <TechStack image={ExpressImg} label="Express" />
                    <TechStack image={MongodbImg} label="Mongodb" />
                    <TechStack image={ReactNativeImg} label="React Native" />
                    <TechStack image={FirebaseImg} label="Firebase" />
                    <TechStack image={JavaImg} label="Java" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;