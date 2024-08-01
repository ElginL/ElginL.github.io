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
import TechDisplay from "../components/TechDisplay";

const Inventory = () => {
    const carouselImages = [InventoryImg, CategoriesImg, EditImg];
    
    const techStack = [
        { image: PugImg, label: "Pug" },
        { image: ExpressImg, label: "Express" },
        { image: NodeJsImg, label: "NodeJS" },
        { image: MongoDbImg, label: "MongoDB" },
        { image: CssImg, label: "CSS" }
    ]

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
                <ProjectCarousel images={carouselImages} />
                <LinkToGithub url="https://github.com/ElginL/odin-inventory" />
            </div>
        </div>
    );
};

export default Inventory;