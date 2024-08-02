import styles from '../styles/pages/IlluminaExperience.module.css';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import CSharpImg from '../assets/TechLogos/c--4.svg';
import KeycloakImg from '../assets/TechLogos/keycloak.svg';
import KubernetesImg from '../assets/TechLogos/kubernetes.svg';
import HelmImg from '../assets/TechLogos/helm.svg';
import GhaImg from '../assets/TechLogos/gha.svg';
import BashImg from '../assets/TechLogos/bash.svg';
import OpenTelemetryImg from '../assets/TechLogos/OpenTelemetry.svg';
import GrafanaImg from '../assets/TechLogos/Grafana.svg';
import RabbitMqImg from '../assets/TechLogos/rabbitmq.svg';
import DockerImg from '../assets/TechLogos/docker.svg';

const IlluminaExperience = () => {
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["container"]}>
                <h2 className={styles["title"]}>
                    Software Development Intern @ Illumina
                </h2>
                <p className={styles["description"]}>
                    Through the six months period (8 Jan 2024 - 28 Jun 2024), I managed to pick up novel technologies and concepts
                    that has expanded my view of Software Development. The following sections briefly describe
                    my takeaways from the internship.
                </p>
                <div>
                    <h3>
                        .NET 8
                    </h3>
                    <p className={styles["description"]}>
                        I learned .NET, utilizing its dependency injection container, exception handlers, middleware, API Controller, 
                        Entity Framework, EF Migrations for database migrations, and xUnit for writing test cases.
                    </p>
                    <img src={CSharpImg} alt="c sharp" />
                </div>
                <div>
                    <h3>
                        Authentication Systems
                    </h3>
                    <p className={styles["description"]}>
                        I learned about OAuth2.0 authentication flows (Authorization Code, Client Credentials, Implicit Code,
                        Resource Owner Password) and used Keycloak as an authorization server to manage users, clients, and token claims. 
                        I also understood how JWT claims (e.g., Audience, Scopes, AZP) protect REST endpoints and how to write test cases for them.
                        Lastly, the different types of tokens and their functionalities (Access Token, Refresh Token, Identity Token, Client Token,
                        Anonymous Token)
                    </p>
                    <img src={KeycloakImg} alt="keycloak" />
                </div>
                <div>
                    <h3>
                        Microservices
                    </h3>
                    <p className={styles["description"]}>
                        I have learned more about Kubernetes resources, including Pods, Services, Deployments, Ingress, ConfigMap, Volumes, 
                        Role, RoleBinding, and Certificate. Additionally, I have explored using Helm Charts to package these resources 
                        for each service and to manage their dependencies.
                    </p>
                    <div className={styles["images-container"]}>
                        <img src={DockerImg} alt="docker" />
                        <img src={KubernetesImg} alt="kubernetes" />
                        <img src={HelmImg} alt="helm" />
                    </div>
                </div>
                <div>
                    <h3>
                        Github Actions (CI/CD)
                    </h3>
                    <p className={styles["description"]}>
                        I innovated and created a robust GitHub Actions pipeline to validate Keycloak settings during Helm chart 
                        install/upgrade, saving approximately 30 minutes of developer time. 
                        I utilized public actions to set up the environment, leveraged Kubernetes in Docker (KIND), and 
                        employed several BASH scripts to reuse functionalities. Additionally, I created pipelines to run integration tests, 
                        lint Helm charts and test its installation, run SonarQube for code quality checks, build Docker images, push them to a repository, 
                        and developed reusable actions.
                    </p>
                    <div className={styles["images-container"]}>
                        <img src={GhaImg} alt="github actions" />
                        <img src={BashImg} alt="bash" />
                    </div>
                </div>
                <div>
                    <h3>
                        Centralized Logging
                    </h3>
                    <p className={styles["description"]}>
                        I learned about centralized logging with OpenTelemetry and Grafana. 
                        This involved using the OpenTelemetry Collector, OpenTelemetry Operator, Loki, and Tempo to collect logs 
                        and traces from different services and display them in Grafana.
                    </p>
                    <div className={styles["images-container"]}>
                        <img src={OpenTelemetryImg} alt="OpenTelemetry" />
                        <img src={GrafanaImg} alt="Grafana" />
                    </div>
                </div>
                <div>
                    <h3>
                        Push Notification System
                    </h3>
                    <p className={styles["description"]}>
                        I acquired knowledge of Webhooks and the use of HMAC to secure them. 
                        Webhooks help reduce resource needs compared to polling, as the publisher notifies the subscriber only when necessary. 
                        Additionally, I learned about using message queues to decouple systems.
                    </p>
                    <img src={RabbitMqImg} alt="rabbitmq" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IlluminaExperience; 