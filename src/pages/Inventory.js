import NavigationBar from "../components/NavigationBar";
import BackButton from "../components/BackButton";
import styles from "../styles/pages/Inventory.module.css";
import PugImg from "../assets/TechLogos/pug.svg";
import ExpressImg from "../assets/TechLogos/express.svg";
import MongoDbImg from "../assets/TechLogos/mongodb.svg";
import CssImg from "../assets/TechLogos/css.svg";
import GithubImg from "../assets/TechLogos/github.svg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "../data/CarouselResponsiveSettings";
import InventoryImg from "../assets/InventoryImages/inventory.png";
import CategoriesImg from "../assets/InventoryImages/categories.png";
import EditImg from "../assets/InventoryImages/edit.png";
import NodeJsImg from "../assets/TechLogos/nodejs.svg";

const Inventory = () => {
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
                <div style={{paddingBottom: '30px', position: 'relative'}}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        responsive={responsive}
                    >
                        <img src={InventoryImg} className={styles["carousel-image"]} />
                        <img src={CategoriesImg} className={styles["carousel-image"]} />
                        <img src={EditImg} className={styles["carousel-image"]} />
                    </Carousel>
                </div>
                <div>
                    <a href="https://github.com/ElginL/odin-inventory" className={styles["link-to-project"]} target="_blank">
                        <p>
                            <strong>Github Repository</strong>
                        </p>
                        <img src={GithubImg} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;