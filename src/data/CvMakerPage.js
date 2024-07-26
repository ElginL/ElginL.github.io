import HomeImg from '../assets/cv.png';
import CvFilledImg from '../assets/CvMakerImages/CvMaker.jpg';

// The order matters!
const windowImages = [
    HomeImg,
    CvFilledImg
];

const workTitle = "CV Maker";

const description = `
    A web application that helps to create a basic CV, simply by filling up a form. There is a live update as you type!
`;

const learningPoints = [
    "ReactJS props passing into components",
    "React state management using hooks",
    "Image upload mechanism with HTML"
];

export const cvMakerDetails = {
    workTitle,
    description,
    learningPoints,
    windowImages
};