import AddFriendImg from '../assets/SplinktyImages/AddFriend.jpg';
import DragDropImg from '../assets/SplinktyImages/DragDrop.jpg';
import FriendListImg from '../assets/SplinktyImages/FriendList.jpg';
import FriendRequestsImg from '../assets/SplinktyImages/FriendRequests.jpg';
import HomeImg from '../assets/SplinktyImages/Home.jpg';
import LoginImg from '../assets/SplinktyImages/Login.jpg';
import PaymentHistoryImg from '../assets/SplinktyImages/PaymentHistory.jpg';
import ProfileImg from '../assets/SplinktyImages/Profile.jpg';
import ScanningResultsImg from '../assets/SplinktyImages/ScanningResults.jpg';
import SplitMembersImg from '../assets/SplinktyImages/SplitMembers.jpg';
import SplitSummaryImg from '../assets/SplinktyImages/SplitSummary.jpg';

// The order matters!
const windowImages = [
    LoginImg,
    HomeImg,
    FriendListImg,
    FriendRequestsImg,
    AddFriendImg,
    ScanningResultsImg,
    SplitMembersImg,
    SplitSummaryImg,
    DragDropImg,
    ProfileImg,
    PaymentHistoryImg,
];

const workTitle = "Splinkty Mobile Application";

const description = `
    In a team of 2, we created this application to reduce the hassle of bill splitting among friends. 
    We believe that bill splitting should not take away time from social gatherings, 
    and should not be something that the payer have to worry about.
`;

const learningPoints = [
    "Working with one another with Git and Github, making use of its pull request and code review mechanisms",
    "The usage of Redux Architecture to maintain global state when multiple components uses the same state",
    "Functionalites provided by Firebase such as 'Firebase Authentication', 'Firestore', 'Storage', 'Cloud Functions'",
    "Navigating through documentations efficiently after spending a lot of time within the Google Cloud Platform",
    "Working with external API to build the receipt scanning software",
    "Structuring React Native projects into different modules for simple retrieval and storing"
];

export const splinktyDetails = {
    workTitle,
    description,
    learningPoints,
    windowImages
};