import styles from '../styles/components/Portfolio.module.css';
import FeaturedWork from '../components/FeaturedWork';
import SplinktyImg from '../assets/splinkty.jpg';
import JeeqTrackerImg from '../assets/tp.png';
import DukeImg from '../assets/ip.png';
import ShopImg from '../assets/shop.png';
import DashboardImg from '../assets/dashboard.jpg';
import CvImg from '../assets/cv.png';
import BlogImg from '../assets/blog.png';
import InventoryImg from '../assets/inventory.png';

const Portfolio = () => {
    return (
        <div id="portfolio" className={styles["container"]}>
            <h1 className={styles["portfolio-header"]}>
                Portfolio
            </h1>
            <h2 className={styles["featured-header"]}>
                Featured work
            </h2>
            <div className={styles["projects-container"]}>
                <FeaturedWork 
                    image={SplinktyImg} 
                    workTitle="Splinkty"
                    workDescription="Mobile application that simplifies bill splitting with the help of a receipt scanning software"
                    technologies="React Native, Redux, Firebase, Google Vision"
                    isNotFlipped={true}
                    isSmallImage={true}
                    githubLink="https://github.com/ElginL/orbital-splinkty"
                />
                <FeaturedWork 
                    image={JeeqTrackerImg} 
                    workTitle="JeeqTracker"
                    workDescription="Desktop application that provides an extremly fast and simple way for home-based business owners to keep track of their clients, transactions, and remarks"
                    technologies="Java, JavaFX, JUnit5"
                    githubLink="https://github.com/ElginL/tp"
                />
                <FeaturedWork 
                    image={DukeImg} 
                    workTitle="Personal Chatbot"
                    workDescription="Desktop chatbot that keeps track of your daily needs (tasks, events, deadlines, and loans)"
                    technologies="Java, JavaFX, JUnit5"
                    isNotFlipped={true}
                    isSmallImage={true}
                    githubLink="https://github.com/ElginL/ip"
                />
                <FeaturedWork 
                    image={ShopImg} 
                    workTitle="Shopping Cart"
                    workDescription="A frontend mimic of an e-commerce website with functionalities to add / remove items from cart"
                    technologies="ReactJS, JavaScript, CSS"
                    githubLink="https://github.com/ElginL/odin-shopping-cart"
                />
                <FeaturedWork 
                    image={DashboardImg} 
                    workTitle="Project Dashboard"
                    workDescription="A dashboard that showcases more mini web projects created by me, as I was learning about web development"
                    technologies="HTML, CSS"
                    isNotFlipped={true}
                    githubLink="https://github.com/ElginL/odin-dashboard"
                />
                <FeaturedWork 
                    image={CvImg} 
                    workTitle="CV Maker"
                    workDescription="A website that helps build CV. Extremely fast and simple as all that needs to be done is filling up a form"
                    technologies="ReactJS, CSS"
                    githubLink="https://github.com/ElginL/odin-create-cv-app"
                />
                <FeaturedWork 
                    image={BlogImg} 
                    workTitle="Blog"
                    workDescription="Two separate websites created, one for viewing my blogs, and the other for editing my blogs. For the latter, authentication with username and password is required."
                    technologies="ReactJS, Express, MongoDB, NodeJS"
                    isNotFlipped={true}
                    githubLink="https://github.com/ElginL/odin-blog-api"
                />
                <FeaturedWork 
                    image={InventoryImg} 
                    workTitle="Food Inventory Tracker"
                    workDescription="A website that helps food-based businesses keep track of their inventory, giving warnings when stock count is low"
                    technologies="Pug, Express, MongoDB, NodeJS"
                    githubLink="https://github.com/ElginL/odin-inventory"
                />
            </div>
        </div>
    )
}

export default Portfolio;