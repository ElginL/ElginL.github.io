import styles from '../styles/pages/PeerPrep.module.css';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import ProjectCarousel from '../components/ProjectCarousel';
import GithubImg from '../assets/TechLogos/github.svg';
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

const PeerPrep = () => {
    const carouselImages = [
        SignInImg,
        QuestionsImg,
        MatchingImg,
        RoomImg,
        CodeExecutionImg,
        HistoryImg
    ];

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
                            <img src={MongodbImg} alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={PostgresqlImg} alt="postgresql" />
                            <p>Postgresql</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={WebsocketImg} alt="websocket" />
                            <p>Websocket</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={DockerImg} alt="docker" />
                            <p>Docker</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={KubernetesImg} alt="kubernetes" />
                            <p>Kubernetes</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={DigitalOceanImg} alt="digital ocean" />
                            <p>Digital Ocean</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={GithubActionsImg} alt="github actions" />
                            <p>Github Actions</p>
                        </div>
                        <div className={styles["tech-container"]}>
                            <img src={Judge0Img} alt="judge0" style={{ width: '70px', height: '70px' }} />
                            <p>Judge0</p>
                        </div>
                    </div>
                </div>
                <ProjectCarousel images={carouselImages} carouselImageHeight="450px"  />
                <div>
                    <a href="https://github.com/ElginL/PeerPrep" className={styles["link-to-project"]} target="_blank" rel="noreferrer">
                        <p>
                            <strong>Github Repository</strong>
                        </p>
                        <img src={GithubImg} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default PeerPrep;