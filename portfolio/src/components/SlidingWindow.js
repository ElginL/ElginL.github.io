import React, { useState } from 'react';
import styles from '../styles/components/SlidingWindow.module.css';
import ForwardArrow from '../assets/forwardarrow.png';
import BackwardArrow from '../assets/backarrow.png';

const SlidingWindow = ({ title, images, siteLink, codeLink, isLargeDisplay }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextButtonHandler = () => {
        if (currentSlide + 1 === images.length) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const prevButtonHandler = () => {
        if (currentSlide - 1 === -1) {
            setCurrentSlide(images.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    return (
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>
                {title}
            </h1>
            <div className={styles["images-container"]}>
                <img
                    src={BackwardArrow} 
                    alt="Back Arrow" 
                    className={styles["arrow"]}
                    onClick={prevButtonHandler} 
                />
                {
                    images.map((image, index) => (
                        <div className={index === currentSlide ? styles["active"] : styles["inactive"] } key={index}>
                            {
                                index === currentSlide
                                    ? <img 
                                        src={image} 
                                        alt="App Screenshot" 
                                        className={ isLargeDisplay ? styles["large-image"] : styles["small-image"]} 
                                      />
                                    : null
                            }
                        </div>
                    ))
                }
                <img 
                    src={ForwardArrow}
                    alt="Forward Arrow"
                    className={styles["arrow"]}
                    onClick={nextButtonHandler}
                />
            </div>
            <div className={styles["links-container"]}>
                <a className={styles["site-link"]} href={siteLink} target="_blank" rel="noreferrer">
                    View Site
                </a>
                <a className={styles["code-link"]} href={codeLink} target="_blank" rel="noreferrer">
                    Code
                </a>
            </div>
        </div>
    );
};

export default SlidingWindow;