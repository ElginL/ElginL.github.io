import styles from '../styles/components/TechStack.module.css';

const TechStack = ({ image, label }) => {
    return (
        <div className={styles["container"]}>
            <img src={image} alt={label} />
            <p>
                {label}
            </p>
        </div>
    )
}

export default TechStack;