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
import NodeJsImg from "../assets/TechLogos/nodejs.svg";
import ProjectCarousel from "../components/ProjectCarousel";
import LinkToGithub from '../components/LinkToGithub';
import TechDisplay from '../components/TechDisplay';

const Blog = () => {
    const carouselImages = [ViewBlog, BlogDetails, BlogComments, EditHome, BlogLogin, BlogEdit];

    const techStack = [
        { image: ReactImg, label: "React" },
        { image: ExpressImg, label: "Express" },
        { image: NodeJsImg, label: "NodeJS" },
        { image: MongoDbImg, label: "MongoDB" },
        { image: CssImg, label: "CSS" }
    ];

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
                <LinkToGithub url="https://github.com/ElginL/odin-blog-api" />
            </div>
        </div>
    );
};

export default Blog;