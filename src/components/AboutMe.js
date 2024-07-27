import styles from '../styles/components/AboutMe.module.css';
import "aos/dist/aos.css";
import TechStack from './TechStack';
import HtmlImg from '../assets/TechLogos/html.svg';
import CssImg from '../assets/TechLogos/css.svg';
import JavascriptImg from '../assets/TechLogos/javascript.svg';
import ReactImg from '../assets/TechLogos/react.svg';
import ExpressImg from '../assets/TechLogos/express.svg';
import MongodbImg from '../assets/TechLogos/mongodb.svg';
import ReactNativeImg from '../assets/TechLogos/react-native.svg';
import FirebaseImg from '../assets/TechLogos/firebase.svg';
import JavaImg from '../assets/TechLogos/java.svg';
import CIconImg from '../assets/TechLogos/cIcon.svg';
import CSharpImg from '../assets/TechLogos/c--4.svg';
import DockerImg from '../assets/TechLogos/docker.svg';
import KubernetesImg from '../assets/TechLogos/kubernetes.svg';
import GHAImg from '../assets/TechLogos/gha.svg';
import PostgresqlImg from '../assets/TechLogos/postgresql.svg';
import HelmImg from '../assets/TechLogos/helm.svg';
import KeycloakImg from '../assets/TechLogos/keycloak.svg';
import WebsocketImg from '../assets/TechLogos/socket-io.svg';
import BashImg from '../assets/TechLogos/bash.svg';
import RedisImg from '../assets/TechLogos/redis.svg';
import RabbitMqImg from '../assets/TechLogos/rabbitmq.svg';
import OpenTelemetryImg from '../assets/TechLogos/OpenTelemetry.svg';
import GrafanaImg from '../assets/TechLogos/Grafana.svg';
import PythonImg from '../assets/TechLogos/Python.svg';

const AboutMe = () => {
    const technologies = [
        { image: HtmlImg, label: "HTML" },
        { image: CssImg, label: "CSS" },
        { image: JavascriptImg, label: "JavaScript" },
        { image: ReactImg, label: "React" },
        { image: ExpressImg, label: "Express" },
        { image: MongodbImg, label: "MongoDB" },
        { image: PostgresqlImg, label: "Postgresql" },
        { image: WebsocketImg, label: "Socket.io" },
        { image: JavaImg, label: "Java" },
        { image: CIconImg, label: "C" },
        { image: PythonImg, label: "Python" },
        { image: CSharpImg, label: "C#" },
        { image: DockerImg, label: "Docker" },
        { image: KubernetesImg, label: "Kubernetes" },
        { image: HelmImg, label: "Helm" },
        { image: GHAImg, label: "Github Actions" },
        { image: KeycloakImg, label: "Keycloak" },
        { image: BashImg, label: "Bash Scripting" },
        { image: RabbitMqImg, label: "RabbitMQ" },
        { image: OpenTelemetryImg, label: "OpenTelemetry" },
        { image: GrafanaImg, label: "Grafana" },
        { image: RedisImg, label: "Redis" },
        { image: ReactNativeImg, label: "React Native" },
        { image: FirebaseImg, label: "Firebase" },
    ];

    return (
        <div id="about-me" className={styles["container"]}>
            <h1 className={styles["about-header"]} data-aos="fade-up">
                About
            </h1>
            <div className={styles["text-container"]} data-aos="fade-up">
                I am a final year computer science undergraduate at National University of Singapore (NUS).
                I enjoy solving real world problems and software development, and seek to continously upskill by
                doing internships, personal projects, taking on courses and reading extensively.
            </div>
            <div className={styles["tech-stack-container"]} data-aos="fade-up">
                <h3>
                    Here are the few technologies I have worked with
                </h3>
                <div className={styles["tech-images-container"]}>
                    {
                        technologies.map((technology, index) => (
                            <TechStack
                                key={index}
                                image={technology["image"]} 
                                label={technology["label"]} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutMe;