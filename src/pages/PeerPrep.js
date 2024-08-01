import styles from '../styles/pages/PeerPrep.module.css';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import ProjectCarousel from '../components/ProjectCarousel';
import ReactImg from '../assets/TechLogos/react.svg';
import MongodbImg from '../assets/TechLogos/mongodb.svg';
import NodeJsImg from '../assets/TechLogos/nodejs.svg';
import ExpressImg from '../assets/TechLogos/express.svg';
import KubernetesImg from '../assets/TechLogos/kubernetes.svg';
import DockerImg from '../assets/TechLogos/docker.svg';
import GithubActionsImg from '../assets/TechLogos/gha.svg';
import PostgresqlImg from '../assets/TechLogos/postgresql.svg';
import Judge0Img from '../assets/TechLogos/judge0.png';
import DigitalOceanImg from '../assets/TechLogos/digitalocean-icon.svg';
import WebsocketImg from '../assets/TechLogos/socket-io.svg';
import SignInImg from '../assets/PeerPrepImages/signin.png'
import QuestionsImg from '../assets/PeerPrepImages/questions.png'
import MatchingImg from '../assets/PeerPrepImages/matching.png'
import RoomImg from '../assets/PeerPrepImages/room.png'
import CodeExecutionImg from '../assets/PeerPrepImages/code-execution.png'
import HistoryImg from '../assets/PeerPrepImages/history.png'
import LinkToGithub from '../components/LinkToGithub';
import TechDisplay from '../components/TechDisplay';

const PeerPrep = () => {
    const carouselImages = [
        SignInImg,
        QuestionsImg,
        MatchingImg,
        RoomImg,
        CodeExecutionImg,
        HistoryImg
    ];

    const techStack = [
        { image: ReactImg, label: "React" },
        { image: ExpressImg, label: "Express" },
        { image: NodeJsImg, label: "NodeJS" },
        { image: MongodbImg, label: "MongoDB" },
        { image: PostgresqlImg, label: "Postgresql" },
        { image: WebsocketImg, label: "Websocket" },
        { image: DockerImg, label: "Docker" },
        { image: KubernetesImg, label: "Kubernetes" },
        { image: DigitalOceanImg, label: "Digital Ocean" },
        { image: GithubActionsImg, label: "Github Actions" },
        { image: Judge0Img, label: "Judge0" }
    ]

    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["content-container"]}>
                <h2 className={styles["project-title"]}>
                    PeerPrep
                </h2>
                <p>
                    A web application built for people to match with other users to practice Leetcode!<br/> Users join a queue to
                    match with others based on difficulty, and solve the problem together through a chatbox, or built in microphone.
                    Code execution is supported and saves history as well.<br/>
                    The frontend is hosted on DigitalOcean, while the backend consists of microservices orchestrated by a Kubernetes cluster with TLS enabled.
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
                <ProjectCarousel images={carouselImages} carouselImageHeight="450px"  />
                <LinkToGithub url="https://github.com/ElginL/PeerPrep" />
            </div>
        </div>
    )
};

export default PeerPrep;