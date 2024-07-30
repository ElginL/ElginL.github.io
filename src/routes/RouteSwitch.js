import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Splinkty from '../pages/Splinkty';
import JeeqTracker from '../pages/JeeqTracker';
import Duke from '../pages/Duke';
import ShoppingCart from '../pages/ShoppingCart';
import Dashboard from '../pages/Dashboard';
import CvMaker from '../pages/CvMaker';
import Blog from '../pages/Blog';
import Inventory from '../pages/Inventory';
import ScrollToTop from './ScrollToTop';
import IlluminaExperience from '../pages/IlluminaExperience';
import TitansoftExperience from '../pages/TitansoftExperience';

const RouteSwitch = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/splinkty" element={<Splinkty />} />
                <Route path="/jeeqtracker" element={<JeeqTracker />} />
                <Route path="/duke" element={<Duke />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cvmaker" element={<CvMaker />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/illumina" element={<IlluminaExperience />} />
                <Route path="/titansoft" element={<TitansoftExperience />} />
            </Routes>
        </HashRouter>
    );
}

export default RouteSwitch;