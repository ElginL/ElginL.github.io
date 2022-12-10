import styles from '../styles/components/Portfolio.module.css';
import FeaturedWork from '../components/FeaturedWork';
import "aos/dist/aos.css";
import { portfolioData } from '../data/Portfolio';

const Portfolio = () => {
    return (
        <div id="portfolio" className={styles["container"]}>
            <h1 className={styles["portfolio-header"]} data-aos="fade-up">
                Portfolio
            </h1>
            <h2 className={styles["featured-header"]} data-aos="fade-up">
                Featured work
            </h2>
            <div className={styles["projects-container"]}>
                {
                    portfolioData.map((work, index) => (
                        <FeaturedWork
                            image={work.image}
                            workTitle={work.workTitle}
                            workDescription={work.workDescription}
                            technologies={work.technologies}
                            githubLink={work.githubLink}
                            isSmallImage={work.isSmallImage}
                            isNotFlipped={index % 2 === 0}
                            detailedPageLink={work.pathToDetailedPage}
                            documentationLink={work.documentationLink}
                            websiteLink={work.websiteLink}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;