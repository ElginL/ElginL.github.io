// import DetailedWork from '../components/DetailedWork';
// import { blogDetails as details } from '../data/BlogPage';
import Carousel from "react-multi-carousel";
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import styles from '../styles/pages/Blog.module.css';
import ReactImg from '../assets/TechLogos/react.svg';
import ExpressImg from '../assets/TechLogos/express.svg';
import CssImg from '../assets/TechLogos/css.svg';
import MongoDbImg from '../assets/TechLogos/mongodb.svg';
import ViewBlog from '../assets/BlogImages/blog.png';
import BlogComments from '../assets/BlogImages/comment.jpg';
import BlogEdit from '../assets/BlogImages/edit.png';
import EditHome from '../assets/BlogImages/edithome.jpg';
import BlogLogin from '../assets/BlogImages/login.jpg';
import BlogDetails from '../assets/BlogImages/view.jpg';
import GithubImg from '../assets/TechLogos/github.svg';
import { responsive } from "../data/CarouselResponsiveSettings";
import NodeJsImg from "../assets/TechLogos/nodejs.svg";

const Blog = () => {
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    Blog
                </h2>
                <p>
                    A fullstack web application built with two separate frontends, one for blog editing (protected with credentials),
                    and the other for blog viewing.
                </p>
                <div>
                    <h2>
                        Tech stack
                    </h2>
                    <div className={styles["technologies"]}>
                        <div className={styles["tech-container"]}>
                            <img src={ReactImg} alt="react" />
                            <p>React</p>
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
                <div style={{paddingBottom: '30px', position: 'relative' }}>
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
                        <img src={ViewBlog} className={styles["carousel-image"]} />
                        <img src={BlogDetails} className={styles["carousel-image"]} />
                        <img src={BlogComments} className={styles["carousel-image"]} />
                        <img src={EditHome} className={styles["carousel-image"]} />
                        <img src={BlogLogin} className={styles["carousel-image"]} />
                        <img src={BlogEdit} className={styles["carousel-image"]} />
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

export default Blog;