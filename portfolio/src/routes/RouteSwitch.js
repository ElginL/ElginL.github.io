import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Splinkty from '../pages/Splinkty';
import JeeqTracker from '../pages/JeeqTracker';
import ScrollToTop from './ScrollToTop';

const RouteSwitch = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route 
                    path="/"
                    element={<App />}
                />
                <Route
                    path="/splinkty"
                    element={<Splinkty />}
                />
                <Route
                    path="/jeeqtracker"
                    element={<JeeqTracker />}
                />
            </Routes>
        </HashRouter>
    );
}

export default RouteSwitch;