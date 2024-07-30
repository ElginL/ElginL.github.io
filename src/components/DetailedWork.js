// TODO: DELETE

// import styles from '../styles/components/DetailedWork.module.css';
// import SlidingWindow from '../components/SlidingWindow';
// import NavigationBar from '../components/NavigationBar';

// const DetailedWork = ({ workTitle, windowImages, siteLink, codeLink, description, learningPoints, isLargeDisplay }) => {
//     return (
//         <div className={styles["container"]}>
//             <NavigationBar />
//             <SlidingWindow 
//                 title={workTitle} 
//                 images={windowImages}
//                 siteLink={siteLink}
//                 codeLink={codeLink}
//                 isLargeDisplay={isLargeDisplay}
//             />
//             <div className={styles["content-container"]}>
//                 <h2>Description</h2>
//                 <p>
//                     {description}
//                 </p>
//                 <h2>Key Learning Points</h2>
//                 <ul>
//                     {
//                         learningPoints.map((point, index) => (
//                             <li key={index}>
//                                 {point}
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DetailedWork;