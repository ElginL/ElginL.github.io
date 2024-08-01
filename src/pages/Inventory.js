import NavigationBar from "../components/NavigationBar";
import BackButton from "../components/BackButton";
import styles from "../styles/pages/Inventory.module.css";
import PugImg from "../assets/TechLogos/pug.svg";
import ExpressImg from "../assets/TechLogos/express.svg";
import MongoDbImg from "../assets/TechLogos/mongodb.svg";
import CssImg from "../assets/TechLogos/css.svg";
import InventoryImg from "../assets/InventoryImages/inventory.png";
import CategoriesImg from "../assets/InventoryImages/categories.png";
import EditImg from "../assets/InventoryImages/edit.png";
import NodeJsImg from "../assets/TechLogos/nodejs.svg";
import ProjectCarousel from "../components/ProjectCarousel";
import LinkToGithub from "../components/LinkToGithub";

const Inventory = () => {
    const carouselImages = [InventoryImg, CategoriesImg, EditImg];
    
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Farmer's Inventory
                </h2>
                <p>
                    A fullstack web application built for farmers to keep track of their inventory and prioritise
                    what they grow.
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={PugImg} alt="pug" />
                            <p>Pug</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={ExpressImg} alt="express" />
                            <p>Express</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={NodeJsImg} alt="nodejs" />
                            <p>NodeJS</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={MongoDbImg} alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={CssImg} alt="css" />
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <ProjectCarousel images={carouselImages} />
                <LinkToGithub url="https://github.com/ElginL/odin-inventory" />
            </div>
        </div>
    );
};

export default Inventory;