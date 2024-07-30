import React, { useEffect } from 'react';
import Aos from 'aos';
import Landing from './pages/Landing';
import styles from './App.module.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('load', Aos.refresh);
  }, []);
  
  return (
    <div className={styles["app"]}>
      <Landing />
    </div>
  );
}

export default App;
