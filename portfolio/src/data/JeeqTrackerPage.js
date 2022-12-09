import BuyImg from '../assets/JeeqTrackerImages/buy.jpg';
import HomeImg from '../assets/JeeqTrackerImages/home.jpg';
import RemarkImg from '../assets/JeeqTrackerImages/remark.jpg';
import ViewImg from '../assets/JeeqTrackerImages/view.jpg';

// The order matters!
const windowImages = [
    BuyImg,
    HomeImg,
    RemarkImg,
    ViewImg
];

const workTitle = "JeeqTracker Desktop Application";

const siteLink = "https://ay2223s1-cs2103t-t09-1.github.io/tp/";

const codeLink = "https://github.com/AY2223S1-CS2103T-T09-1/tp";

const description = `
    In a team of 5, we created this application to provide an extremely fast and simple way
    for home-based business owners / resellers to keep track of their clients, transactions, 
    and remarks compared to existing applications today such as Microsoft Excel.
`;

const learningPoints = [
    "Making use of an issue tracker &#40;Github Issues&#41; to assign tasks so that everyone in the team knows what to do and when to finish it",
    "Using Github milestones for major accomplishments, to mark the end of a project iteration",
    "Understanding the existence of code design patterns and applying them, such as the Facade pattern and Command pattern to improve code quality",
    "The process of fixing merge conflicts efficiently, and the importance of early and frequent integration to reduce them",
    "JUnit5 to run unit tests and integration tests for code that we have written, and using a code coverage tool to safeguard our application from bugs",
    "Structuring pull requests and Git commit messages properly"
];

export const jeeqtrackerDetails = {
    workTitle,
    siteLink,
    codeLink,
    description,
    learningPoints,
    windowImages
};