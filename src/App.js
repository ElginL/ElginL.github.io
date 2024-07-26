import React, { useEffect } from 'react';
import Aos from 'aos';
import Landing from './pages/Landing';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
