import DetailedWork from '../components/DetailedWork';
import { cvMakerDetails as details } from '../data/CvMakerPage';

const CvMaker = () => {
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

export default CvMaker;