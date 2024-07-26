import DetailedWork from '../components/DetailedWork';
import { jeeqtrackerDetails as details } from '../data/JeeqTrackerPage';

const JeeqTracker = () => {
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

export default JeeqTracker;