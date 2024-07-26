import BuyImg from '../assets/JeeqTrackerImages/buy.jpg';
import HomeImg from '../assets/JeeqTrackerImages/home.jpg';
import RemarkImg from '../assets/JeeqTrackerImages/remark.jpg';
import ViewImg from '../assets/JeeqTrackerImages/view.jpg';

// The order matters!
const windowImages = [
    HomeImg,
    ViewImg,
    BuyImg,
    RemarkImg,
];

const workTitle = "JeeqTracker Desktop Application";

const description = `
    In a team of 5, we created this application to provide an extremely fast and simple way
    for home-based business owners / resellers to keep track of their clients, transactions, 
    and remarks compared to existing applications today such as Microsoft Excel.
`;

const learningPoints = [
    "Making use of an issue tracker (Github Issues) to assign tasks so that everyone in the team knows what to do and when to finish it",
    "Using Github milestones for major accomplishments, to mark the end of a project iteration",
    "Understanding the existence of code design patterns and applying them, such as the Facade pattern and Command pattern to improve code quality",
    "The process of fixing merge conflicts efficiently, and the importance of early and frequent integration to reduce them",
    "JUnit5 to run unit tests and integration tests for code that we have written, and using a code coverage tool to safeguard our application from bugs",
    "Structuring pull requests and Git commit messages properly"
];

export const jeeqtrackerDetails = {
    workTitle,
    description,
    learningPoints,
    windowImages
};