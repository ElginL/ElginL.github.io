import styles from '../styles/pages/Splinkty.module.css';
import SlidingWindow from '../components/SlidingWindow';
import { SplinktyWindowImages } from '../data/SplinktyPage';
import NavigationBar from '../components/NavigationBar';

const Splinkty = () => {
    return (
        <div className={styles["container"]}>
            <NavigationBar />
            <SlidingWindow 
                title="Splinkty Mobile Application" 
                images={SplinktyWindowImages}
                siteLink="https://github.com/ElginL/orbital-splinkty/releases/tag/v1.2.0"
                codeLink="https://github.com/ElginL/orbital-splinkty"
            />
            <div className={styles["content-container"]}>
                <h2>Description</h2>
                <p>
                    In a team of 2, we created this application to reduce the hassle of bill splitting among friends. 
                    We believe that bill splitting should not take away time from social gatherings, and should not be something that the payer have to worry about.
                </p>
                <h2>Key Learning Points</h2>
                <ul>
                    <li>
                        Working with one another with Git and Github, making use of its pull request and code review mechanisms
                    </li>
                    <li>
                        The usage of Redux Architecture to maintain global state when multiple components uses the same state
                    </li>
                    <li>
                        Functionalites provided by Firebase such as "Firebase Authentication", "Firestore", "Storage", "Cloud Functions"
                    </li>
                    <li>
                        Navigating through documentations efficiently after spending a lot of time within the Google Cloud Platform 
                    </li>
                    <li>
                        Working with external API to build the receipt scanning software
                    </li>
                    <li>
                        Structuring React Native projects into different modules for simple retrieval and storing
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Splinkty;