import SplinktyImg from '../assets/splinkty.jpg';
import JeeqTrackerImg from '../assets/tp.png';
import DukeImg from '../assets/ip.png';
import ShopImg from '../assets/shop.png';
import DashboardImg from '../assets/dashboard.jpg';
import CvImg from '../assets/cv.png';
import BlogImg from '../assets/blog.png';
import InventoryImg from '../assets/inventory.png';

/**
 * This is where all data in the portfolio section exists, and is exported to render in the page.
 * Update here if you want to update the content!
 */
const splinkty = {
    image: SplinktyImg,
    workTitle: "Splinkty",
    workDescription: "Mobile application that simplifies bill splitting with the help of a receipt scanning software",
    technologies: "React Native, Redux, Firebase, Google Vision",
    isSmallImage: true,
    githubLink: "https://github.com/ElginL/orbital-splinkty",
    documentationLink: "https://docs.google.com/document/d/1wxOJXFmzOhmPIT4zsi2D_0AZhgbU9UTf-Zc0Z872Vlo/edit?usp=sharing",
    pathToDetailedPage: "/splinkty"
};

const jeeqTracker = {
    image: JeeqTrackerImg,
    workTitle: "JeeqTracker",
    workDescription: "Desktop application that provides an extremely fast and simple way for home-based business owners to keep track of their clients, transactions, and remarks",
    technologies: "Java, JavaFX, JUnit5",
    isSmallImage: false,
    githubLink: "https://github.com/ElginL/tp",
    documentationLink: "https://ay2223s1-cs2103t-t09-1.github.io/tp/",
    pathToDetailedPage: "/jeeqtracker"
};

const duke = {
    image: DukeImg, 
    workTitle: "Personal Chatbot",
    workDescription: "Desktop chatbot that keeps track of your daily needs (tasks, events, deadlines, and loans)",
    technologies: "Java, JavaFX, JUnit5",
    isSmallImage: true,
    githubLink: "https://github.com/ElginL/ip",
    documentationLink: "https://elginl.github.io/ip/",
    pathToDetailedPage: "/duke"
};

const shoppingCart = {
    image: ShopImg,
    workTitle: "Shopping Cart",
    workDescription: "A frontend mimic of an e-commerce website with functionalities to add / remove items from cart",
    technologies: "ReactJS, JavaScript, CSS",
    isSmallImage: false,
    githubLink: "https://github.com/ElginL/odin-shopping-cart",
    websiteLink: "https://elginl.github.io/odin-shopping-cart/",
    pathToDetailedPage: "/shoppingcart"
};

const dashboard = {
    image: DashboardImg,
    workTitle: "Project Dashboard",
    workDescription: "A dashboard that showcases more mini web projects created by me, as I was learning about web development",
    technologies: "HTML, CSS",
    isSmallImage: false,
    githubLink: "https://github.com/ElginL/odin-dashboard",
    websiteLink: "https://elginl.github.io/odin-dashboard/",
    pathToDetailedPage: "/dashboard"
};

const cvMaker = {
    image: CvImg, 
    workTitle: "CV Maker",
    workDescription: "A website that helps build CV. Extremely fast and simple as all that needs to be done is filling up a form",
    technologies: "ReactJS, CSS",
    isSmallImage: false,
    githubLink: "https://github.com/ElginL/odin-create-cv-app",
    websiteLink: "https://elginl.github.io/odin-create-cv-app/",
    pathToDetailedPage: "/cvmaker"
};

const blog = {
    image: BlogImg, 
    workTitle: "Blog",
    workDescription: "Two separate websites created, one for viewing my blogs, and the other for editing my blogs. For the latter, authentication with username and password is required.",
    technologies: "ReactJS, Express, MongoDB, NodeJS",
    isSmallImage: false,
    githubLink: "https://github.com/ElginL/odin-blog-api",
    pathToDetailedPage: "/blog"
};

const inventory = {
    image: InventoryImg,
    workTitle: "Food Inventory Tracker",
    workDescription: "A website that helps food-based businesses keep track of their inventory, giving warnings when stock count is low",
    technologies: "Pug, Express, MongoDB, NodeJS",
    githubLink: "https://github.com/ElginL/odin-inventory",
    pathToDetailedPage: "/inventory"
};

export const projectData = [
    splinkty,
    jeeqTracker,
    duke,
    shoppingCart,
    dashboard,
    cvMaker,
    blog,
    inventory
];
