import React, { useState, useEffect } from 'react';
import styles from '../styles/components/NavigationBar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav className={styles["nav-bar"]} style={{ top: visible ? '0' : '-60px' }}>
            <h3>
                <Link to="#self-introduction" className={styles["left-link"]}>
                    &#91;ElginL&#93;
                </Link>
            </h3>
            <ul className={styles["right-container"]}>
                <li>
                    <Link to="#about-me" className={styles["right-link"]}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio" className={styles["right-link"]}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles["right-link"]}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;