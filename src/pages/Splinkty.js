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
import LinkToGithub from '../components/LinkToGithub';
import TechDisplay from '../components/TechDisplay';

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

    const techStack = [
        { image: ReactNativeImg, label: "React Native" },
        { image: FirebaseImg, label: "Firebase" }
    ]

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
                <ProjectCarousel images={carouselImages} carouselWidth="300px" />
                <LinkToGithub url="https://github.com/ElginL/orbital-splinkty" />
            </div>
        </div>
    );
};

export default Splinkty;