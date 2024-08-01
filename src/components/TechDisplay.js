import styles from "../styles/components/TechDisplay.module.css";

const TechDisplay = ({ image, label }) => {
    return (
        <div className={styles["tech-container"]}>
            <img src={image} alt={label} className={styles["image"]} />
            <p>
                {label}
            </p>
        </div>
    );
};

export default TechDisplay;