import DetailedWork from '../components/DetailedWork';
import { dashboardDetails as details } from '../data/DashboardPage';

const Dashboard = () => {
    return (
        <DetailedWork
            workTitle={details.workTitle}
            windowImages={details.windowImages}
            siteLink={details.siteLink}
            codeLink={details.codeLink}
            description={details.description}
            learningPoints={details.learningPoints}
            isLargeDisplay={true}
        />
    );
};

export default Dashboard;