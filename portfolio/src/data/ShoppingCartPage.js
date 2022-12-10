import HomeImg from '../assets/ShoppingCartImages/home.jpg';
import ShopImg from '../assets/shop.png';

// The order matters!
const windowImages = [
    HomeImg,
    ShopImg
];

const workTitle = "Shopping Cart Website";

const description = `
    A frontend mimic of an e-commerce website with a shopping cart, with mobile view.
`;

const learningPoints = [
    "Responsive web design, the use of media queries to cater for mobile users",
    "Modals and transitions to improve user experience",
    "Capitalising components for code reuse in ReactJS",
    "Using hooks for React state handling",
    "React routers to navigate between pages"
];

export const shoppingCartDetails = {
    workTitle,
    description,
    learningPoints,
    windowImages
};