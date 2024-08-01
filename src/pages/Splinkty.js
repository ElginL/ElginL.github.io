import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import styles from '../styles/pages/Splinkty.module.css';
import ReactNativeImg from '../assets/TechLogos/react-native.svg';
import FirebaseImg from '../assets/TechLogos/firebase.svg';
import AddFriendImg from '../assets/SplinktyImages/AddFriend.jpg';
import DragDropImg from '../assets/SplinktyImages/DragDrop.jpg';
import FriendListImg from '../assets/SplinktyImages/FriendList.jpg';
import HomeImg from '../assets/SplinktyImages/Home.jpg';
import LoginImg from '../assets/SplinktyImages/Login.jpg';
import PaymentHistoryImg from '../assets/SplinktyImages/PaymentHistory.jpg';
import ProfileImg from '../assets/SplinktyImages/Profile.jpg';
import ScanningResultsImg from '../assets/SplinktyImages/ScanningResults.jpg';
import SplitMembersImg from '../assets/SplinktyImages/SplitMembers.jpg';
import SplitSummaryImg from '../assets/SplinktyImages/SplitSummary.jpg';
import ProjectCarousel from "../components/ProjectCarousel";
import GithubImg from '../assets/TechLogos/github.svg';

const Splinkty = () => {
    const carouselImages = [
        LoginImg,
        HomeImg,
        ScanningResultsImg,
        SplitMembersImg,
        DragDropImg,
        SplitSummaryImg,
        ProfileImg,
        PaymentHistoryImg,
        FriendListImg,
        AddFriendImg
    ];

    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Splinkty
                </h2>
                <p>
                    A mobile application developed to simplify bill splitting, and keep track of transactions among friends
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={ReactNativeImg} alt="react native" />
                            <p>React Native</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={FirebaseImg} alt="firebase" />
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
                <ProjectCarousel images={carouselImages} carouselWidth="31%" />
                <div>
                    <a href="https://github.com/ElginL/orbital-splinkty" className={styles["link-to-project"]} target="_blank">
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

export default Splinkty;