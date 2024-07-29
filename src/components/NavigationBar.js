import React, { useState, useEffect } from 'react';
import styles from '../styles/components/NavigationBar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationBar = () => {
    const [isAboveThreshold, setIsAboveThreshold] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    
    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        setIsAboveThreshold(window.scrollY > 0.7 * viewportHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const linkColorHandler = index => {
        return hoveredLink !== null && hoveredLink !== index ? 
            (isAboveThreshold ? "#367e8a" : "grey" ) : 
            (isAboveThreshold ? "#54d8ef" : "white");
    }

    const links = [
        { to: "/#self-introduction", description: "Home" },
        { to: "/#about-me", description: "About" },
        { to: "/#experiences", description: "Experiences"},
        { to: "/#portfolio", description: "Projects" },
        { to: "/#contact", description: "Contact" }
    ]

    return (
        <nav className={`${styles["nav-bar"]} ${isAboveThreshold ? styles["sticky-nav-bar"] : ""}`}>
            <ul className={styles["container"]}>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link["to"]}
                                className={styles["link"]}
                                onMouseEnter={() => setHoveredLink(index)}
                                onMouseLeave={() => setHoveredLink(null)}  
                                style={{
                                    color: linkColorHandler(index)
                                }}  
                            >
                                {link["description"]}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavigationBar;