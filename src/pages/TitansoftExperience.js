import styles from '../styles/pages/TitansoftExperience.module.css';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import CSharpImg from '../assets/TechLogos/c--4.svg';
import RedisImg from '../assets/TechLogos/redis.svg';
import SqlImg from '../assets/TechLogos/mssql.svg';
import KafkaImg from '../assets/TechLogos/kafka.svg';
import DebeziumImg from '../assets/TechLogos/debezium.svg';

const TitansoftExperience = () => {
    return (
        <div>
            <NavigationBar />
            <BackButton />
            <div className={styles["container"]}>
                <h2 className={styles["title"]}>
                    Software Developer Intern @ Titansoft
                </h2>
                <p className={styles["description"]}>
                    For a period of three months (8 May 2023 - 11 Aug 2023), I worked on a database cache service with 3 other interns. I picked up several technologies and
                    learned a lot about system design. The following sections briefly describe my takeaways.
                </p>
                <div>
                    <h3>
                        .NET
                    </h3>
                    <p className={styles["description"]}>
                        I worked with .NET for the project, and have written robust test cases with NUnit. Clean coding is practiced with numerous mentor code reviews,
                        utilizing generics and adhering to design patterns such as Factory pattern, and making use of dependency injection extensively.
                    </p>
                    <img src={CSharpImg} alt="c sharp" className={styles["tech-image"]} />
                </div>
                <div>
                    <h3>
                        Redis
                    </h3>
                    <p className={styles["description"]}>
                        Redis is used as the cache for the database as it offers storing data in RAM, which allows for fast read and write operations to reduce latency
                        from fetching data.
                    </p>
                    <img src={RedisImg} alt="redis" className={styles["tech-image"]} />
                </div>
                <div>
                    <h3>
                        SQL
                    </h3>
                    <p className={styles["description"]}>
                        I learned about SQL Change Tracking and SQL Change Data Capture (CDC) that allows detecting any insert / update / delete operations done on
                        any row entry, which plays a part in cache synchronization.
                    </p>
                    <img src={SqlImg} className={`${styles["tech-image"]} ${styles["img-white-background"]}`} alt="sql" />
                </div>
                <div>
                    <h3>
                        Hangfire
                    </h3>
                    <p className={styles["description"]}>
                        Allows a background cron job to read from the change tracking table and sync the cache with the database.
                    </p>
                </div>
                <div>
                    <h3>
                        Kafka and Debezium
                    </h3>
                    <p className={styles["description"]}>
                        As an alternative cache synchronization strategy, we used Kafka with Debezium to stream database changes, 
                        which are then consumed by our .NET application for synchronization.
                    </p>
                    <div className={styles["images-container"]}>
                        <img src={KafkaImg} alt="kafka" />
                        <img src={DebeziumImg} className={`${styles["tech-image"]} ${styles["img-white-background"]}`} alt="debezium" />
                    </div>
                </div>
                <div>
                    <h3>
                        System Design
                    </h3>
                    <p className={styles["description"]}>
                        Our team spent a week sketching architectural diagrams of possible designs, evaluating the advantages and disadvantages.
                        I learned about the concepts of scalability, availability, and different deployment strategy such as canary deployment and
                        rolling updates. I also learned about possible cache problems such as the thunderherd problem, cache penetration and cache breakdown.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TitansoftExperience; 