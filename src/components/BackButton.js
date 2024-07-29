import React, { useState } from 'react';
import styles from '../styles/components/BackButton.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { HashLink as Link } from 'react-router-hash-link';

const BackButton = () => {
    const [backHovered, setBackHovered] = useState(false);

    return (
        <div className={styles["link-container"]}>
            <Link 
                onMouseEnter={() => setBackHovered(true)} 
                onMouseLeave={() => setBackHovered(false)}
                to="/"
            >
                <ArrowBackIcon className={styles["back-arrow"]} />
            </Link>
            <h3 
                className={styles["back-text"]}
                style={{
                    opacity: backHovered ? 1 : 0,
                    transform: backHovered ? 'translateX(-5px)' : 'translateX(5px)'
                }}
            >
                Back
            </h3>
        </div>
    )
}

export default BackButton; 